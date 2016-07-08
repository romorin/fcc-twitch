/*jshint esversion: 6 */

var REGULARS = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck" , "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

// Api handler configuration
/*var createListGetter = function () { return new TestApiGetter(TEST_TWITCH_LIST_JSON ); };
var createChannelGetter = function () { return new TestApiGetter(TEST_TWITCH_CHANNEL_JSON ); };
var createFeaturedGetter = function () { return new TestApiGetter(TEST_TWITCH_FEATURED_JSON ); };
*/
var createListGetter = function () { return new RealApiGetter(generateRegularsQueryUrl); };
var createChannelGetter = function () { return new RealApiGetter(generateChannelQueryUrl); };
var createFeaturedGetter = function () { return new RealApiGetter(generateFeaturedQueryUrl); };

/*********************************************************
	Url generators
*********************************************************/

function generateFeaturedQueryUrl() {
	return "https://api.twitch.tv/kraken/streams/featured";
}

function generateRegularsQueryUrl() {
	var queryUrl = "https://api.twitch.tv/kraken/streams?channel=";

	REGULARS.forEach( function(entry, i) {
		if (i > 0) {
			queryUrl += ',';
		}
		queryUrl += encodeURIComponent(entry);
	});
	return queryUrl;
}

function generateChannelQueryUrl(channel) {
	return "https://api.twitch.tv/kraken/channels/" + encodeURIComponent(channel);
}

/*
	Gets json from the url specified by its member generator
*/
var RealApiGetter = (function () {
	/*
		Ctr

		@param urlGenerator	the generator function
	*/
	function RealApiGetter(urlGenerator) {
		this._urlGenerator = urlGenerator;
	}

	/*
		Get json from its url and call the appropriate callbacks

		@param handlers : {onDone: fct, onFail: fct, always: fct}
			the handlers to call after received the data

		@param ...generatorArgs
			the arguments required by the generator
	*/
	RealApiGetter.prototype.fetch = function(handlers, ...generatorArgs) {
		var request = jQuery.getJSON(this._urlGenerator(generatorArgs));

		if (handlers.onDone) { request.done(handlers.onDone);}
		if (handlers.onFail) { request.fail(handlers.onFail);}
		if (handlers.always) { request.always(handlers.always);}
	};

	return RealApiGetter;
})();

/*********************************************************
	TwitchersBuilder

	Manage the display from a list of streams fetched from the url getter
*********************************************************/

var TwitchersBuilder = (function () {

	//////////////////////////////////////////////////
	// Public

	/*
		Constructor

		@param urlGetter		the source for the json data
		@param listPath		the path from the base json to the entry list
		@param streamPath		the path from the entry list json to the stream
		@param channelPath	the path from the stream json to the channel
	*/
	function TwitchersBuilder(urlGetter, listPath, streamPath, channelPath) {
		this._urlGetter = urlGetter;
		this._listPath = listPath;
		this._streamPath = streamPath;
		this._channelPath = channelPath;

		this._resContainer = jQuery(".results");
		this._resTemplate = jQuery(jQuery("#result-template").html());

		this._loadedTwichers = [];
	}

	/*
		Clears the displayed entries and display a new list of streams from the generator
	*/
	TwitchersBuilder.prototype.reset = function() {
		// flush old results
		this._resContainer.hide();
		this._resContainer.empty();
		this._loadedTwichers = [];

		// fetch the streams
		this._urlGetter.fetch({
			'onDone' : function (json) {
				buildFromStreams.call(this, json);
				this.finishDisplay.call(this);
			}.bind(this)}
		);
	};

	////////////////////////////////////////
	// Internal

	/*
		Apply the stream json to the specified template

		@param template	the template node to change
		@param stream		the source stream json

		@returns if the template could be applied
	*/
	TwitchersBuilder.prototype.buildStream = function(template, stream) {
		var channel = getNested(stream, this._channelPath);
		if ( channel === null  || !('game' in stream) || !('viewers' in stream)) {
			return false;
		}

		template.find(".game").html(stream.game).show();
		template.find(".viewers").show().find(".value").html(stream.viewers);

		return this.buildChannel.call(this, template, channel, true);
	};

	/*
		Apply the channel json to the specified template

		@param template	the template node to change
		@param channel		the source channel json
		@param isOnline	wether the channel is streaming

		@returns if the template could be applied
	*/
	TwitchersBuilder.prototype.buildChannel = function(template, channel, isOnline) {
		if(!('logo' in channel) || !('name' in channel) ||
			!('status' in channel) || !('url' in channel)) {
			return false;
		}

		var logoElem = template.find(".logo");
		logoElem.prop("src", channel.logo);
		logoElem.prop("alt", channel.name);

		// handle mouse behaviour
		template.on("click", null, channel.url,
			function (event) {window.location.href = event.data;}
		);
		template.hover(
			function (event) {
				var target = jQuery(event.currentTarget);
				target.addClass('linkable');
				target.find(".status-border").removeClass('hidden');
			},
			function (event) {
				var target = jQuery(event.currentTarget);
				target.removeClass('linkable');
				target.find(".status-border").addClass('hidden');
			}
		);

		return this.buildEntry.call(this, template, channel.name, isOnline);
	};

	/*
		Set the base entry data to the specified template

		@param template	the template node to change
		@param name			the name of the entry
		@param isOnline	wether the channel is streaming
		@param extra		optional extra data to display

		@returns if the template could be applied
	*/
	TwitchersBuilder.prototype.buildEntry = function(template, name, isOnline, extra ) {
		template.find(".title").html(name);

		if(extra) {
			template.find(".extra").html(extra).show();
		}
		template.addClass(isOnline ? "online" : "offline");

		this._loadedTwichers.push(name);
		this._resContainer.append(template);

		return true;
	};

	/*
		Called after the stream list is finished displaying - override to add extra data
	*/
	TwitchersBuilder.prototype.finishDisplay = function () {
		this.filterStatus.call(this);
		this._resContainer.show();
	};

	/*
		Only display the elements with the specified status from the input radio
	*/
	TwitchersBuilder.prototype.filterStatus = function() {
		var filter = jQuery("input:radio[name=view]:checked").attr('id');

		switch(filter) {
			case 'all':
				this._resContainer.find('.online').show();
				this._resContainer.find('.offline').show();
				break;
			case 'online':
				this._resContainer.find('.online').show();
				this._resContainer.find('.offline').hide();
				break;
			case 'offline':
				this._resContainer.find('.online').hide();
				this._resContainer.find('.offline').show();
				break;
		}
	};

	//////////////////////////////////
	// Local

	/*
		Helper function to safely get a child from json

		@param json	the source data
		@param path the path to the wanted node

		@returns the node if found, or null
	*/
	function getNested(json, path) {
		if (!path) {
			return json;
		}
		var parr = path.split('.');
		var elem = json;
		for (var i = 0; i < parr.length; i++) {
			elem = elem[parr[i]];
			if (!elem) {return null;}
		}
		return elem;
	}

	/*
		Build the stream list from the returned json
	*/
	function buildFromStreams(json) {
		var list = getNested(json, this._listPath);
		if ( list === null || (Array.isArray && !Array.isArray(list) ) ) {
			return;
		}

		list.forEach(function (entry, i) {
			var template = this._resTemplate.clone();
			this.buildStream.call(this, template, getNested(entry, this._streamPath));
		}, this);
	}

	return TwitchersBuilder;
})();

/*********************************************************
	RegularsTwitchersBuilder overrides TwitchersBuilder

	Manage the display from a list of channels by fetching the online streams
	then appends the missing offline entries
*********************************************************/
var RegularsTwitchersBuilder = (function () {

	///////////////////////////////////////
	// Public
	/*
		Ctr

		@param listGetter		getter to get online streams from a list of channels
		@param channelGetter	getter to get info for a channel
		@param listPath		path from the listGetter json to the list entries
		@param streamPath		path from the list entries to the stream object
		@param channelPath	path from the stream object to the channel object
		@param list				the list of channel name to display
	*/
	function RegularsTwitchersBuilder(listGetter, channelGetter, listPath, streamPath, channelPath, list) {
		TwitchersBuilder.call(this, listGetter, listPath, streamPath, channelPath);

		this._channelGetter = channelGetter;
		this._list = list;
		this._numMissing = 0;
	}

	// object plumbing
	RegularsTwitchersBuilder.prototype = Object.create(TwitchersBuilder.prototype);
	RegularsTwitchersBuilder.prototype.constructor = RegularsTwitchersBuilder;

	/*
		Overrides TwitchersBuilder.finishDisplay to append the offline channels
	*/
	RegularsTwitchersBuilder.prototype.finishDisplay = function () {
		this._numMissing = 0;

		// find the unloadeds
		var unloaded = [];
		this._list.forEach(function(entry) {
			if (!isLoaded.call(this, entry)) {
				unloaded.push(entry);
			}
		}, this);

		// fetch the unloadeds
		unloaded.forEach(function(entry){
			this._channelGetter.fetch({
				'onDone' : function (json) {
					var template = this._resTemplate.clone();
					if (!this.buildChannel.call(this, template, json, false)) {
						this._numMissing++;
					}
				}.bind(this),
				'onFail' : function (json) {
					this._numMissing++;
				}.bind(this),
				'always' : function (json) {
					checkReceivedAll.call(this);
				}.bind(this)
			}, entry);
		}, this);
	};

	/////////////////////////////////////////
	// Local

	/*
		Check if the specified channel is in the loaded list
		(case gets modified my the api)
	*/
	function isLoaded(name) {
		for(var i = 0; i < this._loadedTwichers.length; i++) {
			if (name.toLowerCase() === this._loadedTwichers[i].toLowerCase()) {
				return true;
			}
		}
		return false;
	}

	/*
		Called after receiving a response to check if it is the last one
		to finish the building process
	*/
	function checkReceivedAll() {
		if ((this._loadedTwichers.length + this._numMissing) >= this._list.length) {

			// build base info for the missings
			this._list.forEach(function (entry) {
				if (!isLoaded.call(this, entry)) {
					var template = this._resTemplate.clone();
					this.buildEntry.call(this, template, entry, false, "Account closed");
				}
			}, this);

			// we are really finished
			TwitchersBuilder.prototype.finishDisplay.call(this);
		}
	}

	return RegularsTwitchersBuilder;
})();

/*********************************************************
	Twitch page handler
*********************************************************/

var TwitchHandler = (function () {

	//////////////////////////////////////////
	// Public

	/*
		Ctr
	*/
	function TwitchHandler() {
		this._twitchRegularsBuilder = new RegularsTwitchersBuilder(createListGetter(), createChannelGetter(),
			'streams', '', 'channel', REGULARS);
		this._twitchFeaturedBuilder = new TwitchersBuilder(createFeaturedGetter(), 'featured', 'stream', 'channel');
	}

	/*
		called when the user chooses how to find the twitch streams
	*/
	TwitchHandler.prototype.onSourceChange = function() {
		var source = jQuery("input:radio[name=source]:checked").attr('id');

		switch(source) {
			case 'regulars':
				this._currentBuilder = this._twitchRegularsBuilder;
				break;
			case 'featured':
				this._currentBuilder = this._twitchFeaturedBuilder;
				break;
		}
		this._currentBuilder.reset();
	};

	/*
		called when the user chooses what twitch streams to display

	*/
	TwitchHandler.prototype.onViewChange = function() {
		if (this._currentBuilder) {
			this._currentBuilder.filterStatus();
		}
	};

	return TwitchHandler;
})();

/*********************************************************
	jQuery bindings
*********************************************************/

// to be done when the page is ready
jQuery(document).ready(function() {
	var pageHandler = new TwitchHandler();

	// handle source change
	jQuery("input[name=source]:radio").change(pageHandler.onSourceChange.bind(pageHandler));

	// handle view change
	jQuery("input[name=view]:radio").change(pageHandler.onViewChange.bind(pageHandler));

	// manually call onSourceChange to get an itial view
	pageHandler.onSourceChange();
});
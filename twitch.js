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

var RealApiGetter = (function () {
	function RealApiGetter(urlGenerator) {
		this._urlGenerator = urlGenerator;
	}

	// handlers : {onDone: fct, onFail: fct, always: fct}
	RealApiGetter.prototype.fetch = function(handlers, ...generatorArgs) {
		var request = jQuery.getJSON(this._urlGenerator(generatorArgs));

		if (handlers.onDone) { request.done(handlers.onDone);}
		if (handlers.onFail) { request.fail(handlers.onFail);}
		if (handlers.always) { request.always(handlers.always);}
	};

	return RealApiGetter;
})();

var TwitchersBuilder = (function () {
	/*
		Public
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

	TwitchersBuilder.prototype.reset = function() {
		// flush old results
		this._resContainer.hide();
		this._resContainer.empty();
		this._loadedTwichers = [];

		this._urlGetter.fetch({
			'onDone' : function (json) {
				buildFromStreams.call(this, json);
				this.finishDisplay.call(this);
			}.bind(this)}
		);
	};

	/*
		Protected
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

	TwitchersBuilder.prototype.finishDisplay = function () {
		this.filterStatus.call(this);
		this._resContainer.show();
	};

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
		Private
	*/
	function buildFromStreams(json) {
		var streams = getNested(json, this._listPath);
		if ( streams === null || (Array.isArray && !Array.isArray(streams) ) ) {
			return;
		}

		// array of the online streamers
		streams.forEach(function (entry, i) {
			var template = this._resTemplate.clone();
			this.buildStream.call(this, template, getNested(entry, this._streamPath));
		}, this);
	}

	return TwitchersBuilder;
})();

var RegularsTwitchersBuilder = (function () {
	// ctr
	function RegularsTwitchersBuilder(listGetter, listPath, streamPath, channelPath, channelGetter, list) {
		TwitchersBuilder.call(this, listGetter, listPath, streamPath, channelPath);

		this._channelGetter = channelGetter;
		this._list = list;
		this._numMissing = 0;
	}

	RegularsTwitchersBuilder.prototype = Object.create(TwitchersBuilder.prototype);
	RegularsTwitchersBuilder.prototype.constructor = RegularsTwitchersBuilder;

	RegularsTwitchersBuilder.prototype.finishDisplay = function () {
		this._numMissing = 0;

		var unloaded = [];
		this._list.forEach(function(entry) {
			if (!isLoaded.call(this, entry)) {
				unloaded.push(entry);
			}
		}, this);
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

	// case gets modified my the api
	function isLoaded(name) {
		for(var i = 0; i < this._loadedTwichers.length; i++) {
			if (name.toLowerCase() === this._loadedTwichers[i].toLowerCase()) {
				return true;
			}
		}
		return false;
	}

	function checkReceivedAll() {
		if ((this._loadedTwichers.length + this._numMissing) >= this._list.length) {
			this._list.forEach(function (entry) {
				if (!isLoaded.call(this, entry)) {
					var template = this._resTemplate.clone();
					this.buildEntry.call(this, template, entry, false, "Account closed");
				}
			}, this);
			TwitchersBuilder.prototype.finishDisplay.call(this);
		}
	}

	return RegularsTwitchersBuilder;
})();

/*********************************************************
	Twitch handler
*********************************************************/

var TwitchHandler = (function () {
	// ctr
	function TwitchHandler() {
		this._twitchRegularsBuilder = new RegularsTwitchersBuilder(createListGetter(), 'streams', '', 'channel',
			createChannelGetter(), REGULARS);
		this._twitchFeaturedBuilder = new TwitchersBuilder(createFeaturedGetter(), 'featured', 'stream', 'channel');
	}

	// called when the user chooses how to find the twitch streams
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

	// called when the user chooses what twitch streams to display
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
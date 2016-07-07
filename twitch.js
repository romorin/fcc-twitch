/*jshint esversion: 6 */

var REGULARS = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck" , "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

// Api handler configuration
/*var createListGetter = function () { return new TestApiGetter(TEST_TWITCH_LIST_JSON ); };
var createChannelGetter = function () { return new TestApiGetter(TEST_TWITCH_CHANNEL_JSON ); };
var createFeaturedGetter = function () { return new TestApiGetter(TEST_TWITCH_FEATURED_JSON ); };*/

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
	function TwitchersBuilder(urlGetter, elemPath, channelPath) {
		this._urlGetter = urlGetter;
		this._elemPath = elemPath;
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
	TwitchersBuilder.prototype.buildChannel = function(channel, isOnline) {
		if(!('logo' in channel) || !('name' in channel) ||
			!('status' in channel) || !('url' in channel)) {
			return false;
		}

		this.buildEntry.call(this, channel.name, channel.status, isOnline, channel.logo, channel.url);
		return true;
	};

	TwitchersBuilder.prototype.buildEntry = function(name, status, isOnline, logo, url ) {
		// clone the template and fill the blanks
		var copy = this._resTemplate.clone();
		copy.find(".title").html(name);
		copy.find(".content").html(status);

		var statusClass = isOnline ? "online" : "offline";
		copy.addClass(statusClass);

		var logoElem = copy.find(".logo");
		if (logo) {
			logoElem.prop("src", logo);
			logoElem.prop("alt", name);
		}

		// handle mouse behaviour
		if (url) {
			copy.on("click", null, url,
				function (event) {window.location.href = event.data;}
			);
			copy.hover(
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
		}

		this._loadedTwichers.push(name);
		this._resContainer.append(copy);
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
		var streams = getNested(json, this._elemPath);
		if ( streams === null || (Array.isArray && !Array.isArray(streams) ) ) {
			return;
		}

		// array of the online streamers
		streams.forEach(function (entry, i) {
			// skip invalid result
			var channel = getNested(streams[i], this._channelPath);
			if ( channel === null ) {
				return;
			}
			// clone the template and fill the blanks
			this.buildChannel(channel, true);
		}, this);
	}

	return TwitchersBuilder;
})();

var RegularsTwitchersBuilder = (function () {
	// ctr
	function RegularsTwitchersBuilder(listGetter, elemPath, channelPath, channelGetter, list) {
		TwitchersBuilder.call(this, listGetter, elemPath, channelPath);

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
					if (!this.buildChannel(json, false)) {
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
					this.buildEntry.call(this, entry, "Account closed", false);
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
		this._twitchRegularsBuilder = new RegularsTwitchersBuilder(createListGetter(), 'streams', 'channel',
			createChannelGetter(), REGULARS);
		this._twitchFeaturedBuilder = new TwitchersBuilder(createFeaturedGetter(), 'featured', 'stream.channel');
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
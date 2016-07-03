
var LIST_STEP = 10;

var REGULARS = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

// Api handler configuration
var createListGetter = function () { return new TestApiGetter(TEST_TWITCH_LIST_JSON); };
var createChannelGetter = function () { return new TestApiGetter(TEST_TWITCH_CHANNEL_ERROR_JSON); };
var createFeaturedGetter = function () { return new TestApiGetter(TEST_TWITCH_FEATURED_JSON); };

var TwitchersBuilder = (function () {
	/*
		Public
	*/
	function TwitchersBuilder(urlGetter) {
		this._urlGetter = urlGetter;

		this._resContainer = jQuery(".results");
		this._resTemplate = jQuery(jQuery("#result-template").html());

		this._loadedTwichers = [];
	}

	TwitchersBuilder.prototype.reset = function() {
		// flush old results
		this._resContainer.empty();
		this._loadedTwichers = [];

		this._urlGetter.fetch(onReceivedStreamings.bind(this));
	};

	/*
		Protected
	*/
	TwitchersBuilder.prototype.buildChannel = function(channel) {
		if(!('logo' in channel) || !('name' in channel) ||
			!('status' in channel) || !('url' in channel)) {
			return false;
		}

		this.buildEntry.call(this, channel.name, channel.status, channel.logo, channel.url);
		return true;
	};

	TwitchersBuilder.prototype.buildEntry = function(name, status, logo, url ) {
		// clone the template and fill the blanks
		var copy = this._resTemplate.clone();
		copy.find(".title").html(name);
		copy.find(".content").html(status);

		if (logo) {
			copy.find(".logo").prop("src", logo);
			copy.find(".logo").prop("alt", name);
		}

		// handle mouse behaviour
		if (url) {
			copy.on("click", null, url, 
				function (event) {window.location.href = event.data;}
			);
			copy.hover(
				function (event) {jQuery(event.currentTarget).addClass('hovering-result');},
				function (event) {jQuery(event.currentTarget).removeClass('hovering-result');}
			);
		}

		this._loadedTwichers.push(name);
		this._resContainer.append(copy);
	};

	TwitchersBuilder.prototype.runPostStreamings = function () {
		this._resContainer.show();
	};

	/*
		Private
	*/
	function buildStreaming(json) {
		if ( !('streams' in json) || (Array.isArray && !Array.isArray(json.streams) ) ) {
			return;
		}
		var streams = json.streams;

		// array of the online streamers
		for (var i = 0; i < streams.length; i++) {
			// skip invalid result
			if (!(streams.hasOwnProperty(i)) || !('channel' in streams[i])) {
				continue;
			}
			// clone the template and fill the blanks
			this.buildChannel(streams[i].channel);
		}
	}

	function onReceivedStreamings(json) {
		buildStreaming.call(this, json);
		this.runPostStreamings.call(this);
	}

	return TwitchersBuilder;
})();

var RegularsTwitchersBuilder = (function () {
	// ctr
	function RegularsTwitchersBuilder(listGetter, channelGetter, list) {
		TwitchersBuilder.call(this, listGetter);

		this._channelGetter = channelGetter;
		this._list = list;
		this._numMissing = 0;
	}

	RegularsTwitchersBuilder.prototype = Object.create(TwitchersBuilder.prototype);
	RegularsTwitchersBuilder.prototype.constructor = RegularsTwitchersBuilder;

	// case gets modified my the api
	function isLoaded(name) {
		for (var j = 0; j < this._loadedTwichers.length; j++) {
			if (name.toLowerCase() === this._loadedTwichers[j].toLowerCase()) {
				return true;
			}
		}
		return false;
	}

	RegularsTwitchersBuilder.prototype.runPostStreamings = function () {
		this._numMissing = 0;

		var unloaded = [];
		for (var i = 0; i < this._list.length; i++) {
			if (!isLoaded.call(this, this._list[i])) {
				unloaded.push(this._list[i]);
			}
		}
		for (i = 0; i < unloaded.length; i++) {
			this._channelGetter.fetch(onReceivedChannel.bind(this), unloaded[i]);
		}
	};

	function onReceivedChannel(json) {
		if (!this.buildChannel(json)) {
			this._numMissing++;
		}
		if ((this._loadedTwichers.length + this._numMissing) >= this._list.length) {
			buildMissings.call(this);
			this._resContainer.show();
		}
	}

	function buildMissings() {
		for (var i = 0; i < this._list.length; i++) {
			var entry = this._list[i];
			if (!isLoaded.call(this, entry)) {
				this.buildEntry.call(this, entry, "Account closed", "http://placehold.it/300x300?text=?");
			}
		}
		this._resContainer.show();
	}

	return RegularsTwitchersBuilder;
})();

/*********************************************************
	Twitch handler
*********************************************************/

var TwitchHandler = (function () {
	// ctr
	function TwitchHandler() {
		this._offset = 0;
		this._lastJson = {};
		this._viewType = jQuery("input:radio[name=view]:checked").attr('id');

		this._twitchRegularsBuilder = new RegularsTwitchersBuilder(createListGetter(), createChannelGetter(), REGULARS);
		this._twitchFeaturedBuilder = new TwitchersBuilder(createFeaturedGetter());
	}

	// called when the user chooses how to find the twitch streams
	TwitchHandler.prototype.onSourceChange = function() {
		var source = jQuery("input:radio[name=source]:checked").attr('id');

		switch(source) {
			case 'regulars':
				jQuery(".search-bar").hide();
				this._twitchRegularsBuilder.reset();
				break;
			case 'featured':
				jQuery(".search-bar").hide();
				this._twitchFeaturedBuilder.reset();
				break;
		}
	};

	// called when the user chooses what twitch streams to display
	TwitchHandler.prototype.onViewChange = function() {
		var view = jQuery("input:radio[name=view]:checked").attr('id');

		if (this._viewType !== view) {
			this._viewType = view;
			//this.displayTwitchers.call(this, this._lastJson);
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
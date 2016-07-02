
var LIST_STEP = 10;

var REGULARS = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

// Api handler configuration
var createRegularsGetter = function () { return new TestApiGetter(TEST_TWITCH_REGULAR_JSON); };
var createFeaturedGetter = function () { return new TestApiGetter(TEST_TWITCH_FEATURED_JSON); };
var createSearchGetter = function () { return new TestApiGetter(TEST_TWITCH_SEARCH_JSON); };

var TwitchersBuilder = (function () {
	/*
		Public
	*/
	function TwitchersBuilder(urlGetter) {
		this._urlGetter = urlGetter;

		this._resContainer = jQuery(".results");
		this._resTemplate = jQuery(jQuery("#result-template").html());
	}

	TwitchersBuilder.prototype.reset = function() {
		// flush old results
		this._resContainer.empty();

		this._urlGetter.fetch(onReceivedStreamings.bind(this));
	};

	/*
		Protected
	*/
	TwitchersBuilder.prototype.buildEntry = function(name, status, logo, url) {
		// clone the template and fill the blanks
		var copy = this._resTemplate.clone();
		copy.find(".title").html(name);
		copy.find(".content").html(status);
		copy.find(".logo").prop("src", logo);
		copy.find(".logo").prop("alt", name);

		// handle mouse behaviour
		copy.on("click", null, url, resultClick.bind(this));
		copy.hover(resultHoverIn.bind(this), resultHoverOut.bind(this));

		return copy;
	};

	TwitchersBuilder.prototype.runPostStreamings = function () {
		this._resContainer.show();
	};

	/*
		Private
	*/
	// called when the user click on a search result
	function resultClick(event) {
		window.location.href = event.data;
	}

	// focus the result when the user hover over it.
	function resultHoverIn(event) {
		jQuery(event.currentTarget).addClass('hovering-result');
	}

	// removes the focus when the pointer leaves the result
	function resultHoverOut(event) {
		jQuery(event.currentTarget).removeClass('hovering-result');
	}

	function buildStreaming(json) {
		if ( !('streams' in json) || (Array.isArray && !Array.isArray(json.streams) ) ) {
			return;
		}
		var streams = json.streams;

		// array of the online streamers
		for (var i = 0; i < streams.length; i++) {
			// skip invalid result
			if (!(streams.hasOwnProperty(i)) || !('channel' in streams[i]) ||
				!('logo' in streams[i].channel) || !('name' in streams[i].channel) ||
				!('status' in streams[i].channel) || !('url' in streams[i].channel)) {
				continue;
			}
			// clone the template and fill the blanks
			var entry = this.buildEntry(
				streams[i].channel.name, streams[i].channel.status,
				streams[i].channel.logo, streams[i].channel.url);

			// add to online array
			this._resContainer.append(entry);
		}
	}

	function onReceivedStreamings(json) {
		buildStreaming.call(this, json);
		this.runPostStreamings.call(this);
	}

	return TwitchersBuilder;
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

		this._twitchRegularsBuilder = new TwitchersBuilder(createRegularsGetter());
		this._twitchFeaturedBuilder = new TwitchersBuilder(createFeaturedGetter());
		this._twitchSearchBuilder = new TwitchersBuilder(createSearchGetter());
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
			case 'search':
				jQuery(".search-bar").show();
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

	// called when the user want to display the pages corresponding to a keyword
	TwitchHandler.prototype.onSearch = function() {
		var keyword = jQuery("#search-keyword").val();
		if (keyword !== "") {
			//this._twitchSearchGetter.fetch(displaySearchResults.bind(this), keyword, this._offset);
			this._lastKeyword = keyword;
		}
	};

	// called when the user press the 'previous' navigation arrow
	TwitchHandler.prototype.onPrevious = function() {
		/*this._offset -= LIST_STEP;
		if (this._offset < 0) {
			this._offset = 0;
		}
		this._listUrlGetter.fetch(this._lastKeyword, this._offset, displaySearchResults.bind(this));*/
	};

	// called when the user press the 'next' navigation arrow
	TwitchHandler.prototype.onNext = function() {
		/*this._offset += LIST_STEP;
		this._listUrlGetter.fetch(this._lastKeyword, this._offset, displaySearchResults.bind(this));*/
	};

	return TwitchHandler;
})();

/*********************************************************
	jQuery bindings
*********************************************************/

function navHoverIn(event) {
	jQuery(event.currentTarget).addClass('hovering-nav');
}

function navHoverOut(event) {
	jQuery(event.currentTarget).removeClass('hovering-nav');
}

// to be done when the page is ready
jQuery(document).ready(function() {
	var pageHandler = new TwitchHandler();

	// handle source change
	jQuery("input[name=source]:radio").change(pageHandler.onSourceChange.bind(pageHandler));

	// handle view change
	jQuery("input[name=view]:radio").change(pageHandler.onViewChange.bind(pageHandler));

	// handle search button press
	jQuery("#search-button").on("click", pageHandler.onSearch.bind(pageHandler));

	// handle search input enter press
	jQuery('#search-keyword').keydown(function(event) {
	  if(event.keyCode == '13') {
	    pageHandler.onSearch.call(pageHandler);
	  }
	});

	// handle navigation arrows
	var previous = jQuery("#previous");
	previous.on("click", pageHandler.onPrevious.bind(pageHandler));
	previous.hover(navHoverIn, navHoverOut);

	var next = jQuery("#next");
	next.on("click", pageHandler.onNext.bind(pageHandler));
	next.hover(navHoverIn, navHoverOut);

	// manually call onSourceChange to get an itial view
	pageHandler.onSourceChange();
});
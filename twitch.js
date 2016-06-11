
var LIST_STEP = 10;

var TEST_TWITCH_REGULAR_JSON = {
  "_total": 12345,
  "streams": [
    {
      "game": "StarCraft II: Heart of the Swarm",
      "viewers": 2123,
      "average_fps": 29.9880749574,
      "delay": 0,
      "video_height": 720,
      "is_playlist": false,
      "created_at": "2015-02-12T04:42:31Z",
      "_id": 4989654544,
      "channel": {
        "mature": false,
        "status": "test status",
        "broadcaster_language": "en",
        "display_name": "test_channel",
        "game": "StarCraft II: Heart of the Swarm",
        "delay": null,
        "language": "en",
        "_id": 12345,
        "name": "test_channel",
        "created_at": "2007-05-22T10:39:54Z",
        "updated_at": "2015-02-12T04:15:49Z",
        "logo": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_image-94a42b3a13c31c02-300x300.jpeg",
        "banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_header_image-08dd874c17f39837-640x125.png",
        "video_banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_offline_image-b314c834d210dc1a-640x360.png",
        "background": null,
        "profile_banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_banner-6936c61353e4aeed-480.png",
        "profile_banner_background_color": "null",
        "partner": true,
        "url": "http://www.twitch.tv/test_channel",
        "views": 49144894,
        "followers": 215780,
        "_links": {
          "self": "https://api.twitch.tv/kraken/channels/test_channel",
          "follows": "https://api.twitch.tv/kraken/channels/test_channel/follows",
          "commercial": "https://api.twitch.tv/kraken/channels/test_channel/commercial",
          "stream_key": "https://api.twitch.tv/kraken/channels/test_channel/stream_key",
          "chat": "https://api.twitch.tv/kraken/chat/test_channel",
          "features": "https://api.twitch.tv/kraken/channels/test_channel/features",
          "subscriptions": "https://api.twitch.tv/kraken/channels/test_channel/subscriptions",
          "editors": "https://api.twitch.tv/kraken/channels/test_channel/editors",
          "teams": "https://api.twitch.tv/kraken/channels/test_channel/teams",
          "videos": "https://api.twitch.tv/kraken/channels/test_channel/videos"
        }
      },
      "preview": {
        "small": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-80x45.jpg",
        "medium": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-320x180.jpg",
        "large": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-640x360.jpg",
        "template": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-{width}x{height}.jpg"
      },
      "_links": {
        "self": "https://api.twitch.tv/kraken/streams/test_channel"
      }
    }
  ],
  "_links": {
    "summary": "https://api.twitch.tv/kraken/streams/summary",
    "followed": "https://api.twitch.tv/kraken/streams/followed",
    "next": "https://api.twitch.tv/kraken/streams?channel=test_channel%2Ctest_channel2&game=StarCraft+II%3A+Heart+of+the+Swarm&limit=100&offset=100",
    "featured": "https://api.twitch.tv/kraken/streams/featured",
    "self": "https://api.twitch.tv/kraken/streams?channel=test_channel%2Ctest_channel2&game=StarCraft+II%3A+Heart+of+the+Swarm&limit=100&offset=0"
  }
};

var TEST_TWITCH_FEATURED_JSON = {
  "_total": 12345,
  "streams": [
    {
      "game": "StarCraft",
      "viewers": 2123,
      "average_fps": 29.9880749574,
      "delay": 0,
      "video_height": 720,
      "is_playlist": false,
      "created_at": "2015-02-12T04:42:31Z",
      "_id": 4989654544,
      "channel": {
        "mature": false,
        "status": "test status",
        "broadcaster_language": "en",
        "display_name": "test_channel_2",
        "game": "StarCraft",
        "delay": null,
        "language": "en",
        "_id": 12345,
        "name": "test_channel",
        "created_at": "2007-05-22T10:39:54Z",
        "updated_at": "2015-02-12T04:15:49Z",
        "logo": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_image-94a42b3a13c31c02-300x300.jpeg",
        "banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_header_image-08dd874c17f39837-640x125.png",
        "video_banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_offline_image-b314c834d210dc1a-640x360.png",
        "background": null,
        "profile_banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_banner-6936c61353e4aeed-480.png",
        "profile_banner_background_color": "null",
        "partner": true,
        "url": "http://www.twitch.tv/test_channel",
        "views": 49144894,
        "followers": 215780,
        "_links": {
          "self": "https://api.twitch.tv/kraken/channels/test_channel",
          "follows": "https://api.twitch.tv/kraken/channels/test_channel/follows",
          "commercial": "https://api.twitch.tv/kraken/channels/test_channel/commercial",
          "stream_key": "https://api.twitch.tv/kraken/channels/test_channel/stream_key",
          "chat": "https://api.twitch.tv/kraken/chat/test_channel",
          "features": "https://api.twitch.tv/kraken/channels/test_channel/features",
          "subscriptions": "https://api.twitch.tv/kraken/channels/test_channel/subscriptions",
          "editors": "https://api.twitch.tv/kraken/channels/test_channel/editors",
          "teams": "https://api.twitch.tv/kraken/channels/test_channel/teams",
          "videos": "https://api.twitch.tv/kraken/channels/test_channel/videos"
        }
      },
      "preview": {
        "small": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-80x45.jpg",
        "medium": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-320x180.jpg",
        "large": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-640x360.jpg",
        "template": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-{width}x{height}.jpg"
      },
      "_links": {
        "self": "https://api.twitch.tv/kraken/streams/test_channel"
      }
    }
  ],
  "_links": {
    "summary": "https://api.twitch.tv/kraken/streams/summary",
    "followed": "https://api.twitch.tv/kraken/streams/followed",
    "next": "https://api.twitch.tv/kraken/streams?channel=test_channel%2Ctest_channel2&game=StarCraft+II%3A+Heart+of+the+Swarm&limit=100&offset=100",
    "featured": "https://api.twitch.tv/kraken/streams/featured",
    "self": "https://api.twitch.tv/kraken/streams?channel=test_channel%2Ctest_channel2&game=StarCraft+II%3A+Heart+of+the+Swarm&limit=100&offset=0"
  }
};

var TEST_TWITCH_SEARCH_JSON = {
  "_total": 12345,
  "streams": [
    {
      "game": "StarCraft II",
      "viewers": 2123,
      "average_fps": 29.9880749574,
      "delay": 0,
      "video_height": 720,
      "is_playlist": false,
      "created_at": "2015-02-12T04:42:31Z",
      "_id": 4989654544,
      "channel": {
        "mature": false,
        "status": "test status",
        "broadcaster_language": "en",
        "display_name": "test_channel_3",
        "game": "StarCraft II",
        "delay": null,
        "language": "en",
        "_id": 12345,
        "name": "test_channel",
        "created_at": "2007-05-22T10:39:54Z",
        "updated_at": "2015-02-12T04:15:49Z",
        "logo": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_image-94a42b3a13c31c02-300x300.jpeg",
        "banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_header_image-08dd874c17f39837-640x125.png",
        "video_banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_offline_image-b314c834d210dc1a-640x360.png",
        "background": null,
        "profile_banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_banner-6936c61353e4aeed-480.png",
        "profile_banner_background_color": "null",
        "partner": true,
        "url": "http://www.twitch.tv/test_channel",
        "views": 49144894,
        "followers": 215780,
        "_links": {
          "self": "https://api.twitch.tv/kraken/channels/test_channel",
          "follows": "https://api.twitch.tv/kraken/channels/test_channel/follows",
          "commercial": "https://api.twitch.tv/kraken/channels/test_channel/commercial",
          "stream_key": "https://api.twitch.tv/kraken/channels/test_channel/stream_key",
          "chat": "https://api.twitch.tv/kraken/chat/test_channel",
          "features": "https://api.twitch.tv/kraken/channels/test_channel/features",
          "subscriptions": "https://api.twitch.tv/kraken/channels/test_channel/subscriptions",
          "editors": "https://api.twitch.tv/kraken/channels/test_channel/editors",
          "teams": "https://api.twitch.tv/kraken/channels/test_channel/teams",
          "videos": "https://api.twitch.tv/kraken/channels/test_channel/videos"
        }
      },
      "preview": {
        "small": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-80x45.jpg",
        "medium": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-320x180.jpg",
        "large": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-640x360.jpg",
        "template": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-{width}x{height}.jpg"
      },
      "_links": {
        "self": "https://api.twitch.tv/kraken/streams/test_channel"
      }
    }
  ],
  "_links": {
    "summary": "https://api.twitch.tv/kraken/streams/summary",
    "followed": "https://api.twitch.tv/kraken/streams/followed",
    "next": "https://api.twitch.tv/kraken/streams?channel=test_channel%2Ctest_channel2&game=StarCraft+II%3A+Heart+of+the+Swarm&limit=100&offset=100",
    "featured": "https://api.twitch.tv/kraken/streams/featured",
    "self": "https://api.twitch.tv/kraken/streams?channel=test_channel%2Ctest_channel2&game=StarCraft+II%3A+Heart+of+the+Swarm&limit=100&offset=0"
  }
};


// Api handler configuration
var createRegularsGetter = function () { return new TestApiGetter(TEST_TWITCH_REGULAR_JSON); };
var createFeaturedGetter = function () { return new TestApiGetter(TEST_TWITCH_FEATURED_JSON); };
var createSearchGetter = function () { return new TestApiGetter(TEST_TWITCH_SEARCH_JSON); };

var ApiGetter = (function () {
	function ApiGetter() {}

	ApiGetter.prototype.fetch = function(handler) {};

	return ApiGetter;
})();

var TestApiGetter = (function () {
	function TestApiGetter(json) {
		ApiGetter.call();
		this._json = json;
	}

	TestApiGetter.prototype = Object.create(ApiGetter.prototype);
	TestApiGetter.prototype.constructor = TestApiGetter;

	TestApiGetter.prototype.fetch = function(handler) {
		return handler(this._json);
	};

	return TestApiGetter;
})();

/*********************************************************
	Twitch handler
*********************************************************/

var TwitchHandler = (function () {
	
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
	
	function displayTwitchers(json) {
		if ( !('streams' in json) || (Array.isArray && !Array.isArray(json.streams) ) ) {
			alert("Received invalid json.");
			return;
		}

		var resJson = json.streams;
		var resContainer = jQuery(".results");
		var resTemplate = jQuery(".result-template > div");

		// flush old results
		resContainer.empty();

		var i = 0;
		for (; i < resJson.length; i++) {
			// skip invalid result
			if (!(resJson.hasOwnProperty(i)) || !('channel' in resJson[i]) || 
				!('banner' in resJson[i].channel) || !('name' in resJson[i].channel) || 
				!('status' in resJson[i].channel) || !('url' in resJson[i].channel)) {
				continue;
			}

			// clone the template and fill the blanks
			var copy = resTemplate.clone();
			copy.find(".title").html(resJson[i].channel.name);
			copy.find(".content").html(resJson[i].channel.status);
			copy.find(".banner").prop("src", resJson[i].channel.banner);
			copy.find(".banner").prop("alt", resJson[i].channel.name);

			// handle mouse behaviour
			copy.on("click", null, resJson[i].channel.url, resultClick.bind(this));
			copy.hover(resultHoverIn.bind(this), resultHoverOut.bind(this));

			// add result to results
			resContainer.append(copy);
		}

		// show stuff
		resContainer.show();
	}
	
	// ctr
	function TwitchHandler() {
		this._offset = 0;
		this._lastJson = {};		
		
		this._twitchRegularsGetter = createRegularsGetter();
		this._twitchFeaturedGetter = createFeaturedGetter();
		this._twitchSearchGetter = createSearchGetter();
	}
	
	// called when the user chooses how to find the twitch streams
	TwitchHandler.prototype.onSourceChange = function() {
		var source = jQuery("input:radio[name=source]:checked").attr('id');
		
		switch(source) {
			case 'regulars':
				this._twitchRegularsGetter.fetch(displayTwitchers.bind(this));
				break;
			case 'featured':
				this._twitchFeaturedGetter.fetch(displayTwitchers.bind(this));
				break;
			case 'search':
				break;
		}
	};
	
	// called when the user chooses what twitch streams to display
	TwitchHandler.prototype.onViewChange = function() {
		var view = jQuery("input:radio[name=view]:checked").attr('id');
	};

	// called when the user want to display the pages corresponding to a keyword
	TwitchHandler.prototype.onSearch = function() {
		/*var keyword = jQuery("#search-keyword").val();
		if (keyword !== "") {
			this._listUrlGetter.fetch(keyword, this._offset, displaySearchResults.bind(this));
			this._lastKeyword = keyword;
		}*/
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

var PAGE_HANDLER = new TwitchHandler();

// to be done when the page is ready
jQuery(document).ready(function() {
	// handle source change
	jQuery("input[name=source]:radio").change(PAGE_HANDLER.onSourceChange.bind(PAGE_HANDLER));
	
	// handle view change
	jQuery("input[name=source]:radio").change(PAGE_HANDLER.onViewChange.bind(PAGE_HANDLER));
	
	// handle search button press
	jQuery("#search-button").on("click", PAGE_HANDLER.onSearch.bind(PAGE_HANDLER));
	
	// handle search input enter press
	jQuery('#search-keyword').keydown(function(event) {
	  if(event.keyCode == '13') {
	    PAGE_HANDLER.onSearch.call(PAGE_HANDLER);
	  }
	});

	// handle navigation arrows
	var previous = jQuery("#previous");
	previous.on("click", PAGE_HANDLER.onPrevious.bind(PAGE_HANDLER));
	previous.hover(navHoverIn, navHoverOut);

	var next = jQuery("#next");
	next.on("click", PAGE_HANDLER.onNext.bind(PAGE_HANDLER));
	next.hover(navHoverIn, navHoverOut);
	
	// manually call onSourceChange to get an itial view
	PAGE_HANDLER.onSourceChange();
});
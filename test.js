var TEST_TWITCH_CHANNEL_JSON = {
	"mature":false,
	"status":"@Dogwaddle working on Advanced Algorithm Challenges! #Programming\n\n\n\n\n\n",
	"broadcaster_language":"en",
	"display_name":"FreeCodeCamp",
	"game":"Creative",
	"language":"en",
	"_id":79776140,
	"name":"freecodecamp",
	"created_at":"2015-01-14T03:36:47Z",
	"updated_at":"2016-06-11T22:05:09Z",
	"delay":null,
	"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
	"banner":null,
	"video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
	"background":null,
	"profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
	"profile_banner_background_color":null,
	"partner":false,
	"url":"https://www.twitch.tv/freecodecamp",
	"views":151568,
	"followers":9742,
	"_links":{
		"self":"https://api.twitch.tv/kraken/channels/freecodecamp",
		"follows":"https://api.twitch.tv/kraken/channels/freecodecamp/follows",
		"commercial":"https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
		"stream_key":"https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
		"chat":"https://api.twitch.tv/kraken/chat/freecodecamp",
		"features":"https://api.twitch.tv/kraken/channels/freecodecamp/features",
		"subscriptions":"https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
		"editors":"https://api.twitch.tv/kraken/channels/freecodecamp/editors",
		"teams":"https://api.twitch.tv/kraken/channels/freecodecamp/teams",
		"videos":"https://api.twitch.tv/kraken/channels/freecodecamp/videos"
	}
};

var TEST_TWITCH_CHANNEL_ERROR_JSON = {
	"error":"Unprocessable Entity",
	"status":422,
	"message":"Channel 'brunofin' is not available on Twitch"
};

var TEST_TWITCH_LIST_JSON = {
	"streams": [
	{
		"_id":21803398896,
		"game":"StarCraft II",
		"viewers":947,
		"created_at":"2016-06-11T21:49:09Z",
		"video_height":720,
		"average_fps":50,
		"delay":0,
		"is_playlist":false,
		"_links": {
			"self":"https://api.twitch.tv/kraken/streams/esl_sc2"
		},
		"preview": {
			"small":"https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-80x45.jpg",
			"medium":"https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-320x180.jpg",
			"large":"https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-640x360.jpg",
			"template":"https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-{width}x{height}.jpg"
		},
		"channel": {
			"mature":false,
			"status":"RERUN: Scarlett vs. aLive - Group D - WCS Season 2 Finals",
			"broadcaster_language":"en",
			"display_name":"ESL_SC2",
			"game":"StarCraft II",
			"language":"en",
			"_id":30220059,
			"name":"esl_sc2",
			"created_at":"2012-05-02T09:59:20Z",
			"updated_at":"2016-06-11T23:04:05Z",
			"delay":null,
			"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
			"banner":null,
			"video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
			"background":null,
			"profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
			"profile_banner_background_color":"#050506",
			"partner":true,
			"url":"https://www.twitch.tv/esl_sc2",
			"views":58449572,
			"followers":132031,
			"_links":{
				"self":"http://api.twitch.tv/kraken/channels/esl_sc2",
				"follows":"http://api.twitch.tv/kraken/channels/esl_sc2/follows",
				"commercial":"http://api.twitch.tv/kraken/channels/esl_sc2/commercial",
				"stream_key":"http://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
				"chat":"http://api.twitch.tv/kraken/chat/esl_sc2",
				"features":"http://api.twitch.tv/kraken/channels/esl_sc2/features",
				"subscriptions":"http://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
				"editors":"http://api.twitch.tv/kraken/channels/esl_sc2/editors",
				"teams":"http://api.twitch.tv/kraken/channels/esl_sc2/teams",
				"videos":"http://api.twitch.tv/kraken/channels/esl_sc2/videos"
			}
		}
	}],
	"_total":1,
	"_links":{
		"self":"https://api.twitch.tv/kraken/streams?channel=ESL_SC2%2Cfreecodecamp%2Cbrunofin\u0026limit=25\u0026offset=0",
		"next":"https://api.twitch.tv/kraken/streams?channel=ESL_SC2%2Cfreecodecamp%2Cbrunofin\u0026limit=25\u0026offset=25",
		"featured":"https://api.twitch.tv/kraken/streams/featured",
		"summary":"https://api.twitch.tv/kraken/streams/summary",
		"followed":"https://api.twitch.tv/kraken/streams/followed"
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
    },
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
        "status": "test status Lorem ipsum dolor sit amet, consecteteur adipiscing elit vulputate mi, ac ve. Et consectetuer aliquet fames diam posuere et. Tristique facilisi orci varius in facilisi mollis. Potenti dui adipiscing. Nisi. Aenean. Dapibus mi magnis rhoncus conubia tristique facilisi suscipit neque velit facilisi mus, integer eni. Ad ut magna tellus sollicitudin posuere. Nunc gravida tincidunt diam fames blandit arcu sapien. Adipiscing nisi risus blandit fusce non diam hymenaeos mauris diam cum.",
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
    },
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
    },
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


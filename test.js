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
	"_links": {
		"self": "https://api.twitch.tv/kraken/streams/featured?limit=2&offset=0",
		"next": "https://api.twitch.tv/kraken/streams/featured?limit=2&offset=2"
	},
	"featured": [{
		"text": "<p>Summer Games Done Quick 2016 ist ein Speedrunning-Marathon zu Gunsten der Doctors Without Borders. Schaut vom dritten bis zum zehnten Januar über 130 Stunden an Speedruns und unterstützt dabei einen wohltätigen Zweck.</p>\n\n<br>\n\n\n<p><a href=\"/germenchrestream\">Klick hier</a> um zuzuschauen und zu chatten.</p>\n",
		"title": "Summer Games Done Quick 2016 (German)",
		"sponsored": false,
		"priority": 2,
		"scheduled": true,
		"image": "https://s.jtvnw.net/jtv_user_pictures/hosted_images/gdq-twitch-german_72015.png",
		"stream": {
			"_id": 22212231792,
			"game": "Tetris: The Grand Master",
			"viewers": 1115,
			"video_height": 720,
			"average_fps": 60.5597964377,
			"delay": 0,
			"created_at": "2016-07-07T00:00:45Z",
			"is_playlist": false,
			"preview": {
				"small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_germenchrestream-80x45.jpg",
				"medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_germenchrestream-320x180.jpg",
				"large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_germenchrestream-640x360.jpg",
				"template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_germenchrestream-{width}x{height}.jpg"
			},
			"_links": {
				"self": "https://api.twitch.tv/kraken/streams/germenchrestream"
			},
			"channel": {
				"mature": false,
				"status": "[GER] SGDQ 2016 German Restream: Tetris: The Grand Master Series Exhibition",
				"broadcaster_language": "de",
				"display_name": "GermenchRestream",
				"game": "Tetris: The Grand Master",
				"language": "de",
				"_id": 68240113,
				"name": "germenchrestream",
				"created_at": "2014-08-05T17:01:55Z",
				"updated_at": "2016-07-07T19:12:04Z",
				"delay": null,
				"logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/germenchrestream-profile_image-0e606dbe21947315-300x300.png",
				"banner": null,
				"video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/germenchrestream-channel_offline_image-6caa023d41b731ef-1920x1080.png",
				"background": null,
				"profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/germenchrestream-profile_banner-97b08d58f981929d-480.png",
				"profile_banner_background_color": null,
				"partner": false,
				"url": "https://www.twitch.tv/germenchrestream",
				"views": 3286358,
				"followers": 11992,
				"_links": {
					"self": "https://api.twitch.tv/kraken/channels/germenchrestream",
					"follows": "https://api.twitch.tv/kraken/channels/germenchrestream/follows",
					"commercial": "https://api.twitch.tv/kraken/channels/germenchrestream/commercial",
					"stream_key": "https://api.twitch.tv/kraken/channels/germenchrestream/stream_key",
					"chat": "https://api.twitch.tv/kraken/chat/germenchrestream",
					"features": "https://api.twitch.tv/kraken/channels/germenchrestream/features",
					"subscriptions": "https://api.twitch.tv/kraken/channels/germenchrestream/subscriptions",
					"editors": "https://api.twitch.tv/kraken/channels/germenchrestream/editors",
					"teams": "https://api.twitch.tv/kraken/channels/germenchrestream/teams",
					"videos": "https://api.twitch.tv/kraken/channels/germenchrestream/videos"
				}
			}
		}
	}, {
		"text": "<p>Die ESL One Cologne kehrt zurück in die LANXESS Arena! Das ist das Counter-Strike: Global Offensive-Event überhaupt, das ihr nicht verpassen dürft. Erlebe erstklassige CS:GO-Action vor einer unglaublichen Crowd über sechs Tage.</p>\n",
		"title": "ESL One Cologne",
		"sponsored": false,
		"priority": 2,
		"scheduled": true,
		"image": "https://s.jtvnw.net/jtv_user_pictures/hosted_images/esl_99damage_fp_ESLOne_German.jpg",
		"stream": {
			"_id": 22217807680,
			"game": "Counter-Strike: Global Offensive",
			"viewers": 5905,
			"video_height": 720,
			"average_fps": 60.8571428571,
			"delay": 0,
			"created_at": "2016-07-07T08:50:07Z",
			"is_playlist": false,
			"preview": {
				"small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_99damage-80x45.jpg",
				"medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_99damage-320x180.jpg",
				"large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_99damage-640x360.jpg",
				"template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_99damage-{width}x{height}.jpg"
			},
			"_links": {
				"self": "https://api.twitch.tv/kraken/streams/esl_99damage"
			},
			"channel": {
				"mature": false,
				"status": "ESL One Cologne 2016 - German Stream by 99damage.de",
				"broadcaster_language": "de",
				"display_name": "esl_99damage",
				"game": "Counter-Strike: Global Offensive",
				"language": "de",
				"_id": 82310452,
				"name": "esl_99damage",
				"created_at": "2015-02-10T14:10:01Z",
				"updated_at": "2016-07-07T19:04:09Z",
				"delay": null,
				"logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_99damage-profile_image-d718503148f24963-300x300.png",
				"banner": null,
				"video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_99damage-channel_offline_image-93a8d4b63cb53a55-1920x1080.png",
				"background": null,
				"profile_banner": null,
				"profile_banner_background_color": null,
				"partner": true,
				"url": "https://www.twitch.tv/esl_99damage",
				"views": 6505479,
				"followers": 57622,
				"_links": {
					"self": "https://api.twitch.tv/kraken/channels/esl_99damage",
					"follows": "https://api.twitch.tv/kraken/channels/esl_99damage/follows",
					"commercial": "https://api.twitch.tv/kraken/channels/esl_99damage/commercial",
					"stream_key": "https://api.twitch.tv/kraken/channels/esl_99damage/stream_key",
					"chat": "https://api.twitch.tv/kraken/chat/esl_99damage",
					"features": "https://api.twitch.tv/kraken/channels/esl_99damage/features",
					"subscriptions": "https://api.twitch.tv/kraken/channels/esl_99damage/subscriptions",
					"editors": "https://api.twitch.tv/kraken/channels/esl_99damage/editors",
					"teams": "https://api.twitch.tv/kraken/channels/esl_99damage/teams",
					"videos": "https://api.twitch.tv/kraken/channels/esl_99damage/videos"
				}
			}
		}
	}]
};

var TestApiGetter = (function () {
	// results = array of: s for success or f for fail
	function TestApiGetter(json, results) {
		ApiGetter.call();
		this._json = json;
		this._results = results;
	}

	TestApiGetter.prototype = Object.create(ApiGetter.prototype);
	TestApiGetter.prototype.constructor = TestApiGetter;

	// handlers : {onDone: fct, onFail: fct, always: fct}
	TestApiGetter.prototype.fetch = function(handlers) {
		var result = 's';
		if (this._results && this._results.length > 0) {
			result = this._results.shift();
		}

		if (result === 's' && handlers.onDone) { handlers.onDone(this._json);}
		if (result === 'f' && handlers.onFail) { handlers.onFail(this._json);}
		if (handlers.always) { handlers.always(this._json);}
	};

	return TestApiGetter;
})();


import { Component } from '@angular/core';
// import { Events } from '@ionic/angular';

declare var PushNotification: { init: (arg0: { android: { sound: boolean; }; ios: { alert: string; badge: string; sound: string; }; windows: {}; }) => any; };
declare var Countly: {
  isInitialized: () => Promise<any>; setLoggingEnabled: (arg0: boolean) => void; enableCrashReporting: () => void; setRequiresConsent: (arg0: boolean) => void; giveConsentInit: (arg0: string[]) => void; setLocationInit: (arg0: string, arg1: string, arg2: string, arg3: string, arg4: string) => void; enableParameterTamperingProtection: (arg0: string) => void; setHttpPostForced: (arg0: boolean) => void; enableApm: () => void; enableAttribution: () => void; setRemoteConfigAutomaticDownload: (arg0: { (r: any): void; (r: any): void; }, arg1: { (r: any): void; (r: any): void; }) => void; pushTokenType: (arg0: any) => void; messagingMode: { TEST: any; DEVELOPMENT: any; }; init: (arg0: string, arg1: string) => Promise<any>; onNotification: (arg0: (theNotification: any) => void) => void; askForNotificationPermission: () => void; setOptionalParametersForInitialization: (arg0: { city: string; country: string; latitude: string; longitude: string; ipAddress: string; }) => void; setLocation: (arg0: string, arg1: string, arg2: string, arg3: string) => void; start: () => void; stop: () => void; halt: () => void; recordEvent: (arg0: { key: string; count: number; sum?: string; segments?: {} | {} | {}; duration?: string; }) => void; setUserData: (arg0: { name: string; username: string; email: string; org: string; phone: string; picture: string; picturePath: string; gender: string; byear: number; organization?: string; }) => void; changeDeviceId: (arg0: string, arg1: boolean) => void; sendPushToken: (arg0: { token: any; messagingMode: any; }) => void; recordView: (arg0: any) => void; startEvent: (arg0: string) => void; endEvent: (arg0: { key: string; sum?: string; segments?: {} | {}; count?: number; }) => void; cancelEvent: (arg0: string) => void; askForFeedback: (arg0: string, arg1: string) => void; askForStarRating: (arg0: (ratingResult: any) => void) => void; addCrashLog: (arg0: string) => void; logException: (arg0: unknown, arg1: boolean, arg2: { _facebook_version: string; }) => void; userData: { setProperty: (arg0: string, arg1: string | number) => void; increment: (arg0: string) => void; incrementBy: (arg0: string, arg1: number) => void; multiply: (arg0: string, arg1: number) => void; saveMax: (arg0: string, arg1: number) => void; saveMin: (arg0: string, arg1: number) => void; setOnce: (arg0: string, arg1: number) => void; pushUniqueValue: (arg0: string, arg1: string) => void; pushValue: (arg0: string, arg1: string) => void; pullValue: (arg0: string, arg1: string) => void; }; giveConsent: (arg0: string[]) => void; removeConsent: (arg0: string[]) => void; giveAllConsent: () => void; removeAllConsent: () => void; remoteConfigUpdate: (arg0: (r: any) => void, arg1: (r: any) => void) => void; updateRemoteConfigForKeysOnly: (arg0: string[], arg1: (r: any) => void, arg2: (r: any) => void) => void; updateRemoteConfigExceptKeys: (arg0: string[], arg1: (r: any) => void, arg2: (r: any) => void) => void; remoteConfigClearValues: (arg0: (r: any) => void, arg1: (r: any /**
 * Push notifications settings
 * Should be call after init
*/) => void /**
 * Push notifications settings
 * Should be call after init
*/) => void; getRemoteConfigValueForKey: (arg0: string, arg1: { (r: any): void; (r: any): void; (r: any): void; (r: any): void; (r: any): void; (r: any): void; (r: any): void; (r: any): void; }, arg2: { (r: any): void; (r: any): void; (r: any): void; (r: any): void; (r: any): void; (r: any): void; (r: any): void; (r: any): void; }) => void; startTrace: (arg0: string) => void; endTrace: (arg0: string, arg1: { ABC: number; C44C: number; }) => void; recordNetworkTrace: (arg0: string, arg1: any, arg2: any, arg3: any, arg4: number, arg5: number) => void; setCustomCrashSegment: (arg0: { Key: string; }) => void;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // constructor(public events: Events) {
  //   events.subscribe('countly:notification', (notification: any, time: Date) => {
  //     console.log(notification);
  //   });
  // }
  // ionViewDidEnter(){
  //   Countly.onNotification(function(notification: any){
  //     this.events.publish('countly:notification', notification, Date.now());
  //   });
  // }
  
  constructor() {

  }
  makeid = function () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  init = function () {
    Countly.isInitialized().then((result: string) => {
      if (result != "true") {
        /** Recommended settings for Countly initialisation */
        Countly.setLoggingEnabled(true); // Enable countly internal debugging logs
        Countly.enableCrashReporting(); // Enable crash reporting to report unhandled crashes to Countly
        Countly.setRequiresConsent(true); // Set that consent should be required for features to work.
        Countly.giveConsentInit(["location", "sessions", "attribution", "push", "events", "views", "crashes", "users", "push", "star-rating", "apm"]); // give conset for specific features before init.
        Countly.setLocationInit("41.0082" , "28.9784", "TR", "Istanbul", "10.2.33.12"); // Set user initial location.


        /** Optional settings for Countly initialisation */
        Countly.enableParameterTamperingProtection("salt"); // Set the optional salt to be used for calculating the checksum of requested data which will be sent with each request
        // Countly.pinnedCertificates("count.ly.cer"); // It will ensure that connection is made with one of the public keys specified
        Countly.setHttpPostForced(false); // Set to "true" if you want HTTP POST to be used for all requests
        Countly.enableApm(); // Enable APM features, which includes the recording of app start time.
        Countly.enableAttribution(); // Enable to measure your marketing campaign performance by attributing installs from specific campaigns.
        Countly.setRemoteConfigAutomaticDownload(function (r: string) {
          console.log("[CountlyCordova] setRemoteConfigAutomaticDownload onSuccess : " + r);
        }, function (r: string) {
          console.log("[CountlyCordova] setRemoteConfigAutomaticDownload onError : " + r);
        }); // Set Automatic value download happens when the SDK is initiated or when the device ID is changed.
        Countly.pushTokenType(Countly.messagingMode.TEST); // Set messaging mode for push notifications

        Countly.init("https://master.count.ly", "58594c9a3f461ebc000761a68c2146659ef75ea0").then((result: any) => {
          /** 
           * Push notifications settings 
           * Should be call after init
          */
          Countly.onNotification(function (theNotification: any) {
            console.log("[CountlyCordova] onNotification : " + JSON.stringify(theNotification));
          }); // Set callback to receive push notifications
          Countly.askForNotificationPermission(); // This method will ask for permission, enables push notification and send push token to countly server.

          // Countly.giveAllConsent(); // give consent for all features, should be call after init
          // Countly.giveConsent(["events", "views"]); // give conset for some specific features, should be call after init.
        }, (err: any) => {
          console.error(err);
        });
      }
    }, (err: any) => {
      console.error(err);
    });
  };

  test = function (this: HomePage) {
    this.sendSampleEvent();
  }

  setOptionalParametersForInitialization = function () {
    Countly.setOptionalParametersForInitialization({
      city: "Tampa",
      country: "US",
      latitude: "28.006324",
      longitude: "-82.7166183",
      "ipAddress": "255.255.255.255"
    });
  };

  setLocation = function () {
    Countly.setLocation("TR", "Istanbul", "41.0082,28.9784", "10.2.33.12");
  };

  event =  () => {
    setInterval( () => {
      this.sendSampleEvent();
    }, 1000);
  }
  start = function () {
    Countly.start();
  }
  stop = function () {
    Countly.stop();
  }

  halt = function () {
    Countly.halt();
  }

  sendSampleEvent = function (this: HomePage) {
    this.basicEvent();
    this.eventWithSum();
    this.eventWithSegment();
    this.eventWithSumSegment();
  }

  basicEvent = function () {
    // example for basic event
    var event = {
      "key": "Basic Event",
      "count": 1
    };
    Countly.recordEvent(event);
  }
  eventWithSum = function () {
    // example for event with sum
    var event = {
      "key": "Event With Sum",
      "count": 1,
      "sum": "0.99",
    };
    Countly.recordEvent(event);
  }
  eventWithSegment = function () {
    // example for event with segment
    var event = {
      "key": "Event With Segment",
      "count": 1,
      "segments": {}
    };
    event.segments = {
      "Country": "Turkey",
      "Age": "28"
    };
    Countly.recordEvent(event);
  }
  eventWithSumSegment = function () {
    // example for event with segment and sum
    var event = {
      "key": "Event With Sum And Segment",
      "count": 1,
      "sum": "0.99",
      "segments": {}
    };
    event.segments = {
      "Country": "Turkey",
      "Age": "28"
    };
    Countly.recordEvent(event);
  }
  eventWithSumSegment_duration = function () {
    // example for event with segment and sum
    var event = {
      "key": "Event With Sum And Segment duration",
      "count": 1,
      "sum": "0.99",
      "duration": "1000",
      "segments": {}
    };
    event.segments = {
      "Country": "Turkey",
      "Age": "28"
    };
    Countly.recordEvent(event);
  }
  setUserData() {
    // example for setUserData
    var options = {
      "name": "",
      "username": "",
      "email": "",
      "org": "",
      "phone": "",
      "picture": "",
      "picturePath": "",
      "gender": "",
      "byear": 0
    };
    options.name = "Name of User";
    options.username = "Username";
    options.email = "User Email";
    options.org = "User Organization";
    options.phone = "User Contact number";
    options.picture = "https://count.ly/images/logos/countly-logo.png";
    options.picturePath = "";
    options.gender = "User Gender";
    options.byear = 1989;
    Countly.setUserData(options);
  }
  setCaptianAmericaData = function (this: HomePage) {
    // example for setCaptianAmericaData
    var deviceId = this.makeid();
    Countly.changeDeviceId(deviceId, false);

    var options = {
      "name": "",
      "username": "",
      "email": "",
      "organization": "",
      "org": "",
      "phone": "",
      "picture": "",
      "picturePath": "",
      "gender": "",
      "byear": 0
    };
    options.name = "Captian America";
    options.username = "captianamerica";
    options.email = "captianamerica@avengers.com";
    options.organization = "Avengers";
    options.phone = "+91 555 555 5555";
    options.picture = "http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Captain-America-icon.png";
    options.picturePath = "";
    options.gender = "M"; // "F"
    options.byear = 1989;
    Countly.setUserData(options);

  };

  setIronManData = function (this: HomePage) {
    // example for setIronManData
    var deviceId = this.makeid();
    Countly.changeDeviceId(deviceId, false);

    var options = {
      "name": "",
      "username": "",
      "email": "",
      "organization": "",
      "org": "",
      "phone": "",
      "picture": "",
      "picturePath": "",
      "gender": "",
      "byear": 0
    };
    options.name = "Iron Man";
    options.username = "ironman";
    options.email = "ironman@avengers.com";
    options.organization = "Avengers";
    options.phone = "+91 555 555 5555";
    options.picture = "http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Iron-Man-icon.png";
    options.picturePath = "";
    options.gender = "M"; // "F"
    options.byear = 1989;
    Countly.setUserData(options);
    Countly.start();
  };

  setSpiderManData = function (this: HomePage) {
    var deviceId = this.makeid();
    Countly.changeDeviceId(deviceId, false);

    var options = {
      "name": "",
      "username": "",
      "email": "",
      "organization": "",
      "org": "",
      "phone": "",
      "picture": "",
      "picturePath": "",
      "gender": "",
      "byear": 0
    };
    options.name = "Spider-Man";
    options.username = "spiderman";
    options.email = "spiderman@avengers.com";
    options.organization = "Avengers";
    options.phone = "+91 555 555 5555";
    options.picture = "http://icons.iconarchive.com/icons/mattahan/ultrabuuf/512/Comics-Spiderman-Morales-icon.png";
    options.picturePath = "";
    options.gender = "M"; // "F"
    options.byear = 1989;
    Countly.setUserData(options);
    Countly.start();
  };
  setloggingenabled = function () {
    // example for setLoggingEnabled
    Countly.setLoggingEnabled(true);
  }
  setloggingdisabled = function () {
    // example for setLoggingEnabled
    Countly.setLoggingEnabled(false);
  }

  sendPushToken = function () {

    var push = PushNotification.init({
      android: { sound: true },
      ios: {
        alert: "true",
        badge: "true",
        sound: "true"
      },
      windows: {}
    });

    push.on('registration', function (data: { registrationId: string; }) {
      console.log('[CountlyCordova] Token received: ' + data.registrationId);
      Countly.sendPushToken({
        "token": data.registrationId,
        "messagingMode": Countly.messagingMode.DEVELOPMENT
      });
    });

    push.on('notification', function (data: any) {
      console.log("[CountlyCordova] notification : " + JSON.stringify(data));
    });

    push.on('error', function (e: any) {
      // e.message
    });
    // Countly.messagingMode.DEVELOPMENT
    // Countly.messagingMode.PRODUCTION
    // Countly.messagingMode.ADHOC
  }

  setHttpPostForced = function () {
    Countly.setHttpPostForced(true);
  }

  askForNotificationPermission = function () {
    Countly.askForNotificationPermission();
  }

  recordView = function (viewName: any) {
    Countly.recordView(viewName);
  }

  /** 2017 **/
  changeDeviceId = function () {
    Countly.changeDeviceId("123456", true);
  }
  enableParameterTamperingProtection = function () {
    Countly.enableParameterTamperingProtection("salt");
  }

  endEventBasic = function () {
    Countly.startEvent("Timed Event");
    setTimeout(function () {
      Countly.endEvent({ "key": "Timed Event" });
    }, 1000);
  }
  endEventWithSum = function () {
    Countly.startEvent("Timed Event With Sum");
    setTimeout(function () {
      Countly.endEvent({ "key": "Timed Event With Sum", "sum": "0.99" });
    }, 1000);
  }
  endEventWithSegment = function () {
    Countly.startEvent("Timed Event With Segment");
    setTimeout(function () {

      var events = {
        "key": "Timed Event With Segment",
        "segments": {}
      };
      events.segments = {
        "Country": "Turkey",
        "Age": "28"
      };
      Countly.endEvent(events);
    }, 1000);
  }
  endEventWithSumSegment = function () {
    Countly.startEvent("Timed Event With Segment, Sum and Count");
    setTimeout(function () {
      var events = {
        "key": "Timed Event With Segment, Sum and Count",
        "count": 1,
        "sum": "0.99",
        "segments": {}
      };
      events.segments = {
        "Country": "Turkey",
        "Age": "28"
      };
      Countly.endEvent(events);
    }, 1000);
  }
  startEventX = function () {
    Countly.startEvent("Event X");
  }
  cancelEventX = function () {
    Countly.cancelEvent("Event X");
  }
  // sendRating = function(){
  //     // Ratings can be from 1 - 5;
  //     Countly.sendRating(5);
  // }
  askForFeedback = function () {
    Countly.askForFeedback("5e4254507975d006a22535fc", "Close");
  }
  askForStarRating = function () {
    Countly.askForStarRating(function (ratingResult: string) {
      console.log("[CountlyCordova] askForStarRating : " + ratingResult);
    });
  }

  addCrashLog =  () => {
    Countly.enableCrashReporting();
    Countly.addCrashLog("User Performed Step A");
    setTimeout(function () {
      Countly.addCrashLog("User Performed Step B");
    }, 1000);
    setTimeout( () => {
      Countly.addCrashLog("User Performed Step C");
      // console.log("Opps found and error");
      this.a();
    }, 1000);
  }

  a() {
    this.b();
  }

  b() {
    this.c();
  }

  c() {
    this.d();
    throw new Error("My Custom Error");
  }

  d() {
    try {
      throw new Error("My Second Error");
    } catch (err) {
      Countly.logException(err, true, { "_facebook_version": "0.0.1" });
    }
  }

  // user details
  setProperty = function () {
    Countly.userData.setProperty("setProperty", "My Property");
  }

  increment = function () {
    Countly.userData.setProperty("increment", 4);
    Countly.userData.increment("increment");
  }
  incrementBy = function () {
    Countly.userData.setProperty("incrementBy", 5);
    Countly.userData.incrementBy("incrementBy", 10);
  }
  multiply = function () {
    Countly.userData.setProperty("multiply", 5);
    Countly.userData.multiply("multiply", 20);
  }
  saveMax = function () {
    Countly.userData.saveMax("saveMax", 100);
  }
  saveMin = function () {
    Countly.userData.saveMin("saveMin", 50);
  }
  setOnce = function () {
    Countly.userData.setOnce("setOnce", 200);
  }
  pushUniqueValue = function () {
    Countly.userData.pushUniqueValue("pushUniqueValue", "morning");
  }
  pushValue = function () {
    Countly.userData.pushValue("pushValue", "morning");
  }
  pullValue = function () {
    Countly.userData.pullValue("pullValue", "morning");
  }

  setRequiresConsent = function () {
    Countly.setRequiresConsent(true);
  }

  giveMultipleConsent = function () {
    Countly.giveConsent(["events", "views", "star-rating", "crashes"]);
  }
  removeMultipleConsent = function () {
    Countly.removeConsent(["events", "views", "star-rating", "crashes"]);
  }
  giveAllConsent = function () {
    Countly.giveAllConsent();
  }
  removeAllConsent = function () {
    Countly.removeAllConsent();
  }

  giveConsentSessions = function () {
    Countly.giveConsent(["sessions"]);
  }
  giveConsentEvents = function () {
    Countly.giveConsent(["events"]);
  }
  giveConsentViews = function () {
    Countly.giveConsent(["views"]);
  }
  giveConsentLocation = function () {
    Countly.giveConsent(["location"]);
  }
  giveConsentCrashes = function () {
    Countly.giveConsent(["crashes"]);
  }
  giveConsentAttribution = function () {
    Countly.giveConsent(["attribution"]);
  }
  giveConsentUsers = function () {
    Countly.giveConsent(["users"]);
  }
  giveConsentPush = function () {
    Countly.giveConsent(["push"]);
  }
  giveConsentStarRating = function () {
    Countly.giveConsent(["star-rating"]);
  }
  giveConsentAppleWatch = function () {
    Countly.giveConsent(["AppleWatch"]);
  }
  giveConsentAPM = function () {
    Countly.giveConsent(["apm"]);
  }

  removeConsentSessions = function () {
    Countly.removeConsent(["sessions"]);
  }
  removeConsentEvents = function () {
    Countly.removeConsent(["events"]);
  }
  removeConsentViews = function () {
    Countly.removeConsent(["views"]);
  }
  removeConsentLocation = function () {
    Countly.removeConsent(["location"]);
  }
  removeConsentCrashes = function () {
    Countly.removeConsent(["crashes"]);
  }
  removeConsentAttribution = function () {
    Countly.removeConsent(["attribution"]);
  }
  removeConsentUsers = function () {
    Countly.removeConsent(["users"]);
  }
  removeConsentPush = function () {
    Countly.removeConsent(["push"]);
  }
  removeConsentStarRating = function () {
    Countly.removeConsent(["star-rating"]);
  }
  removeConsentAppleWatch = function () {
    Countly.giveConsent(["AppleWatch"]);
  }
  removeConsentAPM = function () {
    Countly.removeConsent(["apm"]);
  }

  // Remote config usage
  setRemoteConfigAutomaticDownload = function () {
    Countly.setRemoteConfigAutomaticDownload(function (r: string) {
      console.log("[CountlyCordova] setRemoteConfigAutomaticDownload onSuccess : " + r);
    }, function (r: string) {
      console.log("[CountlyCordova] setRemoteConfigAutomaticDownload onError : " + r);
    });
  }
  remoteConfigUpdate = function () {
    Countly.remoteConfigUpdate(function (r: string) {
      console.log("[CountlyCordova] remoteConfigUpdate onSuccess : " + r);
    }, function (r: string) {
      console.log("[CountlyCordova] remoteConfigUpdate onError : " + r);
    });
  }
  updateRemoteConfigForKeysOnly = function () {
    Countly.updateRemoteConfigForKeysOnly(["name"], function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForKeysOnly onSuccess : " + r)
    }, function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForKeysOnly onError : " + r);
    });
  }
  updateRemoteConfigExceptKeys = function () {
    Countly.updateRemoteConfigExceptKeys(["url"], function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigExceptKeys onSuccess : " + r)
    }, function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigExceptKeys onError : " + r);
    });
  }
  remoteConfigClearValues = function () {
    Countly.remoteConfigClearValues(function (r: string) {
      console.log("[CountlyCordova] remoteConfigClearValues onSuccess : " + r)
    }, function (r: string) {
      console.log("[CountlyCordova] remoteConfigClearValues onError : " + r);
    });
  }
  getRemoteConfigValueForKey = function () {
    Countly.getRemoteConfigValueForKey("name", function (r: string) {
      console.log("[CountlyCordova] getRemoteConfigValueForKey onSuccess : " + r)
    }, function (r: string) {
      console.log("[CountlyCordova] getRemoteConfigValueForKey onError : " + r);
    });
  }

  updateRemoteConfigForbooleanValueOnly = function () {
    Countly.getRemoteConfigValueForKey("booleanValue", function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForbooleanValueOnly onSuccess : " + r)
    }, function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForbooleanValueOnly onError : " + r);
    });
  }
  updateRemoteConfigForfloatValueOnly = function () {
    Countly.getRemoteConfigValueForKey("floatValue", function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForfloatValueOnly onSuccess : " + r)
    }, function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForfloatValueOnly onError : " + r);
    });
  }
  updateRemoteConfigForintegerValueOnly = function () {
    Countly.getRemoteConfigValueForKey("integerValue", function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForintegerValueOnly onSuccess : " + r);
    }, function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForintegerValueOnly onError : " + r);
    });
  }
  updateRemoteConfigForstringValueOnly = function () {
    Countly.getRemoteConfigValueForKey("stringValue", function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForstringValueOnly onSuccess : " + r);
    }, function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForstringValueOnly onError : " + r);
    });
  }
  updateRemoteConfigForjsonValueOnly = function () {
    Countly.getRemoteConfigValueForKey("jsonValue", function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForjsonValueOnly onSuccess : " + r);
    }, function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForjsonValueOnly onError : " + r);
    });
  }
  updateRemoteConfigForjsonStringValueOnly = function () {
    Countly.getRemoteConfigValueForKey("arrayStringValue", function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForjsonStringValueOnly onSuccess : " + r);
    }, function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForjsonStringValueOnly onError : " + r);
    });
  }
  updateRemoteConfigForjsonNumberValueOnly = function () {
    Countly.getRemoteConfigValueForKey("arrayNumberValue", function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForjsonNumberValueOnly onSuccess : " + r);
    }, function (r: string) {
      console.log("[CountlyCordova] updateRemoteConfigForjsonNumberValueOnly onError : " + r);
    });
  }

  successCodes = [100, 101, 200, 201, 202, 205, 300, 301, 303, 305];
  failureCodes = [400, 402, 405, 408, 500, 501, 502, 505];

  startTrace = function () {
    var traceKey = "Trace Key";
    Countly.startTrace(traceKey);
  }
  endTrace = function () {
    var traceKey = "Trace Key";
    var customMetric = {
      "ABC": 1233,
      "C44C": 1337
    };
    Countly.endTrace(traceKey, customMetric);
  }
  random(number: number) {
    return Math.floor(Math.random() * number);
  }
  recordNetworkTraceSuccess = function (this: HomePage) {
    var networkTraceKey = "api/endpoint.1";
    var responseCode = this.successCodes[this.random(this.successCodes.length)];
    var requestPayloadSize = this.random(700) + 200;
    var responsePayloadSize = this.random(700) + 200;
    var startTime = new Date().getTime();
    var endTime = startTime + 500;
    Countly.recordNetworkTrace(networkTraceKey, responseCode, requestPayloadSize, responsePayloadSize, startTime, endTime);
  }
  recordNetworkTraceFailure = function (this: HomePage) {
    var networkTraceKey = "api/endpoint.1";
    var responseCode = this.failureCodes[this.random(this.failureCodes.length)];
    var requestPayloadSize = this.random(700) + 250;
    var responsePayloadSize = this.random(700) + 250;
    var startTime = new Date().getTime();
    var endTime = startTime + 500;
    Countly.recordNetworkTrace(networkTraceKey, responseCode, requestPayloadSize, responsePayloadSize, startTime, endTime);
  }
  enableApm = function () {
    Countly.enableApm();
  }
  setCustomCrashSegment = function () {
    var segment = { "Key": "Value" };
    Countly.setCustomCrashSegment(segment);
  }
}

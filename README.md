## Countly Cordova and Ionic Example

This repository includes example projects of Cordova and Ionic to demonstrate how to use Countly Cordova SDK. It can be used to: 

* Send a sample push notification
* Generate events with values and segmentations with count, sum, duration
* Send a sample user profile
* Send a custom user property
* Send a view (automatic or manual)
* Generate a crash (e.g out of bounds, null pointer, kill, etc or a custom crash log)

This app serves as a simple example for building an app using the [Countly Cordova SDK](https://github.com/Countly/countly-sdk-cordova).

## Running the Example app

### Prerequisites
To run the Example App, you need to be able to build Cordova apps for Android and iOS on your machine.
Refer to the [Apache Cordova getting started guide](https://cordova.apache.org/#getstarted) if you need help setting up your Cordova environment.

### Application key
Also called "appKey" as shorthand. The application key is used to identify for which application this information is tracked. You receive this value by creating a new application in your Countly dashboard and accessing it in its application management screen.

Note: Ensure you are using the App Key (found under Management -> Applications) and not the API Key. Entering the API Key will not work.

### Server URL
If you are using Countly Enterprise Edition trial servers, use https://try.count.ly, https://us-try.count.ly or https://asia-try.count.ly It is basically the domain from which you are accessing your trial dashboard.

If you use both Community Edition and Enterprise Edition, use your own domain name or IP address, such as https://example.com or https://IP (if SSL has been set up).

### Building
Clone this repository

```sh
git clone https://github.com/Countly/countly-sdk-cordova-example.git
```

### For Cordova Project

```sh
cd countly-sdk-cordova-example/app_cordova
Open `www/index.html` and update `"YOUR_API_KEY"` with your Countly application Key and `"https://try.count.ly"` with your server URL.
npm install
cordova platform add (android|ios)...
cordova run (android|ios)...
```

### For Ionic Project

```sh
cd countly-sdk-cordova-example/app_ionic
Open `src/app/home/home.page.ts` and update `"YOUR_API_KEY"` with your Countly App Key and `"https://try.count.ly"` with your server URL.
npm install
npm run build
ionic cordova platform add (android|ios)...
ionic cordova prepare (android|ios)...
ionic cordova run (android|ios)...
```

For Automatic device traces, you must call `Countly.applicationOnCreate();` right after your application class `onCreate` like:

```sh
public class App extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Countly.applicationOnCreate();
        ...
    }
}
```

If you don't have application class then just copy the `App.java` file from root folder of this repository and paste it in your android project src folder, also add `android:name=".App"` in `AndroidManifest.xml` file. 

See the [Countly Cordova SDK Setup](https://support.count.ly/hc/en-us/articles/360037813011-Cordova) for the full installation guide.

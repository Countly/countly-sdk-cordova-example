## This SDK has been sunsetted. This repo has been archived and will not be maintained anymore. 

## Countly Cordova and Ionic SDK test applications

This repository includes example projects of Cordova and Ionic to demonstrate how to use [Countly Cordova SDK](https://github.com/Countly/countly-sdk-cordova).

## What is Countly?
[Countly](https://count.ly) is a product analytics solution and innovation enabler that helps teams track product performance and customer journey and behavior across [mobile](https://count.ly/mobile-analytics), [web](http://count.ly/web-analytics),
and [desktop](https://count.ly/desktop-analytics) applications. [Ensuring privacy by design](https://count.ly/privacy-by-design), Countly allows you to innovate and enhance your products to provide personalized and customized customer experiences, and meet key business and revenue goals.

Track, measure, and take action - all without leaving Countly.

* **Questions or feature requests?** [Join the Countly Community on Discord](https://discord.gg/countly)
* **Looking for the Countly Server?** [Countly Community Edition repository](https://github.com/Countly/countly-server)
* **Looking for other Countly SDKs?** [An overview of all Countly SDKs for mobile, web and desktop](https://support.count.ly/hc/en-us/articles/360037236571-Downloading-and-Installing-SDKs#officially-supported-sdks)

## Using the test application

These test applications can be used to:

* Send a sample push notification
* Generate events with values and segmentations with count, sum, duration
* Send a sample user profile
* Send a custom user property
* Send a view (automatic or manual)
* Generate a crash (e.g out of bounds, null pointer, kill, etc or a custom crash log)

This app serves as a simple example for building an app using the [Countly Cordova SDK](https://github.com/Countly/countly-sdk-cordova).

### Prerequisites
To run the Example App, you need to be able to build Cordova apps for Android and iOS on your machine.
Refer to the [Apache Cordova getting started guide](https://cordova.apache.org/#getstarted) if you need help setting up your Cordova environment.

For more information on how to acquire your application key (appKey) and server URL, check [here](https://support.count.ly/hc/en-us/articles/900000908046-Getting-started-with-SDKs#acquiring-your-application-key-and-server-url).

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
Place your google-services.json file under your root project folder. i.e. above www folder.
run this script ./configure_example.sh
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

## Security
Security is very important to us. If you discover any issue regarding security, please disclose the information responsibly by sending an email to security@count.ly and **not by creating a GitHub issue**.

## Badges
If you like Countly, [why not use one of our badges](https://count.ly/brand-assets) and give a link back to us so others know about this wonderful platform?

<a href="https://count.ly/f/badge" rel="nofollow"><img style="width:145px;height:60px" src="https://count.ly/badges/dark.svg?v2" alt="Countly - Product Analytics" /></a>

```JS
<a href="https://count.ly/f/badge" rel="nofollow"><img style="width:145px;height:60px" src="https://count.ly/badges/dark.svg" alt="Countly - Product Analytics" /></a>
```

<a href="https://count.ly/f/badge" rel="nofollow"><img style="width:145px;height:60px" src="https://count.ly/badges/light.svg?v2" alt="Countly - Product Analytics" /></a>

```JS
<a href="https://count.ly/f/badge" rel="nofollow"><img style="width:145px;height:60px" src="https://count.ly/badges/light.svg" alt="Countly - Product Analytics" /></a>
```

## How can I help you with your efforts?
Glad you asked! For community support, feature requests, and engaging with the Countly Community, please join us at [our Discord Server](https://discord.gg/countly). We're excited to have you there!

Also, we are on [Twitter](https://twitter.com/gocountly) and [LinkedIn](https://www.linkedin.com/company/countly) if you would like to keep up with Countly related updates.

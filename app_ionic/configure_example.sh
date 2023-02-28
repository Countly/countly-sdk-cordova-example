#!/bin/sh

# This is a shell script to create example app for Ionic.


read -p 'Enter package name (should match android firebase project): ' packageName
read -p 'Enter your server URL: ' serverURL
read -p 'Enter your App Key: ' appKey


sed -i'.bak' -e "s/com.countly.demo/$packageName/g" config.xml
sed -i'.bak' -e "s/YOUR_API_KEY/$appKey/g" src/app/home/home.page.ts
sed -i'.bak' -e "s+\"https://try.count.ly\"+"\"${serverURL}\""+g" src/app/home/home.page.ts


ionic cordova plugin add https://github.com/Countly/countly-sdk-cordova.git

npm install
npm run build

ionic cordova platform add android
ionic cordova platform add ios

ionic cordova prepare android
ionic cordova prepare ios

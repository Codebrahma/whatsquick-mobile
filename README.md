# whatsquick-mobile
React Native application to send whatsapp messages to numbers not in contact list

# build

```
yarn install
yarn start
```

## Running on a device

### For Android

```
react-native run-android
```

### For iOS

```
react-native run-ios
```

## Release build 

### For android

Add the following keystore properties to gradle.properties to make a release build

MYAPP_RELEASE_STORE_FILE=  
MYAPP_RELEASE_KEY_ALIAS=  
MYAPP_RELEASE_STORE_PASSWORD=  
MYAPP_RELEASE_KEY_PASSWORD=  

```
npm run build-android
```
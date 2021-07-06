# CHZ STICKER ANIMATED KEYBOARD FOR REACT NATIVE
Animated sticker keyboard for react-native with customizable sticker's

🟢 **This dependency is under BETA**

|⚠️**WARNING** : Please follow all step's for proper install! |
| --- |

## STEP 1 - install these dependencies

```
npm install @react-native-async-storage/async-storage --save
npm install lottie-react-native --save
npm install lottie-ios --save

OR

yarn add @react-native-async-storage/async-storage
yarn add lottie-react-native
yarn add lottie-ios

```
## 🔊 IOS USERS LISTEN HERE 
--------------------------------
If you are using this library for **IOS** then 
go to ios folder by running ``` cd ios ``` on terminal of your project
then run this command ```pod install```

-------------------------------------

💃 **Now it's time to download react-native-animated-stickers-chz**

```
yarn add react-native-animated-stickers-chz

OR

npm install react-native-animated-stickers-chz
```
**Link assets** : ```npx react-native link react-native-animated-stickers-chz```

To work properly please link assets

| ℹ️ **INFO** : Run your projects to link these dependencies else error with show! |
| --- |

# STEP 2 - Initializing on App

Let our keyboard want's to know your app name and also if you use external sticker
So you need initialize the keyboard in App.js or on your initial screen

```javascript
import AnimatedSticker from 'react-native-animated-stickers-chz';

 const StickerInit = {
    app_name: 'MY SWEET APP', //--> Your app name that can tag on copyright text and many more place....
    use_external: true, //--> false if your are not using custom sticker
    }
    
 AnimatedSticker.InitialApp(StickerInit)

```
😍 **Cool your app has been initialized**

# Let's animate your chat 🤟 by chz sticker keybaord

- [Sticker Keyboard](#sticker-keyboard)
- [Sticker View](#sticker-view)
- [Sticker View on Chat](#sticker-view-on-chat)
- [Check if it is valid sticker](#check-sticker)

## Sticker Keyboard 

Sticker Keyboard need proper space to view 
so place the sticker keyboard on bottom , View chart for refernce

   A-->B;
    A-->C;
    B-->D;
    C-->D;

## Sticker View

## Sticker View on chat

## Check Sticker

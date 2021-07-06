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

```
 ┌───────────────────────────────────┐
 │MAIN VIEW WITH FLEX 1 AND OTHER    │
 │STYLES                             │
 └────────────────┬──────────────────┘
                  │
  ┌───────────────┴─────────────────┐
  │ SECOND VIEW WITH FLEX 1 AND     │
  │  YOUR STYLE                     │
  └──────────────┬──────────────────┘
                 │
          ┌──────┴─────┐
          ▼            ▼
┌──────────────┐    ┌───────────────────┐
│OTHER VIEW    │    │ KEYBOARD BOTTOM   │
└──────────────┘    └───────────────────┘
```

**I know that you didn't get anything 😄 Check the code below for more!!**

```js
import React, { useState } from 'react';
import {  View, BackHandler } from 'react-native';
import AnimatedStickerKeyboard from 'react-native-animated-sticker-chz/AnimatedKeyBoard'

const App = () => {
const [vis, setVis] = useState(false)

  const handleBackButtonClick = async () => {
    if (vis) {
      setVis(false)
    } else {
      BackHandler.exitApp()
      //Other think when backPress on invisible keyboard
      return true
    }
  }

return(
 <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <View style={{ transform: [{ translateY: 0 }], justifyContent: 'center', alignItems: 'center', flex: 1 }}>
       <Button title='GET STICKER' onPress={() => { setVis(!vis) }} />
      </View>
      <AnimatedStickerKeyboard
        textButtonColor={'#000'}
        infoText={false}
        visibility={vis}
        onSend={(uri) => { console.log(uri) }}
        keyBoardStyle={{ backgroundColor: '#fff' }}
        menuButtonStyle={{ backgroundColor: '#00000010' }}
        onBackPress={() => { handleBackButtonClick() }}
        textColor={'black'}
        hideDes={false}
        hideFooter={true}
        placeHolderColor={'#00000010'}
      />
    </View >
)

}
export default App;

```
**Let** me explain the whole code!

Here we placed a view with flex 1 on top of keyboard so that View ajust size on keyboard hide/show

we use state for visibility of keyboard 

#### onBackPress

So when user press back while keyboard is shown , We want to tell keyboard what to do onBackPress

so here keyboard will hide normally , But our state is not updated it means keyboard will popup again 😧

This props ``onBackPress`` will help us Hurr! 👁️‍🗨️

```
 const handleBackButtonClick = async () => {
    if (vis) {
      setVis(false)
    } else {
      BackHandler.exitApp()
      //Other think when backPress on invisible keyboard
      return true
    }
  }
  
```
Here ``if(vis)`` will check if keyboard is visible or not

function work like if keyboard is visible or keyboard back press then update state to flase else do other think on backPress

## Sticker View

## Sticker View on chat

## Check Sticker

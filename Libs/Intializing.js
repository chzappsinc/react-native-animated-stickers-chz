import React from 'react'
import { PermissionsAndroid, Alert, Platform, ToastAndroid } from 'react-native'
import extras from '../Data/extras'
import titles from '../Data/titles'
import licence from './licence'

export const InitialAppStart = async (app_name) => {
    extras.data = { ...app_name, our: 'CHZAPPS INDIA' }

    // let main = File.ExternalDirectoryPath + '/.chzapps'
    // File.exists(main)
    //     .then((exists) => {
    //         if (!exists) {
    //             AddFirstModule(app_name)
    //         }
    //     })
}

// const AddFirstModule = async (app_name) => {
//     if (Platform.OS === 'android') {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//                 {
//                     title: app_name + "Need permission to read external storage",
//                     message: "Enable File access permission to save log's and data of this app.",
//                     buttonNeutral: "Ask Me Later",
//                     buttonNegative: "Cancel",
//                     buttonPositive: "OK"
//                 }
//             );
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 let module = File.ExternalDirectoryPath + '/.chzapps/module/'
//                 File.mkdir(module)
//                 let data = File.ExternalDirectoryPath + '/.chzapps/data/'
//                 File.mkdir(data)
//                     .then((suc) => console.log('React native sticker has been initialized'))
//                     .catch((err) => {
//                         console.warn('Fail to initialize react native sticker , Please check your app permission for more ref : https://github.com/chzappsinc/react-native-animated-sticker#error');
//                     });
//                 let path = File.ExternalDirectoryPath + '/.chzapps' + '/licence.txt'
//                 File.writeFile(path, licence.license, 'utf8')
//                     .then((success) => {

//                     })
//                     .catch((err) => {
//                         console.log(err.message);
//                     });
//                 const datas = JSON.stringify(titles);
//                 let path_s = File.ExternalDirectoryPath + '/.chzapps/settings.json'
//                 File.writeFile(path_s, datas, 'utf8')
//                     .then((success) => {

//                     })
//                     .catch((err) => {
//                         console.log(err.message);
//                     });
//                 let del_old = File.ExternalDirectoryPath + '/.chzapps' + '/sticker.txt'
//                 File.unlink(del_old)
//                     .then(() => {
//                         console.log('OLD MODULE DELETED');
//                     })
//                     .catch((err) => {

//                     });
//             } else {
//                 if (__DEV__) {
//                     ToastAndroid.show('Storage permission not enabled , Please enable it on Setting ')
//                     console.log('Fail to initialize react native animated sticker' + 'Please enable it on Setting -> Apps ' + app_name + ' Permissions -> Storage')
//                 } else {
//                     ToastAndroid.show('Storage permission not enabled , Please enable it on Setting  -> Apps ' + app_name + ' Permissions -> Storage')
//                 }
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     } else {
//         if (Platform.OS === 'ios') {
//             let main = File.ExternalDirectoryPath + '/.chzapps'
//             let module = File.ExternalDirectoryPath + '/.chzapps/module/'
//             File.mkdir(module)
//             let data = File.ExternalDirectoryPath + '/.chzapps/data/'
//             File.mkdir(data)
//                 .then((suc) => console.log('React native sticker has been initialized'))
//                 .catch((err) => {
//                     console.warn('Fail to initialize react native sticker , Please check your app permission for more ref : https://github.com/chzappsinc/react-native-animated-sticker#error');
//                 });
//             let path = File.ExternalDirectoryPath + '/.chzapps' + '/licence.txt'
//             File.writeFile(path, licence.license, 'utf8')
//                 .then((success) => {

//                 })
//                 .catch((err) => {
//                     console.log(err.message);
//                 });
//             let del_old = File.ExternalDirectoryPath + '/.chzapps' + '/sticker.txt'
//             File.unlink(del_old)
//                 .then(() => {

//                 })
//                 .catch((err) => {

//                 });
//         }
//     }
//}





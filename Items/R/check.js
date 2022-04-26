import React from "react"
import { Alert, View } from "react-native"
import info from "../../Data/info"

export const check = async () => {
    const check = require('../../Data/demo.json').filter(item => {
        return !item.cat.includes('_chzapps_') || !item.profile.includes('chzappsinc')
    }).length
    if (!check === 0) {
        if (!__DEV__) {
            const data = await fetch(info.update);
            const file = await data.json()
            Alert.alert(
                file.title,
                file.message,
                [
                    { text: "EXIT", onPress: () => { } }
                ]
            );
        }
    }
}
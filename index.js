
'use strict';


import React, { Component } from 'react'
import { InitialAppStart, } from './Libs/Intializing';
import info from './Data/info';
import extras from './Data/extras';


export default class AnimatedSticker {

    /* I N I T I A L I Z A T I O N */

    /**
     * This step is required to create initial files on userApp
     * @param {Array} data
     * 
     * @see https://github.com/chzappsinc/react-native-animated-stickers-chz#IntialApp-1
     * 
     * @author JASIM TK - CHZAPPS
     * @see https://chzapps.com
     */
    static InitialApp(data) {
        InitialAppStart(data);
    }

    /* I S S T I C K E R S */

    /**
     * Check if it is sticker?
     * @param {String} name
     * @see https://github.com/chzappsinc/react-native-animated-stickers-chz#issticker-1
     * 
     * @author JASIM TK - CHZAPPS
     * @see https://chzapps.com
     */

    static isSticker(name) {
        const m = name.replace(info.format, '').replace(info.item_end, '')
        const demo = require('./Data/demo.json').concat(extras.emoji)
        const data = demo.some(item => {
            if (item.name === m) {
                return true
            } else {
                return false
            }
        })
        return data
    }


    /* GET STICKER NAME */
    /**
     * Get sticker name as string
     * @param {String} uri
     * @see https://github.com/chzappsinc/react-native-animated-stickers-chz#getname-1
     *
     * @author JASIM TK - CHZAPPS
     * @see https://chzapps.com
     */

    static getName(uri) {
        const m = uri.replace(/_/g, ' ').replace(info.format, '').replace(info.item_end, '')
        return m.split(/\s+/).map(s => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()).join(" ");
    }

    /* SET EXTRA CAT */
    /**
     * set extra category
     * @param {Array} category
     * @see https://github.com/chzappsinc/react-native-animated-stickers-chz#setextracategory-1
     *
     * @author JASIM TK - CHZAPPS
     * @see https://chzapps.com
     */

    static setExtraCategory(category) {
        const m = category.filter(item => { return item.id < 100 }).length
        const data = category.filter(item => { return item.id < 100 });
        m === 0 ? extras.cat = category : console.warn(`Can't use reserved id in setExtraCategory make an id start from 101 : ${JSON.stringify(data)} `)
    }

    /* SET EXTRA EMOJIS */
    /**
     * set extra emojis
     * @param {Array} items
     * @see https://github.com/chzappsinc/react-native-animated-stickers-chz#setextraemojis-1
     *
     * @author JASIM TK - CHZAPPS
     * @see https://chzapps.com
     */

    static setExtraEmojis(items) {
        const m = items.filter(item => { return item.id < 3000 }).length
        const data = items.filter(item => { return item.id < 3000 });
        m === 0 ? extras.emoji = items : console.warn(`Can't use reserved id in setExtraEmojis\nMake sure that id start from 3001 : ${JSON.stringify(data)}`)
    }

}




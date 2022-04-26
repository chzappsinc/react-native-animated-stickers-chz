import React from 'react'
import PropTypes from "prop-types";

export default StickerName = (name = String) => {

    console.log(name)
    if (name) {
        const item_do = name.replaceAll('ssss', '')
        const final = item_do.replaceAll('ssss', '')
        const demo = require('../Data/demo.json')
        const data = demo.some(item => {
            if (item.name === final) {
                return true
            } else {
                return false
            }
        })
        return data
    } else {
        return false
    }
}



StickerName.defaultProps = {
    name: PropTypes.string
}

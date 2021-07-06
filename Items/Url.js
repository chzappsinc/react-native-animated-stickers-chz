import React, { Component, useEffect, useState } from 'react'
import { ActivityIndicator, View, ViewPropTypes } from 'react-native';
import PropTypes from "prop-types";
import AnimatedLottieView from 'lottie-react-native';
import info from '../Data/info';
import extras from '../Data/extras';


const __returnSticker = (props) => {

    const [data, setData] = useState()
    const files = require('../Data/demo.json').concat(extras.emoji)
    const datas = JSON.stringify(props.item)


    useEffect(() => {
        setSticker(props.data)
    }, [])
    const setSticker = (data) => {
        fetch(data, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData)
            })
            .catch((error) => {
                console.warn('Can\'t load data from empty or invalid lottie asset , Please enter valid ulr or Turn on internet \nError on : ' + datas)
            })
    }

    return (
        data ? <AnimatedLottieView
            source={data}
            loop={props.loop}
            autoPlay={props.autoPlay}
            style={{
                height: props.height,
                width: props.width
            }}
        /> : <View style={{ height: 20, width: 20, backgroundColor: '#ffffff50', borderRadius: 10, }} >
            <ActivityIndicator
                color='white'
                size='small' />
        </View>
    )
}

export default __returnSticker;

__returnSticker.defaultProps = {
    height: 30,
    width: 30,
    autoPlay: true
}



/**
 * Animated View
 * @augments {Component<Props, State>}
 */

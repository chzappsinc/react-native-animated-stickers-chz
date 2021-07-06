import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, StyleSheet, View, ViewPropTypes, Animated, Text, FlatList, TouchableOpacity, BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import titles from '../Data/titles';
import AnimatedLottieView from 'lottie-react-native';
import Tooltip from 'rn-tooltip';
import { CreditItem } from './Credits';
import fonts from '../Data/fonts';
import Files from 'react-native-fs';
import { AnimatedStickerView } from '..';
import info from '../Data/info';
import RenderSticker from './RenderSticker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import extras from '../Data/extras';
import * as Animatable from 'react-native-animatable';
import __returnSticker from './Url';



const __AnimatedKeyBoard_res = (props) => {
    const ej = { fontFamily: props.textFont, color: props.textButtonColor }
    const data = titles.data.concat(extras.cat)
    const userList = useRef()
    const [all, setAll] = useState(true)
    const [id, setId] = useState(1)
    const [crdits, setCrdits] = useState('STICKERS -')
    const [data_sticker, setData_sticker] = useState(require('../Data/demo.json').filter((item) => { return item.cat.includes('_chzapps_emoji') }))
    const exData = require('../Data/demo.json').concat(extras.emoji)
    const [visibility, setVisibility] = useState()


    useEffect(() => {
        Keyboard.dismiss()
        setVisibility(props.visibility)
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackButtonClick,
        );
        return () => backHandler.remove();
    }, [props])

    const handleBackButtonClick = async () => {
        props.onBackPress();
        setVisibility(false)
    }

    //Check use type is first time
    const FirstTime = async () => {
        try {
            const val = await AsyncStorage.getItem('@chzapps_sticker_first')
            !val && null
        } catch (e) {

        }
    }

    // Set sticker
    const setSticker = (cat, credit, id) => {
        FirstTime()
        setId(id)
        setCrdits(cat.toUpperCase() + ' - ' + credit)
        credit === 'STICKER' ? setAll(true) : setAll(false)
        if (cat === 'sticker') {
            setCrdits(cat.toUpperCase() + ' - ' + '')
            setData_sticker(exData.filter(item => { return item.cat.includes('_chzapps_emoji') }))
        } else {
            setData_sticker(exData.filter((item) => { return item.cat == cat }))
        }
    }

    // Set Sub Cat
    const setSubCat = (cat) => {
        setData_sticker(exData.filter(item => { return item.cat.includes(cat) }))
    }


    //Render Keyboard Menu
    const renderItem_Types = (data) => {
        if (data.item.url === true) {
            return (
                <TouchableOpacity onPress={() => setSticker(data.item.value.toLowerCase(), data.item.username, data.item.id)} activeOpacity={0.8} style={[props.menuButtonStyle, styles.items_board]}>
                    <__returnSticker autoPlay={true} loop={true} data={data.item.file} height={25} width={25} />
                    {id === data.item.id && <Animatable.Text animation="zoomInUp" iterationCount={1} direction="alternate" numberOfLines={1} style={[ej, styles.menuStyle, { marginLeft: 6 }]}>{data.item.value.toUpperCase()}</Animatable.Text>}
                </TouchableOpacity >
            )
        } else {
            return (
                <TouchableOpacity onPress={() => setSticker(data.item.value.toLowerCase(), data.item.username, data.item.id)} activeOpacity={0.8} style={[props.menuButtonStyle, styles.items_board]}>
                    <AnimatedLottieView autoPlay loop source={data.item.file} style={{ height: 25, width: 25, marginRight: 0 }} />
                    {id === data.item.id && <Animatable.Text animation="zoomInUp" iterationCount={1} direction="alternate" numberOfLines={1} style={[ej, styles.menuStyle, { marginLeft: 6 }]}>{data.item.value.toUpperCase()}</Animatable.Text>}
                </TouchableOpacity >
            )
        }
    }

    //Render users
    const renderItem_Types_userDetails = (data) => {
        return (
            <TouchableOpacity onPress={() => { setSubCat(data.item.cat) }} activeOpacity={0.8} style={[props.menuButtonStyle, styles.items_users]}>
                <AnimatedLottieView autoPlay loop source={data.item.file} style={{ height: 20, width: 20, marginRight: 6 }} />
                <Text style={[ej, styles.menuStyle, {}]}>{data.item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Animatable.View style={styles.mainContainer}>
            {
                visibility && <View style={[props.keyBoardStyle, styles.keyBoard]}>
                    <FlatList
                        contentContainerStyle={{ height: null }}
                        data={data}
                        renderItem={(item) => renderItem_Types(item)}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}
                    />
                    <View style={{ flex: 100 }} >
                        <View style={{ flexDirection: 'row', height: 35 }}>
                            {crdits && <Text style={styles.credit}>{crdits}</Text>}
                            {
                                all && <FlatList
                                    data={titles.credits}
                                    renderItem={(item) => renderItem_Types_userDetails(item)}
                                    keyExtractor={(item) => item.id}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    style={{ marginLeft: 5, marginRight: 5 }}
                                />
                            }
                        </View>
                        <FlatList
                            contentContainerStyle={{ height: null }}
                            //columnWrapperStyle={{ justifyContent: 'space-between' }}
                            data={data_sticker}
                            initialNumToRender={50}
                            maxToRenderPerBatch={10}
                            windowSize={5}
                            ref={userList}
                            numColumns={5}
                            renderItem={(item) => <RenderSticker
                                onSend={(data, datasIn) => { props.onSend(data, datasIn) }}
                                data={item} />}
                            keyExtractor={(item) => item.id}
                            style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}
                            ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                        />
                    </View>
                    <Animatable.Text animation="zoomIn" iterationCount={1} style={{ textAlign: 'center', color: 'white', backgroundColor: '#00000052', padding: 5, fontFamily: fonts.light, fontSize: 10, marginBottom: 3 }}>WITH ❤️ CHZAPPS INDIA STICKERS</Animatable.Text>
                </View>
            }
        </Animatable.View>
    )
}

__AnimatedKeyBoard_res.propTypes = {
    keyBoardStyle: ViewPropTypes.style,
    menuButtonStyle: ViewPropTypes.style,
    textColor: PropTypes.string,
    textFont: PropTypes.string,
    infoText: PropTypes.bool,
    onSend: PropTypes.func,
    visibility: PropTypes.bool,
    onDo: PropTypes.func
}

__AnimatedKeyBoard_res.defaultProps = {
    keyBoardStyle: { width: '100%', backgroundColor: 'black', height: '35%' },
    menuButtonStyle: { backgroundColor: '#ffffff50', borderRadius: 5, padding: 3 },
    textButtonColor: '#ffff',
    infoText: true,
    textFont: fonts.bold,
}

const styles = StyleSheet.create({
    mainContainer: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        flexDirection: 'column-reverse',
        flexGrow: 1
    },
    keyBoard: {
        width: '100%',
        height: '40%',
        flexDirection: 'column',
        elevation: 100,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    keyBoard_def: {
        width: '100%',
        backgroundColor: 'black'
    },
    items_board: {
        height: null,
        margin: 5,
        flexDirection: 'row',
        borderRadius: 50,
        backgroundColor: '#ffffff50',
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuStyle: {
        height: null,
        marginRight: 5,
        borderRadius: 50,
        fontSize: 12,
        textAlign: 'center',
        maxWidth: 100,
    },
    tooltip: {
        transform: [
            { translateY: 8 }
        ],
        height: null,
        width: null,
        padding: 0
    },
    beforeRender: {
        backgroundColor: '#ffffff20',
        height: 50,
        width: 50,
        flex: 1,
        margin: 10,
        borderRadius: 20
    },
    itemSelected: {
        backgroundColor: '#ffffff50',
        borderRadius: 5,
        padding: 5,
        borderColor: '#ffff',
        borderWidth: 1
    },
    credit: {
        color: 'white',
        fontFamily: fonts.bold,
        marginLeft: 15,
        borderColor: 'white',
        borderBottomWidth: 1,
        paddingBottom: 5,
        alignSelf: 'baseline'
    },
    items_users: {
        height: 25,
        margin: 5,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 3
    },
})

export default __AnimatedKeyBoard_res;
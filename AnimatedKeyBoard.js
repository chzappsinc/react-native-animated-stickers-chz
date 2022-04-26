'use strict';


import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, StyleSheet, View, Dimensions, ViewPropTypes, Animated, Text, FlatList, TouchableOpacity, BackHandler, Modal } from 'react-native';
import PropTypes from 'prop-types';
import titles from './Data/titles';
import AnimatedLottieView from 'lottie-react-native';
import fonts from './Data/fonts';
import RenderSticker from './Items/RenderSticker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import extras from './Data/extras';
import * as Animatable from 'react-native-animatable';
import __returnSticker from './Items/Url';
import __FirstTime from './Items/FirstView';
import { check } from './Items/R/check';

/**
 * AnimatedSticker keyBoard 
 * 
 * @see https://chzapps.com
 * 
 * @copyright https://chzapps.com
 */
const AnimatedStickerKeyboard = (props) => {
    const ej = { fontFamily: props.textFont, color: props.textButtonColor }
    const textColor = { color: props.textColor }
    const data = titles.data.concat(extras.cat)
    const userList = useRef()
    const [all, setAll] = useState(true)
    const [id, setId] = useState(1)
    const [first, setFirst] = useState(false)
    const [crdits, setCrdits] = useState('STICKERS -')
    const [data_sticker, setData_sticker] = useState(require('./Data/demo.json').filter((item) => { return item.cat.includes('_chzapps_emoji') }))
    const exData = require('./Data/demo.json').concat(extras.emoji)
    const [visibility, setVisibility] = useState()
    const [content, setContent] = useState('')
    const anim = useRef()


    useEffect(() => {
        Keyboard.dismiss()
        check()
        FirstTime(props.visibility === true ? true : false)
        setVisibility(props.visibility)
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackButtonClick,
        );
        return () => {
            backHandler.remove()
            const m = false;
        }
    }, [props])

    const handleBackButtonClick = async () => {
        props.onBackPress();
        setVisibility(false)
    }

    useEffect(() => {
        anim.current.slideInUp(200);
        return () => anim.current.fadeOutDown(0)
    }, [visibility])


    //Check use type is first time
    const FirstTime = async (vis) => {
        if (vis) {
            try {
                const val = await AsyncStorage.getItem('@chzapps_sticker_first')
                !val && setFirst(true)
            } catch (e) {
                console.error(e)
            }
        }
    }

    const setFirstOk = async () => {
        await AsyncStorage.setItem('@chzapps_sticker_first', 'true')
        setInterval(() => {
            setFirst(false)
        }, 1000)
    }

    /**
     * 
     * @param {String} cat 
     */
    const setSticker = (cat, credit, id, con) => {
        FirstTime()
        setId(id)
        setContent(con)
        const m = cat.replace(/_/g, ' ')
        setCrdits(m.toUpperCase() + ' - ' + credit)
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
        const type = data.item.value.replace(/_/g, ' ');
        const name = type.toUpperCase()
        if (data.item.url === true) {
            return (
                <Animatable.View animation={'fadeInDownBig'}>
                    <TouchableOpacity onPress={() => setSticker(data.item.value.toLowerCase(), data.item.username, data.item.id, data.item.content)} activeOpacity={0.8} style={[props.menuButtonStyle, styles.items_board]}>
                        <__returnSticker item={data.item} autoPlay={true} loop={true} data={data.item.file} height={25} width={25} />
                        {id === data.item.id && <Animatable.Text animation="zoomIn" iterationCount={1} direction="alternate" numberOfLines={1} style={[ej, styles.menuStyle, { marginLeft: 6 }]}>{name}</Animatable.Text>}
                    </TouchableOpacity >
                </Animatable.View>
            )
        } else {
            return (
                <Animatable.View animation='fadeInDownBig'>
                    <TouchableOpacity onPress={() => setSticker(data.item.value.toLowerCase(), data.item.username, data.item.id, data.item.content)} activeOpacity={0.8} style={[props.menuButtonStyle, styles.items_board]}>
                        <AnimatedLottieView autoPlay loop source={data.item.file} style={{ height: 25, width: 25, marginRight: 0 }} />
                        {id === data.item.id && <Animatable.Text animation="zoomIn" iterationCount={1} direction="alternate" numberOfLines={1} style={[ej, styles.menuStyle, { marginLeft: 6 }]}>{name}</Animatable.Text>}
                    </TouchableOpacity >
                </Animatable.View>
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
        <Animatable.View ref={anim} style={styles.mainContainer}>
            <Modal
                transparent={true}
                visible={first}
            >
                <__FirstTime onPress={setFirstOk} />
            </Modal>
            {
                visibility && <View style={[props.keyBoardStyle, styles.keyBoard]}>
                    <FlatList
                        contentContainerStyle={{ height: null, width: '100%' }}
                        data={data}
                        renderItem={(item) => renderItem_Types(item)}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}
                    />
                    <View style={{ flex: 100 }} >
                        <View style={{ flexDirection: 'row', height: 35 }}>
                            {crdits && <Text style={[styles.credit, { color: props.textColor, borderColor: props.textColor }]}>{crdits}</Text>}
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
                        {!all && !props.hideDes && <Text numberOfLines={1} style={[styles.credit, { fontSize: 10, marginTop: 0, paddingBottom: 0, borderBottomWidth: 0 }, { color: props.textColor, borderColor: props.textColor, width: '90%' }]}>{content}</Text>}
                        <FlatList
                            contentContainerStyle={{ height: null }}
                            //columnWrapperStyle={{ justifyContent: 'space-between' }}
                            data={data_sticker}
                            overScrollMode={'never'}
                            initialNumToRender={50}
                            maxToRenderPerBatch={10}
                            windowSize={5}
                            ref={userList}
                            numColumns={5}
                            renderItem={(item) => <RenderSticker
                                onSend={(data, datasIn) => { props.onSend(data, datasIn) }}
                                placeHolderColor={props.placeHolderColor}
                                data={item} />}
                            keyExtractor={(item) => item.id}
                            style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}
                            ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                        />
                    </View>
                    {
                        !props.hideFooter && <Animatable.Text animation="slideInUp" iterationCount={1} style={{ textAlign: 'center', color: 'white', backgroundColor: '#00000082', padding: 5, fontFamily: fonts.bold, fontSize: 10, paddingBottom: 8 }}>WITH  ❤️  CHZAPPS INDIA & STICKER TEAM</Animatable.Text>
                    }
                </View>
            }
        </Animatable.View>
    )
}

AnimatedStickerKeyboard.propTypes = {
    keyBoardStyle: ViewPropTypes.style,
    menuButtonStyle: ViewPropTypes.style,
    textColor: PropTypes.string,
    textFont: PropTypes.string,
    onSend: PropTypes.func.isRequired,
    visibility: PropTypes.bool,
    onDo: PropTypes.func,
    textButtonColor: PropTypes.string,
    hideDes: PropTypes.bool,
    placeHolderColor: PropTypes.string,
    hideFooter: PropTypes.bool,
    onBackPress: PropTypes.func
}

AnimatedStickerKeyboard.defaultProps = {
    keyBoardStyle: { width: '100%', backgroundColor: '#000', height: '35%' },
    menuButtonStyle: { backgroundColor: '#ffffff50', borderRadius: 5, padding: 3 },
    textButtonColor: '#ffff',
    textColor: '#fff',
    textFont: fonts.bold,
    hideDes: false,
    placeHolderColor: '#ffffff30',
    hideFooter: false
}

const styles = StyleSheet.create({
    mainContainer: {
        // ...StyleSheet.absoluteFillObject,
        // flex: 1,
        // flexDirection: 'column-reverse',
        // flexGrow: 1
    },
    keyBoard: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,
        flexDirection: 'column',
        elevation: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
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

export default AnimatedStickerKeyboard;
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import AnimatedLottieView from 'lottie-react-native'
import React, { useEffect, useState, useRef } from 'react'
import { TouchableOpacity, View, StyleSheet, Modal, StatusBar, Pressable, Text, LogBox } from 'react-native'
import AnimatedSticker from '..'
import fonts from '../Data/fonts'
import info from '../Data/info'
import { CreditItem } from './Credits'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';



const RenderSticker = ({ data, onSend, placeHolderColor }) => {
    const [LottieAnim, setLottieAnim] = useState()
    const [fullScreen, setFullScreen] = useState(false)
    const [social, setSocial] = useState()
    const [pic, setPic] = useState()
    const anim = useRef(null)
    const as = useRef()


    LogBox.ignoreLogs([
        'Warning:',
        'Possible Unhandled Promise Rejection'
    ])

    useEffect(() => {
        if (data.item.social_type === 'facebook') {
            setSocial('Follow on Facebook')
            setPic(require('../Libs/stickers/facebook.png'))
        } else {
            if (data.item.social_type === 'instagram') {
                setSocial('Follow on Instagram')
                setPic(require('../Libs/stickers/instagram.png'))
            } else {
                if (data.item.social_type === 'linkedin') {
                    setSocial('Follow on LinkedIn')
                    setPic(require('../Libs/stickers/linkedin.png'))
                } else {
                    if (data.item.social_type === 'whatsapp') {
                        setSocial('Message me on whatsapp')
                        setPic(require('../Libs/stickers/whatsapp.png'))
                    } else {
                        if (data.item.social_type === 'github') {
                            setSocial('Look me on Github')
                            setPic(require('../Libs/stickers/github.png'))
                        } else {
                            if (data.item.social_type === 'youtube') {
                                setSocial('Subscribe on Youtube')
                                setPic(require('../Libs/stickers/youtube.png'))
                            } else {
                                if (data.item.social_type === 'twitter') {
                                    setSocial('Follow on Twitter')
                                    setPic(require('../Libs/stickers/twitter.png'))
                                } else {
                                    setSocial('Creator profile')
                                    setPic(require('../Libs/stickers/heart.png'))
                                }
                            }
                        }
                    }
                }
            }
        }
        makeRender()
    }, [])


    useEffect(() => {
        try {
            fetch(data.item.url, {
                method: "GET",
            })
                .then((response) => response.json())
                .then((responseData) => {
                    setLottieAnim(responseData)
                })
                .catch((error) => {

                })
        } catch (error) {

        }
    }, [])

    const check = () => {
        as.current.zoomOutDown(700).then(endState => as.current.zoomInUp(100));
    }

    const onItemSend = () => {
        check()
        var sticker = info.format + data.item.name + info.item_end
        const data_render = {
            name: AnimatedSticker.getName(data.item.name),
            id: data.item.id,
            credit: data.item.credit,
            version: info.version
        }
        try {
            onSend(sticker, data_render)
        } catch (error) {
            console.warn('onSend props is required in animated keyboard')
        }
        anim.current.play()
        setTimeout(() => {
            try {
                anim.current.pause()
            } catch (error) {

            }
        }, 5000)
    }

    makeRender = async () => {
        // const data = await AsyncStorage.getItem('@' + data.item.name)
        // if (data) {

        // } else {

        // }
    }

    return (
        LottieAnim ?
            <View>
                <Modal
                    onResponderRelease={() => { setFullScreen(false) }}
                    onMagicTap={() => { setFullScreen(false) }}
                    onRequestClose={() => { setFullScreen(false) }}
                    visible={fullScreen}
                    transparent={true}>
                    <TouchableOpacity
                        onPressOut={() => { setFullScreen(false) }}
                        activeOpacity={1}
                        style={{ flex: 1, backgroundColor: '#00000085' }}>
                        <StatusBar backgroundColor='#00000085' />
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <View style={{ borderRadius: 10 }}>
                                <AnimatedLottieView autoPlay loop source={LottieAnim} style={{ height: 150, width: 150, marginRight: 0, }} />
                            </View>
                            <CreditItem social={social} image={pic} title={AnimatedSticker.getName(data.item.name)} url={data.item.profile} content={'Created By : ' + data.item.credit} />
                        </View>
                    </TouchableOpacity>
                </Modal>
                <GestureRecognizer
                    onSwipe={(state) => { onItemSend() }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            onItemSend()
                        }}
                        onLongPress={() => {
                            setFullScreen(true)
                        }}
                        activeOpacity={0.8} style={{ flex: 1, width: null, padding: 5, marginLeft: 3, marginRight: 3, flexDirection: 'column', borderRadius: data.item.dark === true ? 5 : 0, backgroundColor: data.item.dark === true ? '#ffffff40' : 'transparent', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Animatable.View ref={as}>
                            <AnimatedLottieView ref={anim} source={LottieAnim} autoSize style={{ height: 50, marginRight: 2 }} />
                        </Animatable.View>
                    </TouchableOpacity >
                </GestureRecognizer>
            </View> : <View style={[styles.beforeRender, { backgroundColor: placeHolderColor }]} />
    )
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
        borderRadius: 50
    },
    menuStyle: {
        height: null,
        marginRight: 5,
        borderRadius: 50
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
        marginLeft: 0,
        //borderColor: 'white',
        borderWidth: 0.5,
        paddingBottom: 5,
        textAlign: 'center',
        fontSize: 12,
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#dddddd50',
    },
    tag_credits: {
        margin: 5,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 3,
        fontFamily: fonts.light,
        color: 'white'
    },
    sticker_name: {
        fontFamily: fonts.title,
        color: '#fff',
        fontSize: 15
    }
})

export default RenderSticker;
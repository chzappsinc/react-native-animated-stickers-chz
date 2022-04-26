import { View, StyleSheet, StatusBar, Text, Platform, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import React, { useState } from 'react'
import AnimatedLottieView from 'lottie-react-native';
import fonts from '../Data/fonts';
import StyledText from 'react-native-styled-text';
import dim from './R/dim';
import extras from '../Data/extras';


const __FirstTime = (props) => {

    const [ams, setAms] = useState(false)
    const data = dim.agree.replace(/%s%/g, extras.data.app_name).replace(/%m%/g, extras.data.our)

    return (
        <View style={{ height: '100%', backgroundColor: '#00000080', justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar backgroundColor={'#00000080'} />
            <View style={styles.main}>
                <View style={{ flexDirection: 'row' }}>
                    <AnimatedLottieView source={require('../Libs/stickers/love_m.json')} autoPlay loop={false} style={{ height: 80, width: 50, transform: [{ translateY: 6 }] }} />
                    <View>
                        <Text style={{ fontSize: 23, fontWeight: '500', color: '#000', fontFamily: fonts.title, marginTop: 10, marginLeft: 3 }}>
                            CHZ KEYBOARD 1.2
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: fonts.bold, fontSize: 15 }}>Hurr welcome to sticker store!</Text>
                    <View style={styles.cont}>
                        <ScrollView overScrollMode={'never'} showsVerticalScrollIndicator={false} >
                            <View>
                                <StyledText style={{ fontFamily: fonts.medium, fontSize: 13 }}>
                                    {dim.long_press}
                                </StyledText>
                                <StyledText style={{ fontFamily: fonts.medium, fontSize: 13 }}>
                                    {dim.render_android}
                                </StyledText>
                                <StyledText style={{ fontFamily: fonts.medium, fontSize: 13 }}>
                                    {dim.data}
                                </StyledText>
                                <StyledText style={{ fontFamily: fonts.medium, fontSize: 13 }}>
                                    {data}
                                </StyledText>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                    <TouchableOpacity onPress={() => { setAms(true), props.onPress() }} activeOpacity={0.8} style={{ backgroundColor: '#18A558', alignItems: 'center', justifyContent: 'center', width: null, padding: 8, borderRadius: 10 }}>
                        {
                            ams ?
                                <ActivityIndicator
                                    color='white'
                                    size='small'
                                />
                                : <Text style={{ textAlign: 'center', fontFamily: fonts.bold, color: 'white' }}>Cool Let's Go!!!</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#ffff',
        width: 300,
        height: 400,
        borderRadius: 20
    },
    cont: {
        backgroundColor: '#dcdcdc30',
        height: 265,
        width: null,
        borderRadius: 10,
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        padding: 5,
        marginBottom: 4
    }
})

export default __FirstTime
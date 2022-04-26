import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import extras from "../Data/extras";
import fonts from "../Data/fonts";
import * as Animatable from "react-native-animatable";

export const CreditItem = (props) => {
  const year = new Date().getFullYear();
  const data = JSON.stringify(extras.data);

  return (
    <View
      style={{
        padding: 0,
        backgroundColor: "#000",
        borderRadius: 10,
        minWidth: 200,
        marginTop: 15,
        maxWidth: 250,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <AnimatedLottieView
          source={require("../Libs/stickers/love_m.json")}
          autoPlay
          loop={false}
          style={{ height: 80, width: 50 }}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            color: "#fff",
            fontFamily: fonts.bold,
            marginTop: 10,
            marginLeft: 3,
          }}
        >
          CHZAPPS STICKERS
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            color: "#fff",
            fontFamily: fonts.title,
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: "#fff",
            fontFamily: fonts.medium,
          }}
        >
          {props.content}
        </Text>
        <Animatable.View animation="zoomInUp">
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              try {
                Linking.openURL(props.url);
              } catch (error) {
                console.warn(
                  "Unknown user profile please enter valid Url in profile"
                );
              }
            }}
            style={{
              backgroundColor: "#ffffff50",
              borderRadius: 5,
              padding: 5,
              marginTop: 10,
              alignSelf: "baseline",
              flexDirection: "row",
            }}
          >
            <Animatable.Image
              iterationCount={5}
              source={props.image}
              style={{ height: 15, width: 15, marginRight: 5 }}
            />
            <Text
              style={{
                fontSize: 10,
                fontWeight: "500",
                color: "#fff",
                fontFamily: fonts.medium,
              }}
            >
              {props.social}
            </Text>
          </TouchableOpacity>
        </Animatable.View>
        <View style={{ flexDirection: "row" }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 10,
              color: "#fff",
              fontFamily: fonts.light,
              marginTop: 4,
              maxWidth: 80,
            }}
          >
            © {extras.data.app_name}
          </Text>
          <Animatable.Text
            style={{
              fontSize: 10,
              color: "#fff",
              fontFamily: fonts.light,
              marginTop: 4,
            }}
          >
            {" & " + extras.data.our + " " + year}
          </Animatable.Text>
        </View>
      </View>
    </View>
  );
};

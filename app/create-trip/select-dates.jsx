import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";

export default function SelectDates() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
        paddingTop: 75,
      }}
    >
      <Text
        style={{
          fontFamily: "bagoss-bold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>
    </View>
  );
}

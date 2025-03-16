import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { getRandomLightColor } from "../../utils";

export default function OptionCard({ option, selectedTraveler }) {
  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    setBackgroundColor(getRandomLightColor());
  }, []);
  return (
    <View
      style={[
        {
          padding: 25,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor,
          //   backgroundColor: "#9999992c",
          borderRadius: 15,
        },
        selectedTraveler?.id == option.id && {
          borderWidth: 3,
          //   borderColor: "#000",
        },
      ]}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "bagoss-bold",
            color: "#000",
          }}
        >
          {option?.title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "bagoss-regular",
            color: "#0000008b",
          }}
        >
          {option?.desc}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 35,
        }}
      >
        {option.icon}
      </Text>
    </View>
  );
}

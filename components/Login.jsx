import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useRouter } from "expo-router";
import Fontisto from "@expo/vector-icons/Fontisto";
export default function Login() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/marissa-grootes-TVllFyGaLEA-unsplash_75.jpg")}
        style={{
          width: "100%",
          height: 450,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "bagoss-bold",
            // fontFamily: Platform.select({
            //   ios: "bagoss-bold",
            //   android: "opensans-extrabold",
            // }),
            textAlign: "center",
            marginTop: 10,
          }}
        >
          AI place discovery
        </Text>
        <Fontisto
          style={{
            marginTop: "8%",
            alignSelf: "center",
          }}
          name="holiday-village"
          size={100}
          color="teal"
        />
        <Text
          style={{
            fontFamily: "opensans-regular",
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          Discover your next adventure effortlessly, personalized experienced at
          your fingertrip. Travel smarter with AI driven insight
        </Text>

        <TouchableOpacity
          onPress={() => router.push("auth/sign-in")}
          style={styles.button}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "opensans-regular",
              fontSize: 17,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    flex: 1,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: Platform.select({ ios: "25%", android: "10%" }),
  },
});

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Colors } from "../../../constants/Colors";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "../../../configs/FirebaseConfig";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSignIn = async () => {
    if (!email || !password) {
      ToastAndroid.show("Please enter all inputs", ToastAndroid.LONG);
      return;
    }
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        router.replace("/Mytrip");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if (errorCode == "auth/invalid-credential") {
          ToastAndroid.show("Invalid credential", ToastAndroid.LONG);
        }
      });
  };

  return (
    <View
      style={{
        padding: 25,
        height: "100%",
        paddingTop: 40,
        backgroundColor: Colors.WHITE,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "opensans-bold",
          fontSize: 30,
          marginTop: 30,
        }}
      >
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontFamily: "opensans-regular",
          fontSize: 30,
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "opensans-regular",
          fontSize: 20,
          color: Colors.GRAY,
          marginTop: 10,
        }}
      >
        You've Been Missed
      </Text>

      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "opensans-regular",
            paddingBottom: 5,
            paddingLeft: 5,
          }}
        >
          Email
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
          placeholderTextColor={Colors.GRAY}
          placeholder="Enter your email"
        />
      </View>
      {/* password */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "opensans-regular",
            paddingLeft: 5,
            paddingBottom: 5,
          }}
        >
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor={Colors.GRAY}
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={onSignIn}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          Sign-In
        </Text>
      </TouchableOpacity>

      {/* Create account button*/}
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-up")}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 50,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    paddingLeft: 10,
    fontFamily: "opensans-regular",
    fontSize: 15,
  },
});

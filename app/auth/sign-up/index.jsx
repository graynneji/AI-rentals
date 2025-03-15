import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { auth } from "../../../configs/FirebaseConfig";
export default function index() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullname, setFullname] = useState();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = async () => {
    if (!email && !password && !fullname) {
      ToastAndroid.show("Please enter all inputs", ToastAndroid.LONG);
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        router.replace("/Mytrip");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 40,
        backgroundColor: Colors.WHITE,
        height: "100%",
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
        Create New Account
      </Text>
      {/* user full name */}
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "opensans-regular",
            paddingLeft: 5,
            paddingBottom: 5,
          }}
        >
          Full name
        </Text>
        <TextInput
          onChangeText={(value) => setFullname(value)}
          style={styles.input}
          placeholder="Enter your fullname"
        />
      </View>

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
          Email
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
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
          placeholderTextColor={Colors.GRAY}
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
          placeholder="Enter your password"
        />
      </View>

      <TouchableOpacity
        onPress={onCreateAccount}
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
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("auth/sign-in")}
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
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    paddingLeft: 10,
    fontFamily: "opensans-regular",
  },
});

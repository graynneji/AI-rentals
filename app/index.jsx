import { Button, Text, TouchableOpacity, View } from "react-native";
import Login from "../components/Login";
import { auth } from "../configs/FirebaseConfig";
import { Redirect } from "expo-router";

export default function Home() {
  const user = auth.currentUser;
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ? <Redirect href={"/Mytrip"} /> : <Login />}
    </View>
  );
}

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { CreateTripContext } from "../context/MyTripContext";
import { useState } from "react";

export default function RootLayout() {
  useFonts({
    "opensans-bold": require("../assets/fonts/OpenSans_Condensed-Bold.ttf"),
    "opensans-regular": require("../assets/fonts/OpenSans_Condensed-Regular.ttf"),
    "opensans-semibold": require("../assets/fonts/OpenSans_Condensed-SemiBold.ttf"),
    "opensans-medium": require("../assets/fonts/OpenSans_Condensed-Medium.ttf"),
    "opensans-extrabold": require("../assets/fonts/OpenSans_Condensed-ExtraBold.ttf"),
    "bagoss-bold": require("../assets/fonts/BagossCondensedTRIAL-Bold.ttf"),
    "bagoss-semibold": require("../assets/fonts/BagossCondensedTRIAL-SemiBold.ttf"),
    "bagoss-regular": require("../assets/fonts/BagossCondensedTRIAL-Regular.ttf"),
    "bagoss-medium": require("../assets/fonts/BagossCondensedTRIAL-Medium.ttf"),
    "bagoss-light": require("../assets/fonts/BagossCondensedTRIAL-Light.ttf"),
  });

  const [tripData, setTripData] = useState([]);
  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      {/* // To remove the top index or Home bar you use two options */}
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        // screenOptions={{
        //   headerShown: false,
        // }}
      >
        {/* you can also do this and remove it fromonly the page screen */}
        {/* <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      /> */}
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}

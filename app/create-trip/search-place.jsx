import "react-native-get-random-values";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// import MapboxClient from "@mapbox/mapbox-sdk/services/geocoding";
// import { FlatList } from "react-native";
import { CreateTripContext } from "../../context/MyTripContext";

// const MAPBOX_ACCESS_TOKEN =
//   "pk.eyJ1IjoiZ3JheW5uZWppIiwiYSI6ImNtODY4eXAxdDAyaDUyanF4aHlnaWZ5MW8ifQ.KLTZ7bBnoe1JvQ1WLauD5Q";
// const geocodingClient = MapboxClient({ accessToken: MAPBOX_ACCESS_TOKEN });

export default function SearchPlace() {
  const navigation = useNavigation();
  // const [query, setQuery] = useState();
  // const [places, setPlaces] = useState();

  // const searchPlaces = async (text) => {
  //   setQuery(text);
  //   if (text.length > 2) {
  //     try {
  //       const response = await geocodingClient
  //         .forwardGeocode({
  //           query: text,
  //           autocomplete: true,
  //           limit: 5,
  //         })
  //         .send();
  //       setPlaces(response.body.features);
  //     } catch (error) {
  //       throw new Error("Error fetching places:", error);
  //     }
  //   }
  // };
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
      //   headerLeft: () => (
      //     <TouchableOpacity
      //       onPress={() => navigation.goBack()}
      //       style={{ padding: 10 }}
      //     >
      //       <Ionicons name="arrow-back" size={24} color="black" />
      //     </TouchableOpacity>
      //   ),
    });
  }, []);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search Place..."
        minLength={3}
        fetchDetails={true}
        onPress={(data, details = null) => {
          if (!details) {
            console.log("No detals returned");
            return;
          }
          // console.log(data, details);
          console.log(data.description);
          console.log(details?.geometry.location);
          console.log(details?.photos[0]?.photo_reference);
          console.log(details?.url);
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.photos[0]?.photo_reference,
            },
          });

          router.push("/create-trip/select-traveler");
        }}
        query={{
          key: "AIzaSyAR-kS8e4f97UuvaAg6nYuoYZ9H-moxhOE",
          language: "en",
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 25,
            borderColor: "#999",
            padding: 7,
          },
        }}
      />

      {/* <View style={{ paddingTop: 30 }}>
        <TextInput
          placeholder="Search location..."
          value={query}
          onChangeText={searchPlaces}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 20,
            borderRadius: 15,
          }}
        />
        <FlatList
          data={places}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                console.log("Selected:", item.place_name);
                console.log("Selected:", item.place_type);
                console.log("Selected:", item.context);
                console.log("Selected:", item.properties);
                setTripData(item);
              }}
            >
              <Text style={{ padding: 10 }}>{item.place_name}</Text>
            </TouchableOpacity>
          )}
        />
      </View> */}
    </View>
  );
}

import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import { FlatList } from "react-native";
import { SelectTravelesList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/MyTripContext";

export default function SelectTraveler() {
  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    setTripData({ ...tripData, traveler: selectedTraveler });
  }, [selectedTraveler]);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 95,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "bagoss-bold",
          marginTop: 20,
        }}
      >
        Who's Traveling{" "}
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "bagoss-medium",
            fontSize: 23,
          }}
        >
          Choose your traveles
        </Text>

        <FlatList
          data={SelectTravelesList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard option={item} selectedTraveler={selectedTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 25,
        }}
      >
        <Link href={"/create-trip/select-dates"}>
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontFamily: "bagoss-medium",
              fontSize: 20,
            }}
          >
            Countine...
          </Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

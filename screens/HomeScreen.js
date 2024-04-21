import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import BookingCard from "../components/BookingCard";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ route }) => {
  const { user } = route.params;
  const navigation = useNavigation();

  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    // Fetch bookings data from the server
    fetch(
      `https://37973617-312d-4204-87c1-820311894e52-00-jlkxz5wqwbyh.sisko.replit.dev/bookings/${user.phoneNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched bookings data:", data); // Log the fetched data
        // Update state with the fetched bookings data
        setBookingsData(data);
      })
      .catch((error) => console.error("Error fetching bookings data:", error));
  }, [bookingsData]);

  const handleCardPress = (desc) => {
    switch (desc) {
      case "Book Train":
        navigation.navigate("Train", { user });
        break;
      case "Book Bus":
        navigation.navigate("Bus", { user });
        break;
      case "Bookings":
        navigation.navigate("Booking", { user });
        break;
      case "Account":
        navigation.navigate("Account", { user });
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F4F4F4", paddingTop: 30 }}
    >
      <View
        style={{
          flex: 0.4,
          backgroundColor: "#5053FF",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          alignItems: "flex-start",
          justifyContent: "center",
          paddingLeft: 10,
        }}
      >
        <Text style={{ fontSize: 23, fontWeight: "400", color: "white" }}>
          Where to, {user.username}?
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "column", marginTop: 10 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => handleCardPress("Book Train")}
          >
            <Card
              imgUrl={require("../assets/TrainVector.png")}
              desc={"Book Train"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => handleCardPress("Book Bus")}
          >
            <Card
              imgUrl={require("../assets/BusVector.png")}
              desc={"Book Bus"}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => handleCardPress("Bookings")}
          >
            <Card
              imgUrl={require("../assets/BookingVector.png")}
              desc={"Bookings"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            onPress={() => handleCardPress("Account")}
          >
            <Card
              imgUrl={require("../assets/AccountVector.png")}
              desc={"Account"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <View
          style={{
            flex: 0.1,
            paddingHorizontal: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "900", color: "black" }}>
            Your Bookings
          </Text>
        </View>
        <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
          {bookingsData.map((booking) => (
            <BookingCard
              key={booking._id} // Assuming _id is the unique identifier for bookings
              desc={booking.train ? booking.train : booking.bus} // Use train or bus depending on the type of booking
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

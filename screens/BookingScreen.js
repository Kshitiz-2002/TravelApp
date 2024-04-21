import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView, Platform } from "react-native";
import BookingCard from "../components/BookingCard";

const BookingScreen = ({ route }) => {
  const { user } = route.params;
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    // Fetch bookings data from the server
    fetch(`https://37973617-312d-4204-87c1-820311894e52-00-jlkxz5wqwbyh.sisko.replit.dev/bookings/${user.phoneNumber}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched bookings data:", data); // Log the fetched data
        // Update state with the fetched bookings data
        setBookingsData(data);
      })
      .catch((error) => console.error("Error fetching bookings data:", error));
  }, [bookingsData]);
  

  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: Platform.OS === "ios" ? 0 : 20 }}
    >
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
    </SafeAreaView>
  );
  
    
};

export default BookingScreen;

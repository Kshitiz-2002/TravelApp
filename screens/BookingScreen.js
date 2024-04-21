import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform
} from "react-native";
import BookingCard from "../components/BookingCard";
import { useSelector } from "react-redux";
import { useState } from "react";

const BookingScreen = () => {
  const [userData, setUserData] = useState(null); // State to store user data
  const user = useSelector((state) => state.app.user); // Access user data from Redux store

  const bookingsData = [
    {
      id: 1,
      imgUrl: require("../assets/BusVector.png"),
      desc: {
        departure: "10:00 AM",
        arrival: "1:00 PM",
        duration: "3 hours",
        from: "MAS",
        to: "KPD",
        date: "24th April 2024",
      },
    },
    {
      id: 2,
      imgUrl: require("../assets/TrainVector.png"),
      desc: {
        departure: "9:00 AM",
        arrival: "12:00 PM",
        duration: "3 hours",
        from: "MAS",
        to: "KPD",
        date: "24th April 2024",
      },
    },
    {
      id: 3,
      imgUrl: require("../assets/BusVector.png"),
      desc: {
        departure: "11:00 AM",
        arrival: "2:00 PM",
        duration: "3 hours",
        from: "MAS",
        to: "KPD",
        date: "24th April 2024",
      },
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, marginTop: Platform.OS ==="ios" ? 0:20 }}>
      <View
        style={{
          flex: 0.1,
          paddingHorizontal: 20,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 900, color: "black" }}>
          Your Bookings
        </Text>
      </View>
      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        {bookingsData.map((booking) => (
          <BookingCard
            key={booking.id}
            imgUrl={booking.imgUrl}
            desc={booking.desc}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingScreen;

// import React, { useState, useEffect } from "react";
// import { Text, View, SafeAreaView, ScrollView } from "react-native";
// import BookingCard from "../components/BookingCard";
// import { useSelector } from "react-redux";

// const BookingScreen = () => {
//   // State to store user data
//   const [userData, setUserData] = useState(null);

//   // Access user data from Redux store
//   const user = useSelector((state) => state.app.user);

//   // Update user data state when user data changes
//   useEffect(() => {
//     setUserData(user);
//   }, [user]);

//   // Access train and bus bookings from user data
//   const trainBookings = userData ? userData.trainBookings || [] : [];
//   const busBookings = userData ? userData.busBookings || [] : [];

//   // Combine train and bus bookings data
//   const bookingsData = [...trainBookings, ...busBookings];

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View
//         style={{
//           flex: 0.1,
//           paddingHorizontal: 20,
//           justifyContent: "center",
//         }}
//       >
//         <Text style={{ fontSize: 30, fontWeight: 900, color: "black" }}>
//           Your Bookings
//         </Text>
//       </View>
//       <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
//         {bookingsData.map((booking, index) => (
//           <BookingCard
//             key={index} // Use index as key since booking.id might be undefined
//             imgUrl={booking.imgUrl}
//             desc={booking.desc}
//           />
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default BookingScreen;

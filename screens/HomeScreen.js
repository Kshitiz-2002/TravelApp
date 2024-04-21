import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import BookingCard from "../components/BookingCard";
import React,   { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.app.user);
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

  const handleCardPress = (desc) => {
    switch (desc) {
      case "Book Train":
        navigation.navigate("Train");
        break;
        case "Book Bus":
          navigation.navigate("Bus");
        break;
        case "Bookings":
        navigation.navigate("Booking");
        break;
      case "Account":
        navigation.navigate("Account");
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4F4F4", paddingTop: 30 }}>
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
        <Text style={{ fontSize: 23, fontWeight: 400, color: "white" }}>
          Where to, {user.name}?
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
          <TouchableOpacity style={{flex:1, alignItems:'center'}} onPress={() => handleCardPress("Book Train")}>
            <Card
              imgUrl={require("../assets/TrainVector.png")}
              desc={"Book Train"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1, alignItems:"center"}} onPress={() => handleCardPress("Book Bus")}>
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
          <TouchableOpacity style={{flex:1, alignItems:"center"}} onPress={() => handleCardPress("Bookings")}>
            <Card
              imgUrl={require("../assets/BookingVector.png")}
              desc={"Bookings"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1, alignItems:"center"}} onPress={() => handleCardPress("Account")}>
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
            flex: 0.15,
            paddingHorizontal: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 23, fontWeight: 700, color: "black" }}>
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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

// import React, { useEffect } from "react";
// import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
// import Card from "../components/Card";
// import BookingCard from "../components/BookingCard";
// import { useSelector } from "react-redux";
// import { useNavigation } from "@react-navigation/native";

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   // Access user data from Redux store
//   const user = useSelector((state) => state.app.user);

//   // Check if user object exists
//   if (!user) {
//     return (
//       <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>User data not available</Text>
//       </SafeAreaView>
//     );
//   }

//   // Access train and bus bookings from user data
//   const trainBookings = user.trainBookings || [];
//   const busBookings = user.busBookings || [];

//   // Combine train and bus bookings data
//   const bookingsData = [...trainBookings, ...busBookings];

//   const handleCardPress = (desc) => {
//     switch (desc) {
//       case "Book Train":
//         navigation.navigate("Train");
//         break;
//       case "Book Bus":
//         navigation.navigate("Bus");
//         break;
//       case "Bookings":
//         navigation.navigate("Booking");
//         break;
//       case "Account":
//         navigation.navigate("Account");
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#F4F4F4", paddingTop: 30 }}>
//       <View
//         style={{
//           flex: 0.4,
//           backgroundColor: "#5053FF",
//           borderBottomLeftRadius: 30,
//           borderBottomRightRadius: 30,
//           alignItems: "flex-start",
//           justifyContent: "center",
//           paddingLeft: 10,
//         }}
//       >
//         <Text style={{ fontSize: 23, fontWeight: 400, color: "white" }}>
//           Where to, {user.name}?
//         </Text>
//       </View>
//       <View style={{ flex: 1, flexDirection: "column", marginTop: 10 }}>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             paddingHorizontal: 20,
//           }}
//         >
//           <TouchableOpacity style={{flex:1, alignItems:'center'}} onPress={() => handleCardPress("Book Train")}>
//             <Card
//               imgUrl={require("../assets/TrainVector.png")}
//               desc={"Book Train"}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity style={{flex:1, alignItems:"center"}} onPress={() => handleCardPress("Book Bus")}>
//             <Card
//               imgUrl={require("../assets/BusVector.png")}
//               desc={"Book Bus"}
//             />
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             paddingHorizontal: 20,
//           }}
//         >
//           <TouchableOpacity style={{flex:1, alignItems:"center"}} onPress={() => handleCardPress("Bookings")}>
//             <Card
//               imgUrl={require("../assets/BookingVector.png")}
//               desc={"Bookings"}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity style={{flex:1, alignItems:"center"}} onPress={() => handleCardPress("Account")}>
//             <Card
//               imgUrl={require("../assets/AccountVector.png")}
//               desc={"Account"}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={{ flex: 3 }}>
//         <View
//           style={{
//             flex: 0.15,
//             paddingHorizontal: 20,
//             justifyContent: "center",
//           }}
//         >
//           <Text style={{ fontSize: 23, fontWeight: 700, color: "black" }}>
//             Your Bookings
//           </Text>
//         </View>
//         <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
//           {bookingsData.map((booking) => (
//             <BookingCard
//               key={booking.id}
//               imgUrl={booking.imgUrl}
//               desc={booking.desc}
//             />
//           ))}
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;
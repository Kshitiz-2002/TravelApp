import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import BookingCard from "../components/BookingCard";

const BookingScreen = () => {
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
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.1,
          paddingHorizontal: 20,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: 900, color: "black" }}>
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

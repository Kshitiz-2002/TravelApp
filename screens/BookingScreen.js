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
      desc: "Bus Booking 1",
    },
    {
      id: 2,
      imgUrl: require("../assets/TrainVector.png"),
      desc: "Train Booking 2",
    },
    {
      id: 3,
      imgUrl: require("../assets/BusVector.png"),
      desc: "Bus Booking 3",
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
          Your Bookings:
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

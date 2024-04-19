import { Text, View, SafeAreaView, ScrollView } from "react-native";
import Card from "../components/Card";
import BookingCard from "../components/BookingCard";

const HomeScreen = () => {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: 30 }}>
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
          Where to, John Doe?
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
          <Card
            imgUrl={require("../assets/TrainVector.png")}
            desc={"Book Train"}
          />
          <Card imgUrl={require("../assets/BusVector.png")} desc={"Book Bus"} />
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
          <Card
            imgUrl={require("../assets/BookingVector.png")}
            desc={"Bookings"}
          />
          <Card
            imgUrl={require("../assets/AccountVector.png")}
            desc={"Account"}
          />
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
            Your Bookings:
          </Text>
        </View>
        <ScrollView
          style={{ flex: 1, paddingHorizontal: 20 }}
        >
          {bookingsData.map((booking) => (
            <BookingCard key={booking.id} imgUrl={booking.imgUrl} desc={booking.desc} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

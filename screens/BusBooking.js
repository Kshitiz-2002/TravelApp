import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
  Platform
} from "react-native";

const BusBooking = ({route}) => {
  const { user } = route.params;
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [showDestinationModal, setShowDestinationModal] = useState(false);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [busCards, setBusCards] = useState([]);
  const [selectedBusId, setSelectedBusId] = useState(null);

  const themeColor = "#5053FF"; // Define your theme color here

  const places = [
    { label: "Vellore", value: "Vellore" },
    { label: "Chennai", value: "Chennai" },
  ];

  const handleSourceSelect = (value) => {
    setSource(value);
    setShowSourceModal(false);
  };

  const handleDestinationSelect = (value) => {
    setDestination(value);
    setShowDestinationModal(false);
    // Simulate fetching bus cards for the selected source and destination
    // Replace this with your actual data fetching logic
    setBusCards([
      {
        id: 1,
        type: "bus",
        name: "Bus 1",
        departure: "10:00 AM",
        arrival: "1:00 PM",
        duration: "3 hours",
        from: source === "Chennai" ? "MAS" : "KPD",
        to: destination === "Vellore" ? "KPD" : "MAS",
        date: "24th April 2024",
      },
      // Add more bus cards as needed
    ]);
  };

  const handleBusSelect = (busId) => {
    setSelectedBusId(busId);
  };

  const handleBookNow = () => {
    if (!selectedBusId) {
      Alert.alert("Error", "Please select a bus to book.");
      return;
    }
  
    // Find the selected bus from busCards
    const selectedBus = busCards.find((bus) => bus.id === selectedBusId);
    if (!selectedBus) {
      Alert.alert("Error", "Invalid bus selection.");
      return;
    }
  
    // Dispatch a request to book the bus
    fetch("https://37973617-312d-4204-87c1-820311894e52-00-jlkxz5wqwbyh.sisko.replit.dev/bus-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phonenum: user.phoneNumber,
        bus: {
          id: selectedBus.id,
          type: selectedBus.type,
          name: selectedBus.name,
          departure: selectedBus.departure,
          arrival: selectedBus.arrival,
          duration: selectedBus.duration,
          from: selectedBus.from,
          to: selectedBus.to,
          date: selectedBus.date,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        // Show success message to the user
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  
    // Clear all inputs
    setSource("");
    setDestination("");
    setSelectedBusId(null);
    setBusCards([]);
  };
  

  return (
    <SafeAreaView style={{ flex: 1, marginTop: Platform.OS ==="ios" ? 0:20 }}>
      <View style={{ flex: 1, backgroundColor: "#F4F4F4", padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Bus Booking
        </Text>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Source:</Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: "100%",
              backgroundColor: "white",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#CCCCCC",
              justifyContent: "center",
              paddingLeft: 10,
            }}
            onPress={() => setShowSourceModal(true)}
          >
            <Text>{source ? source : "Select Source"}</Text>
          </TouchableOpacity>
          <Modal
            visible={showSourceModal}
            transparent={true}
            animationType="slide"
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              {places.map((place, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: "white",
                    padding: 20,
                    marginBottom: 10,
                    borderRadius: 10,
                  }}
                  onPress={() => handleSourceSelect(place.value)}
                >
                  <Text>{place.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Modal>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Destination:</Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: "100%",
              backgroundColor: "white",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#CCCCCC",
              justifyContent: "center",
              paddingLeft: 10,
            }}
            onPress={() => setShowDestinationModal(true)}
          >
            <Text>{destination ? destination : "Select Destination"}</Text>
          </TouchableOpacity>
          <Modal
            visible={showDestinationModal}
            transparent={true}
            animationType="slide"
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              {places.map((place, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: "white",
                    padding: 20,
                    marginBottom: 10,
                    borderRadius: 10,
                  }}
                  onPress={() => handleDestinationSelect(place.value)}
                >
                  <Text>{place.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Modal>
        </View>
        <ScrollView style={{ flex: 1, marginBottom: 25 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              Available Buses:
            </Text>
            {busCards.map((bus) => (
              <TouchableOpacity
                key={bus.id}
                style={{
                  backgroundColor:
                    selectedBusId === bus.id ? themeColor : "white",
                  padding: 20,
                  marginBottom: 10,
                  borderRadius: 10,
                }}
                onPress={() => handleBusSelect(bus.id)}
              >
                <Text>{bus.name}</Text>
                <Text>Departure: {bus.departure}</Text>
                <Text>Arrival: {bus.arrival}</Text>
                <Text>Duration: {bus.duration}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        {destination && selectedBusId && (
          <TouchableOpacity
            onPress={handleBookNow}
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              right: 20,
              backgroundColor: themeColor,
              borderRadius: 10,
              padding: 15,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Book Now</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default BusBooking;

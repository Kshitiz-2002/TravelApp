import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
} from "react-native";

const TrainBooking = () => {
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [showDestinationModal, setShowDestinationModal] = useState(false);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [trainCards, setTrainCards] = useState([]);
  const [selectedTrainId, setSelectedTrainId] = useState(null);

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
    // Simulate fetching train cards for the selected source and destination
    // Replace this with your actual data fetching logic
    setTrainCards([
      {
        id: 1,
        name: "Train 1",
        departure: "10:00 AM",
        arrival: "1:00 PM",
        duration: "3 hours",
      },
      {
        id: 2,
        name: "Train 2",
        departure: "12:00 PM",
        arrival: "3:00 PM",
        duration: "3 hours",
      },
      {
        id: 3,
        name: "Train 3",
        departure: "2:00 PM",
        arrival: "5:00 PM",
        duration: "3 hours",
      },
      {
        id: 4,
        name: "Train 4",
        departure: "4:00 PM",
        arrival: "7:00 PM",
        duration: "3 hours",
      },
      {
        id: 5,
        name: "Train 5",
        departure: "6:00 PM",
        arrival: "9:00 PM",
        duration: "3 hours",
      },
      // Add more train cards as needed
    ]);
  };

  const handleTrainSelect = (trainId) => {
    setSelectedTrainId(trainId);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#F4F4F4", padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Train Booking
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
              Available Trains:
            </Text>
            {trainCards.map((train) => (
              <TouchableOpacity
                key={train.id}
                style={{
                  backgroundColor:
                    selectedTrainId === train.id ? themeColor : "white",
                  padding: 20,
                  marginBottom: 10,
                  borderRadius: 10,
                }}
                onPress={() => handleTrainSelect(train.id)}
              >
                <Text>{train.name}</Text>
                <Text>Departure: {train.departure}</Text>
                <Text>Arrival: {train.arrival}</Text>
                <Text>Duration: {train.duration}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        {destination && selectedTrainId && (
          <TouchableOpacity
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

export default TrainBooking;



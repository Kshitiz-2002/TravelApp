import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
  Platform,
  Alert,
} from "react-native";

const TrainBooking = ({ route }) => {
  const { user } = route.params;
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
        type: "train",
        name: "Train 1",
        departure: "10:00 AM",
        arrival: "1:00 PM",
        duration: "3 hours",
        from: value === "Chennai" ? "MAS" : "KPD",
        to: value === "Vellore" ? "KPD" : "MAS",
        date: "24th April 2024",
      },
      // Add more train cards as needed
    ]);
  };

  const handleTrainSelect = (trainId) => {
    setSelectedTrainId(trainId);
  };

  const handleBookNow = () => {
    if (!selectedTrainId) {
      Alert.alert("Error", "Please select a train to book.");
      return;
    }
  
    // Find the selected train from trainCards
    const selectedTrain = trainCards.find(
      (train) => train.id === selectedTrainId
    );
    if (!selectedTrain) {
      Alert.alert("Error", "Invalid train selection.");
      return;
    }
    console.log("--------------------------"); // Log selectedTrain here
    console.log("Selected Train:", selectedTrain); // Log selectedTrain here
    // Dispatch a request to book the train
    fetch(
      "https://37973617-312d-4204-87c1-820311894e52-00-jlkxz5wqwbyh.sisko.replit.dev/train-booking",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phonenum: user.phone,
          train: {
            id: selectedTrain.id,
            type: selectedTrain.type,
            name: selectedTrain.name,
            departure: selectedTrain.departure,
            arrival: selectedTrain.arrival,
            duration: selectedTrain.duration,
            from: selectedTrain.from,
            to: selectedTrain.to,
            date: selectedTrain.date,
          },
        }),
      }
    )
    .then((response) => response.text())
    .then((data) => {
      // Handle the response data as plain text
      console.log(data);
      // Parse the data as needed
    })
    .catch((error) => {
      // Handle error
      console.error(error);
      Alert.alert("Error", "An error occurred while booking the train.");
    });
    // Clear all inputs
    setSource("");
    setDestination("");
    setSelectedTrainId(null);
    setTrainCards([]);
  };
  

  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: Platform.OS === "ios" ? 0 : 20 }}
    >
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
            onPress={handleBookNow} // Call handleBookNow onPress
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

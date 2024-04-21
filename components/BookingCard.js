import { ImageBackground, Text, View } from "react-native";

const BookingCard = ({ imgUrl, desc }) => {
  return (
    <View
      style={{
        backgroundColor: "#5053FF",
        height: "100%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        marginVertical: 10,
        elevation: 5,
      }}
    >
      <View style={{ flex: 1.3 }}>
        <ImageBackground
          source={imgUrl}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            borderRadius: 20,
            overflow: "hidden",
            opacity: 0.7, // Adjust opacity as needed
          }}
        >
        </ImageBackground>
      </View>
      <View style={{ flex: 3, justifyContent: 'center' }}>
        <Text style={{ fontSize: 23, fontWeight: 300, color: "white" }}>
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default BookingCard;

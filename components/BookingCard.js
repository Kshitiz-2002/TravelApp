import { Image, Text, View } from "react-native";

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
        elevation: 5, // Add box shadow
      }}
    >
      <View style={{ flex: 1 }}>
        <Image source={imgUrl} />
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

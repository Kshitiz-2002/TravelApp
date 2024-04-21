import { Image, Text, View } from "react-native";

const Card = ({ imgUrl, desc }) => {
  return (
    <View
      style={{
        backgroundColor: "#731EFF",
        height: "70%",
        width: "90%%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 25,
      }}
    >
      <View style={{ flex: 1 }}>
        <Image source={imgUrl} />
      </View>
      <View style={{ flex: 3, justifyContent:'center' }}>
        <Text style={{ fontSize: 23, fontWeight: 300, color: "white" }}>
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default Card;


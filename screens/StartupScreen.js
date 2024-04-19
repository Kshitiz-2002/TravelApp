import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const StartupScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: 30 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <Text style={{ fontSize: 50, fontWeight: 500 }}>TravelMate</Text>
      </View>
      <View style={{ flex: 1.5, alignItems: "center" }}>
        <Image
          style={{ height: 283.21, width: 291 }}
          source={require("../assets/startupIcon.png")}
        />
      </View>
      <View
        style={{ flex: 0.5, justifyContent: "flex-end", alignItems: "center" }}
      >
        <Text style={{ fontSize: 25, fontWeight: 400 }}>
          Your travel companion,
        </Text>
        <Text style={{ fontSize: 25, fontWeight: 400 }}>wherever you go</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "50%",
            height: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              backgroundColor: "#5053FF",
              height: "35%",
              width: "70%",
            }}
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <Text style={{ fontSize: 23, fontWeight: 400, color: "white" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "50%",
            height: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              backgroundColor: "white",
              height: "35%",
              width: "70%",
              borderColor: "#5053FF",
            }}
            onPress={() => {
              navigation.navigate("SignupScreen");
            }}
          >
            <Text style={{ fontSize: 23, fontWeight: 400, color: "black" }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartupScreen;

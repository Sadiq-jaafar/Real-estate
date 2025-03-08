import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-rubik" style={styles.text}>Welcome to my app</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  text: {

    fontWeight: "bold",
    color: "red",
    fontSize: 40, 
  },
});
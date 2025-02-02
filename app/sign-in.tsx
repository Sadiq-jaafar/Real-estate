import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images"; // Ensure images.js exports onboarding
import google from '@/assets/icons/google.png';
import icons from "@/constants/icons";

const SignIn = () => {

  const handleLogin = () => {
    console.log("Login");
  };


  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image source={images.onboarding} style={styles.image} />
        <View style={styles.view1}>
          <Text style={styles.text1}>Welcome to the App</Text>
          <Text style={styles.text2}>
            Let's you closer to {"\n"} <Text style={styles.text3}>your dream home</Text>
          </Text>
          <Text style={styles.text4}>
            Login to RealEstate with Google
          </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Image src={icons.google} />
          </TouchableOpacity>
            
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "white",
    flex: 1, // Use flex instead of height: '100%'
  },
  scrollView: {
    flexGrow: 1, // Allow scrollView to expand naturally
    alignItems: "center", // Center content horizontally
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: "contain",
  },
  view1: {
    padding: 10,
  },
  text1: {
    textAlign: "center",
    fontSize: 16, // Define a base font size
    textTransform: "uppercase",
    color: "#666876",
    fontFamily: "Rubik-Regular",
  },
   text2: {
    fontSize: 24, // Equivalent to Tailwind's '3xl'
    fontFamily: "Rubik-Bold",
    textAlign: "center",
  },
  text3: {
    color: "#0061FF",
    
  },
  text4: {
    fontSize:18,
    fontFamily: "Rubik-Regular",
    color: "#666876",
    textAlign: "center",
    marginTop: 12,
  },
  TouchableOpacity: {
    backgroundColor: "white", // bg-white
    shadowColor: "#d4d4d8", // shadow-zinc-300
    shadowOffset: { width: 0, height: 2 }, // shadow-md equivalent
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Needed for Android shadows
    borderRadius: 9999, // rounded-full
    width: "100%", // w-full
    paddingVertical: 16, // py-4 (4 * 4px = 16px)
    marginTop: 20, // mt-5 (5 * 4px = 20px)
    alignItems: "center", 
  },
  image2: {
    width: 5,
    height: 5,
    resizeMode: "contain",
  }
  
});

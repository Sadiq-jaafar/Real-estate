import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images"; // Ensure images.js exports onboarding
import google from '@/assets/icons/google.png';
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, useRouter } from "expo-router";

// const SignIn = () => {

  // const {refetch , isLoggedin, loading} = useGlobalContext();

  // if (!loading && isLoggedin) return < Redirect href="/"/>

  // const handleLogin = async () => {
  //   const result = await login();
  //   if (result) {
  //     console.log("loggedin");
  //   } else {
  //     Alert.alert('Failed to login');
  //   }
  // };


//   return (
//     <SafeAreaView style={styles.safeAreaView}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <Image source={images.onboarding} style={styles.image} />
//         <View style={styles.view1}>
//           <Text style={styles.text1}>Welcome to the App</Text>
//           <Text style={styles.text2}>
//             Let's you closer to {"\n"} <Text style={styles.text3}>your dream home</Text>
//           </Text>
//           <Text style={styles.text4}>
//             Login to RealEstate with Google
//           </Text>
//           <TouchableOpacity style={styles.TouchableOpacity} onPress={handleLogin}>
//             <View style={styles.btnContainer}>
//               <Image style={styles.image2} source={icons.google} />
//             <Text>Continue with google</Text>
//             </View>
            
//           </TouchableOpacity>
            
//         </View>
//       </ScrollView>                                                                                                                                           
//     </SafeAreaView>
//   );
// };
// export default SignIn;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "white",
    flex: 1, 
  },
  scrollView: {
    flexGrow: 1, 
    alignItems: "center", 
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
    backgroundColor: "#0D4BD1FF",
    shadowColor: "#C2C6CCFF", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
    borderRadius: 9999, 
    width: 350, 
    paddingVertical: 16, 
    marginTop:20, 
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  
  },
  image2: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    alignSelf:"center"
  },
  btnContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  }
  
});

export default function SignIn() {
  const {refetch , isLoggedin, loading} = useGlobalContext();

  if (!loading && isLoggedin) return < Redirect href="/"/>

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch()
    } else {
      Alert.alert('Failed to login');
      
    }
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
          <TouchableOpacity style={styles.TouchableOpacity} onPress={handleLogin}>
            <View style={styles.btnContainer}>
              <Image style={styles.image2} source={icons.google} />
            <Text>Continue with google</Text>
            </View>
            
          </TouchableOpacity>
            
        </View>
      </ScrollView>                                                                                                                                           
    </SafeAreaView>
  )
}
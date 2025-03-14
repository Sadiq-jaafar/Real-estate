import { Card, FeaturedCard } from "@/components/Cards";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity,  } from "react-native";
import { Image } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.header}>

        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
          <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <Image source={images.avatar} style={styles.image} /> 
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginLeft: 8, 
                justifyContent: 'center',
              }}
            >   
             <Text style={{ color: '#9CA3AF', fontSize: 12, fontFamily: 'Rubik' }}>
              Hello, User
              </Text>
              <Text style={[styles.textBase, { color: '#000000', fontWeight:"bold" }]}>
              Hello, User
             </Text>             
  
            </View>

          </View>
          <Image source={icons.bell}  style={{ width: 24, height: 24 }} />
        </View>
        <Search />
      <View style={{marginVertical: 20}}>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <Text style={{ fontSize: 20, fontFamily: 'Rubik-Bold', color: '#000000FF' , fontWeight:"bold"}}>Featured</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontFamily: 'Rubik-Bold', color: '#93C5FD' }}>See All</Text>
          </TouchableOpacity>
       </View>
      </View>
      </View>
      <FeaturedCard />
      <Card/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flex: 1,
  },
  text: {

    fontWeight: "bold",
    color: "red",
    fontSize: 40, 
  },
  header: {
    padding: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 9999,
  },
  textBase: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
  },
});
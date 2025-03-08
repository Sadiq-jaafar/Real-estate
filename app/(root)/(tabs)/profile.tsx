import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, ImageSourcePropType, TextStyle, Alert } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons';
import images from '@/constants/images';
import { settings } from '@/constants/data';
import { useGlobalContext } from '@/lib/global-provider';
import { logout } from '@/lib/appwrite';

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress: () => void;    
  textStyle?: TextStyle; // string | TextStyle
  showArrow?: boolean;
}


const SettingsItems = ({icon, title, onPress, textStyle, showArrow= true}: SettingsItemProps)=> (
  <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 30,}}>
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12}}>
      <Image source={icon} style={{width:24, height:24}} />
       <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} style={{width: 20, height: 20}} />}
  </TouchableOpacity>
  
  )
const profile = () => {
  const { user, refetch } = useGlobalContext();
  
  const handleLogOut = async () => {
    const result = await logout();
    if (result) {
      Alert.alert('Success', 'You have been logged out successfully');
    }
    else {
      Alert.alert('Error', 'An error occurred while logging out');
    }
    
   }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      contentContainerClassName='pb-23 px-7'>
        <View style={styles.cont2}>
          <Text style={styles.text1}>Profile</Text>
          <Image source={icons.bell} style={styles.image} />
          <View style={styles.cont3}>
            <View style={styles.subCont}>
              <Image source={images.avatar} style={styles.image2} />
              <TouchableOpacity style={{position: 'absolute',  bottom: 44,
    right: 8,}}>
                <Image source={icons.edit} style={{width:36 , height:36 }} />
              </TouchableOpacity>
                <Text style={{ fontSize: 24, lineHeight: 32, fontWeight: 'bold'}}>Al-Masoor</Text>
            </View>

          </View>
          <View style={{ display: "flex", flexDirection: "column", marginTop: 40 }}>
            <SettingsItems icon={icons.calendar} title="My Bookings" onPress={() => { }} />
            <SettingsItems icon={icons.wallet } title="Payment" onPress={() => {}} />
          </View>
          <View style={{display:"flex", flexDirection:"column" , marginTop:20, paddingTop:20, borderTopWidth: 1,
            borderTopColor: '#BFDBFE',}}>
            {settings.slice(2).map((item, index) => (
              <SettingsItems key={index}  {...item} onPress={()=>{}} />
            )) }
          </View>
           <View style={{display:"flex", flexDirection:"column" , marginTop:20, paddingTop:20, borderTopWidth: 1,
            borderTopColor: '#BFDBFE',
          }}>
            <SettingsItems icon={icons.logout} title="Log Out" onPress={handleLogOut} textStyle={{color: 'red'}} showArrow={false} />
            </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    lineHeight: 28,
    color: '#9CA3AF',
  },
  cont2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    height: 20, 
    width: 20,
  },
  cont3: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },
  subCont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 10,
    position: 'relative',
  },
  image2: {
     width: 176,
    height: 176,
    position: 'relative',
    borderRadius: 9999,
  },


});
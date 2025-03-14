// import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, ImageSourcePropType, TextStyle, Alert } from 'react-native';
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import icons from '@/constants/icons';
// import images from '@/constants/images';
// import { settings } from '@/constants/data';
// import { useGlobalContext } from '@/lib/global-provider';
// import { logout } from '@/lib/appwrite';

// interface SettingsItemProps {
//   icon: ImageSourcePropType;
//   title: string;
//   onPress: () => void;
//   textStyle?: TextStyle; // string | TextStyle
//   showArrow?: boolean;
// }


// const SettingsItems = ({icon, title, onPress, textStyle, showArrow= true}: SettingsItemProps)=> (
//   <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 30,}}>
//     <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12}}>
//       <Image source={icon} style={{width:24, height:24}} />
//        <Text style={[styles.text, textStyle]}>{title}</Text>
//     </View>
//     {showArrow && <Image source={icons.rightArrow} style={{width: 20, height: 20}} />}
//   </TouchableOpacity>
  
//   )
// const profile = () => {
//   const { user, refetch } = useGlobalContext();
  
//   const handleLogOut = async () => {
//     const result = await logout();
//     if (result) {
//       Alert.alert('Success', 'You have been logged out successfully');
//     }
//     else {
//       Alert.alert('Error', 'An error occurred while logging out');
//     }
    
//    }
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//       contentContainerClassName='pb-23 px-7'>
//         <View style={styles.cont2}>
//           <Text style={styles.text1}>Profile</Text>
//           <Image source={icons.bell} style={styles.image} />
//         </View>
//           <View style={styles.cont3}>
//             <View style={styles.subCont}>
//               <Image source={images.avatar} style={styles.image2} />
//               <TouchableOpacity style={{position: 'absolute',  bottom: 44,
//     right: 8,}}>
//                 <Image source={icons.edit} style={{width:36 , height:36 }} />
//               </TouchableOpacity>
//                 <Text style={{ fontSize: 24, lineHeight: 32, fontWeight: 'bold'}}>Al-Masoor</Text>
//             </View>

//           </View>
//           <View style={{ display: "flex", flexDirection: "column", marginTop: 5, gap: 0.5}}>
//             <SettingsItems icon={icons.calendar} title="My Bookings" onPress={() => { }} />
//             <SettingsItems icon={icons.wallet } title="Payment" onPress={() => {}} />
//           </View>
//           <View style={{display:"flex", flexDirection:"column" , borderTopWidth: 1,
//             borderTopColor: '#0061FF1A',}}>
//             {settings.slice(2).map((item, index) => (
//               <SettingsItems key={index}  {...item} onPress={()=>{}} />
//             )) }
//           </View>
//            <View style={{display:"flex", flexDirection:"column" , marginTop:5, paddingTop:5, borderTopWidth: 1,
//             borderTopColor: '#0061FF1A',
//           }}>
//             <SettingsItems icon={icons.logout} title="Log Out" onPress={handleLogOut} textStyle={{color: 'red'}} showArrow={false} />
//             </View>

        
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default profile

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: 'white',
//     padding: 20,
//   },
//   text: {
//     fontSize: 18,
//     lineHeight: 28,
//     color: '#9CA3AF',
//   },
//   cont2: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     marginTop: 10,
    
//   },
//   text1: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   image: {
//     height: 20,
//     width: 20,
//   },
//   cont3: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: "center",
//   },
//   subCont: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: "center",
//     marginTop: 10,
//     position: 'relative',
//   },
//   image2: {
//      width: 176,
//     height: 176,
//     position: 'relative',
//     borderRadius: 9999,
//   },


// });
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  TextStyle,
  Alert,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { settings } from '@/constants/data';
import { useGlobalContext } from '@/lib/global-provider';
import { logout } from '@/lib/appwrite';

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress: () => void;
  textStyle?: TextStyle;
  showArrow?: boolean;
}

const SettingsItems = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => (
  <TouchableOpacity
    style={styles.settingsItem}
    onPress={onPress}
  >
    <View style={styles.settingsItemContent}>
      <Image source={icon} style={styles.settingsIcon} />
      <Text style={[styles.settingsText, textStyle]}>{title}</Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} style={styles.arrowIcon} />}
  </TouchableOpacity>
);

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogOut = async () => {
    const result = await logout();
    if (result) {
      Alert.alert('Success', 'You have been logged out successfully');
       refetch();
    } else {
      Alert.alert('Error', 'An error occurred while logging out');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile</Text>
          <Image source={icons.bell} style={styles.bellIcon} />
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image source={{uri:user?.avatar}} style={styles.avatar} />
            <TouchableOpacity style={styles.editButton}>
              <Image source={icons.edit} style={styles.editIcon} />
            </TouchableOpacity>
            <Text style={styles.username}>{ user?.name}</Text>
          </View>
        </View>

        {/* Settings Sections */}
        <View style={styles.settingsSection}>
          <SettingsItems icon={icons.calendar} title="My Bookings" onPress={() => {}} />
          <SettingsItems icon={icons.wallet} title="Payment" onPress={() => {}} />
        </View>

        {/* Additional Settings */}
        <View style={styles.additionalSettings}>
          {settings.slice(2).map((item, index) => (
            <SettingsItems key={index} {...item} onPress={() => {}} />
          ))}
        </View>

        {/* Logout Section */}
        <View style={styles.logoutSection}>
          <SettingsItems
            icon={icons.logout}
            title="Log Out"
            onPress={handleLogOut}
            textStyle={{ color: 'red' }}
            showArrow={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bellIcon: {
    height: 18,
    width: 18,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 9999,
  },
  editButton: {
    position: 'absolute',
    bottom: 36,
    right: 6,
  },
  editIcon: {
    width: 30,
    height: 30,
  },
  username: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: 'bold',
    marginTop: 8,
  },
  settingsSection: {
    marginTop: 16,
  },
  additionalSettings: {
    borderTopWidth: 1,
    borderTopColor: '#0061FF1A',
    marginTop: 16,
  },
  logoutSection: {
    borderTopWidth: 1,
    borderTopColor: '#0061FF1A',
    marginTop: 16,
    paddingTop: 16,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  settingsItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  settingsIcon: {
    width: 20,
    height: 20,
  },
  settingsText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#9CA3AF',
    fontWeight: 'bold',
  },
  arrowIcon: {
    width: 18,
    height: 18,
  },
});
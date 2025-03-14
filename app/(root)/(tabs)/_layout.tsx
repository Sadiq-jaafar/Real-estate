import { Link, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image } from 'react-native';



interface TabIconProps {
  focused: boolean;
  icon: any; 
  title: string;
  color?: string;
}

export default function TabLayot() { 
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                position: 'relative',
                minHeight: 60,
                shadowOpacity: 0,
                borderTopWidth: 1,
                borderTopColor: '#0061FF1A'
            }
        }}>
                        
            <Tabs.Screen 
                name="index" 
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon icon={require('@/assets/icons/home.png')} title="Home" focused={focused} />
                    )
                }} 
            />
                <Tabs.Screen 
                    name="explore" 
                    options={{
                        title: 'Explore',
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <TabIcon icon={require('@/assets/icons/search.png')} title="Explore" focused={focused} />
                        )
                    }} 
                    />
            <Tabs.Screen 
                name="profile" 
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon icon={require('@/assets/icons/person.png')} title="Profile" focused={focused} />
                    )
                }} 
            />
            
        </Tabs>
        
       
    );
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => (
  <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
    <Image
      source={icon}
      tintColor={focused ? "#0061FF" : "#666876"}
      resizeMode="contain"
      style={{ width: 30, height: 30 , marginTop:10}}
    />
    <Text style={{ color: focused ? "#0061FF" : "#666876", fontSize: 10, marginTop: 1 , width:"100%"}}>
      {title}
    </Text>
  </View>
);

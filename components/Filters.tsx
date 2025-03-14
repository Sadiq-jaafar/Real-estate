import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Index from '../app/(root)/(tabs)/index';
import { categories } from '../constants/data';

export default function Filters() {
    const params = useLocalSearchParams<{ filter?: string }>();
    const [selectedCategory, setSelectedCatigory] = useState(params.filter || "All")
    
    const handleCategoryPress = (catigory:string) => {
        
    }
  return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12, marginBottom: 8 }}>
          {categories.map((item, Index) => (
             <TouchableOpacity 
  onPress={() => handleCategoryPress(item.category)} 
  style={{
    display: "flex", 
    flexDirection: "column", 
    alignItems: "flex-start", 
    backgroundColor: selectedCategory === item.category ? "#2967CAFF" : "#E3F2FD", 
    borderWidth: selectedCategory === item.category ? 0 : 1, 
    borderColor: selectedCategory === item.category ? "transparent" : "#90CAF9",
    marginRight: 16, 
    paddingHorizontal: 16, 
    paddingVertical: 8, 
    borderRadius: 50
  }}
> 
 <Text style={{
  fontSize: 12, // Equivalent to "text-small"
  color: selectedCategory === item.category ? "white" : "black",
  marginTop: selectedCategory === item.category ? 2 : 0 // mt-0.5 is roughly 2px
}}>
  {item.title}
</Text>
</TouchableOpacity>

          ))}
    </ScrollView>
  )
}
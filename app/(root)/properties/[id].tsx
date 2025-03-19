import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useAppwrite } from '@/lib/useAppwrite';
import { getProperties, getPropertiesById } from '@/lib/appwrite';

const Property = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const windowHeight = Dimensions.get("window").height;
  const { data: property } = useAppwrite({
    fn: getPropertiesById,
    params: {
      id: id!
    }
  })
  return (
    <View>
      <Text>Property</Text>
    </View>
  )
}

export default Property
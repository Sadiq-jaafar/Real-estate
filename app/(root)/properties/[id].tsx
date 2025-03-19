import { View, Text, Image, Dimensions, ScrollView, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { useAppwrite } from '@/lib/useAppwrite';
import { getProperties, getPropertiesById } from '@/lib/appwrite';
import images from '@/constants/images';
import icons from '@/constants/icons';

const Property = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const windowHeight = Dimensions.get("window").height;
  const { data: property } = useAppwrite({
    fn: getPropertiesById,
    params: {
      id: id!
    }
  });

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={[styles.imageContainer, { height: windowHeight / 2 }]}>
          <Image 
            source={images.whiteGradient} 
            style={styles.gradientImage} 
          />
          
          <View style={styles.headerControls}>
            <TouchableOpacity 
              onPress={() => router.back()} 
              style={styles.backButton}
            >
              <Image 
                source={icons.backArrow} 
                style={styles.backIcon} 
              />
            </TouchableOpacity>
            
            <View style={styles.actionsContainer}>
              <Image 
                source={icons.heart} 
                style={styles.heartIcon} 
              />
            </View>
          </View>
        </View>

        {/* Add remaining content here */}
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 32,
  },
  imageContainer: {
    width: '100%',
    position: 'relative',
  },
  gradientImage: {
    position: 'absolute',
    top: 160,
    width: '100%',
    zIndex: 40,
    resizeMode: 'cover',
  },
  headerControls: {
    zIndex: 200,
    position: 'absolute',
    left: 28,
    right: 28,
    top: Platform.select({
      android: 70,
      ios: 20,
      default: 20,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    backgroundColor: '#93C5FD',
    borderRadius: 100,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#374151',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  heartIcon: {
    width: 24,
    height: 24,
    tintColor: '#191D31',
  },
});

export default Property;
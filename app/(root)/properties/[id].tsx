// import { View, Text, Image, Dimensions, ScrollView, Platform, TouchableOpacity, StyleSheet } from 'react-native';
// import React from 'react';
// import { router, useLocalSearchParams } from 'expo-router';
// import { useAppwrite } from '@/lib/useAppwrite';
// import { getProperties, getPropertiesById } from '@/lib/appwrite';
// import images from '@/constants/images';
// import icons from '@/constants/icons';

// const Property = () => {
//   const { id } = useLocalSearchParams<{ id?: string }>();
//   const windowHeight = Dimensions.get("window").height;
//   const { data: property } = useAppwrite({
//     fn: getPropertiesById,
//     params: {
//       id: id!
//     }
//   });

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         <View style={[styles.imageContainer, { height: windowHeight / 2 }]}>
//           <Image 
//             source={images.japan} 
//             style={styles.gradientImage} 
//           />
          
//           <View style={styles.headerControls}>
//             <TouchableOpacity 
//               onPress={() => router.back()} 
//               style={styles.backButton}
//             >
//               <Image 
//                 source={icons.backArrow} 
//                 style={styles.backIcon} 
//               />
//             </TouchableOpacity>
            
//             <View style={styles.actionsContainer}>
//               <Image 
//                 source={icons.heart} 
//                 style={styles.heartIcon} 
//               />
//             </View>
//           </View>
//         </View>

//         {/* Add remaining content here */}
        
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollContent: {
//     paddingBottom: 32,
//   },
//   imageContainer: {
//     width: '100%',
//     position: 'relative',
//   },
//   gradientImage: {
//     position: 'absolute',
//     top: 160,
//     width: '100%',
//     zIndex: 40,
//     resizeMode: 'cover',
//   },
//   headerControls: {
//     zIndex: 200,
//     position: 'absolute',
//     left: 28,
//     right: 28,
//     top: Platform.select({
//       android: 70,
//       ios: 20,
//       default: 20,
//     }),
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   backButton: {
//     flexDirection: 'row',
//     backgroundColor: '#93C5FD',
//     borderRadius: 100,
//     width: 44,
//     height: 44,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//     tintColor: '#374151',
//   },
//   actionsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   heartIcon: {
//     width: 24,
//     height: 24,
//     tintColor: '#191D31',
//   },
// });

// export default Property;
import { View, Text, Image, Dimensions, ScrollView, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { useAppwrite } from '@/lib/useAppwrite';
import { getProperties, getPropertiesById } from '@/lib/appwrite';
import images from '@/constants/images';
import icons from '@/constants/icons';

const { height: windowHeight } = Dimensions.get("window");

const Property = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
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
        {/* Image Container - Takes half screen height */}
        <View style={[styles.imageContainer, { height: windowHeight / 2 }]}>
          <Image 
            source={images.japan} 
            style={styles.gradientImage} 
          />
          
          {/* Header Controls */}
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

        {/* Property Details Section */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Modern Apartment</Text>
          <Text style={styles.address}>No. 22 Dan-raka samaru</Text>
          
          {/* Price Section */}
          <View style={styles.priceContainer}>
            <Text style={styles.price}>$2,500</Text>
            <Text style={styles.priceSubtext}>/month</Text>
          </View>

          {/* Features Grid */}
          <View style={styles.featuresContainer}>
            {/* Add your features here */}
          </View>

          {/* Description Section */}
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            Beautiful modern apartment with stunning views...
          </Text>

          {/* Contact Button */}
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.buttonText}>Contact Agent</Text>
          </TouchableOpacity>
        </View>
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
    width: '100%',
    height: '100%', // Take full height of container
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
  detailsContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Rubik-Bold',
    color: '#191D31',
    marginBottom: 8,
  },
  address: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    color: '#6B7280',
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 24,
  },
  price: {
    fontSize: 32,
    fontFamily: 'Rubik-Bold',
    color: '#3B82F6',
    marginRight: 8,
  },
  priceSubtext: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    color: '#6B7280',
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Rubik-Bold',
    color: '#191D31',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    color: '#6B7280',
    lineHeight: 24,
    marginBottom: 32,
  },
  contactButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Rubik-Bold',
    fontSize: 16,
  },
});

export default Property;
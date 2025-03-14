import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';

interface Props {
  onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.featuredCard}>
      <Image source={images.japan} style={styles.image} />
      <Image source={images.cardGradient} style={styles.image2} />
      <View style={styles.ratingContainer}>
        <Image source={icons.star} style={styles.starIcon} />
        <Text style={styles.ratingText}>4.4</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          Modern Apartment
        </Text>
        <Text style={styles.address}>No. 22 Dan-raka samaru</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$2,500</Text>
          <Image source={icons.heart} style={styles.heartIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image 
          source={images.japan} 
          style={styles.cardImage} 
        />
         </View>
        
        {/* Rating Badge - Centered */}
        <View style={styles.centeredRatingContainer}>
          <Image source={icons.star} style={styles.starIconSmall} />
          <Text style={styles.ratingTextSmall}>4.4</Text>
        </View>
     

      {/* Card Details */}
      <View style={styles.detailsContainerSmall}>
        <Text style={styles.titleSmall} numberOfLines={1}>
          Cozy Studio
        </Text>
        <Text style={styles.addressSmall}>No. 22 Dan-raka samaru</Text>
        <View style={styles.priceContainerSmall}>
          <Text style={styles.priceSmall}>$2,500</Text>
          <Image source={icons.heart} style={styles.heartIconSmall} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  featuredCard: {
    width: 200,
    height: 240,
    position: 'relative',
  },
  card: {
    flex: 1,
    width: '100%',
    marginTop: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    elevation: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  image2: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 9999,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  starIcon: {
    width: 14,
    height: 14,
  },
  ratingText: {
    fontSize: 12,
    fontFamily: 'Rubik-Bold',
    color: '#93C5FD',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Rubik-Bold',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  address: {
    color: '#DFDEDEFF',
    fontSize: 16,
    fontFamily: 'Rubik',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  price: {
    fontSize: 20,
    fontFamily: 'Rubik-ExtraBold',
    color: '#FFFFFF',
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  starIconSmall: {
    width: 10,
    height: 10,
  },
  ratingTextSmall: {
    fontSize: 12,
    fontFamily: 'Rubik-Bold',
    color: '#93C5FD',
    marginLeft: 2,
    fontWeight: 'bold',
  },
  detailsContainerSmall: {
    marginTop: 8,
  },
  titleSmall: {
    fontSize: 12,
    fontFamily: 'Rubik-Bold',
    color: '#161616FF',
    fontWeight: 'bold',
  },
  addressSmall: {
    color: '#DFDEDEFF',
    fontSize: 8,
    fontFamily: 'Rubik',
  },
  priceContainerSmall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  priceSmall: {
    fontSize: 12,
    fontFamily: 'Rubik-ExtraBold',
    color: '#93C5FD',
  },
  heartIconSmall: {
    width: 20,
    height: 20,
    marginRight: 8,
    color:"'#161616FF"
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 120,
    marginTop:10
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  centeredRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 9999,
    position: 'absolute',
    top: 15,
    right: 15,
  },
  // Update existing small styles
  // priceSmall: {
  //   fontSize: 12,
  //   fontFamily: 'Rubik-ExtraBold',
  //   color: '#161616FF', // Changed to match design
  // },
  // heartIconSmall: {
  //   width: 20,
  //   height: 20,
  //   marginRight: 8,
  //   tintColor: '#161616FF', // Added color prop
  // },
});
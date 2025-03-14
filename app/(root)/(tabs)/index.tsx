import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Header Section */}
        <View style={styles.headerTop}>
          <View style={styles.userInfo}>
            <Image source={images.avatar} style={styles.avatar} />
            <View style={styles.userTextContainer}>
              <Text style={styles.greetingText}>Hello, User</Text>
              <Text style={styles.usernameText}>Hello, User</Text>
            </View>
          </View>
          <Image source={icons.bell} style={styles.bellIcon} />
        </View>

        {/* Search Bar */}
        <Search />

        {/* Featured Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.featuredCardsContainer}>
            <FeaturedCard />
            <FeaturedCard />
          </View>
        </View>

        {/* Recommendations Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Recommendation</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <Filters/>
          <View style={styles.recommendationCardsContainer}>
            <Card />
            <Card />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    padding: 12, // Further reduced padding
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8, // Further reduced margin
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 9999,
  },
  userTextContainer: {
    marginLeft: 8,
  },
  greetingText: {
    color: '#9CA3AF',
    fontSize: 12,
    fontFamily: 'Rubik',
  },
  usernameText: {
    fontSize: 16,
    fontFamily: 'Rubik-Bold',
    color: '#000000',
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  section: {
    marginVertical: 8, // Further reduced margin
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Rubik-Bold',
    color: '#000000',
  },
  seeAllText: {
    fontSize: 16,
    fontFamily: 'Rubik-Bold',
    color: '#93C5FD',
  },
  featuredCardsContainer: {
    flexDirection: "row",
    gap: 8, // Further reduced gap
    marginTop: 8, // Further reduced margin
  },
  recommendationCardsContainer: {
    flexDirection: "row",
    marginTop: 8, // Further reduced margin
    gap: 8, // Further reduced gap
  },
});
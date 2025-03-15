import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, Button } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { avatar } from '../../../lib/appwrite';
import seed from "@/lib/seed";

export default function Index() {
  const { user } = useGlobalContext();
  return (
    <SafeAreaView style={styles.container}>
      <Button  title="Seed" onPress={seed}></Button>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerStyle={styles.mainListContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            {/* Header Section */}
            <View style={styles.headerTop}>
              <View style={styles.userInfo}>
                <Image source={{uri: user?.avatar}} style={styles.avatar} />
                <View style={styles.userTextContainer}>
                  <Text style={styles.greetingText}>Hello, User</Text>
                  <Text style={styles.usernameText}>{user?.name }</Text>
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
              <FlatList
                data={[1, 2, 3]}
                renderItem={({ item }) => <FeaturedCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.featuredListContent}
              />
            </View>

            {/* Recommendations Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Our Recommendation</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
              <Filters />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainListContent: {
    paddingBottom: 16,
  },
  columnWrapper: {
    gap: 8,
    paddingHorizontal: 12,
  },
  header: {
    padding: 12,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
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
    marginVertical: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Rubik-Bold',
    color: '#000000',
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: 'Rubik-Bold',
    color: '#93C5FD',
  },
  featuredListContent: {
    gap: 8,
    marginTop: 8,
    paddingHorizontal: 12,
  },
  recommendationCardsContainer: {
    paddingHorizontal: 12,
  },
});
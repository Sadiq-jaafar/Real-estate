import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { getLatestProperties, getProperties } from '../../../lib/appwrite';
import { router, useLocalSearchParams } from "expo-router";
import { useAppwrite } from "@/lib/useAppwrite";
import { useEffect } from "react";
import NoResult from "@/components/NoResult";

export default function explore() {
  
  const params = useLocalSearchParams<{ query?: string; filter?: string; }>();


  // Fetch filtered properties
  const { data: properties, loading, refetch } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter || '',
      query: params.query || '',
      limit: 6,
    },
    skip: !params.filter && !params.query,
  });

  const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  useEffect(() => {
    refetch({
      filter: params.filter || '',
      query: params.query || '',
      limit: 20,
    });
  }, [params.filter, params.query]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={properties}
        renderItem={({ item }) => (
          <Card 
            item={item} 
            onPress={() => handleCardPress(item.$id)} 
            // style={styles.cardItem}
          />
        )}
        keyExtractor={(item) => item.$id}
        numColumns={2}
        contentContainerStyle={styles.mainListContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator 
              size="large" 
              color="#93C5FD" 
              style={styles.loadingIndicator} 
            />
          ) : <NoResult />
        }
        ListHeaderComponent={
          <View style={{ paddingHorizontal: 20, }}>
            <View style={{
  display: "flex", 
  flexDirection: "row", 
  alignItems: "center", 
  justifyContent: "space-between", 
  marginTop: 20
}}>
  <TouchableOpacity 
    onPress={() => router.back()} 
    style={{
      display: "flex", 
      flexDirection: "row", 
      backgroundColor: "#9BC0FDFF", 
      borderRadius: 50, 
      width: 44, // Equivalent to size-11
      height: 44, 
      justifyContent: "center", 
      alignItems: "center"
    }}
  >
    <Image 
      source={icons.backArrow} 
      style={{ width: 20, height: 20 }} // Equivalent to size-5
    />
              </TouchableOpacity>
             <Text style={{ fontSize: 16, fontWeight:'bold' }}>
  Search for your ideal home
</Text>
<Image source={icons.bell} style={styles.bellIcon}/>
              
</View>


            <Search />
            
            <View style={{ marginTop: 20, }}>
              <Filters/>
              <Text style={{ fontSize:24, fontWeight:"bold", marginTop:20}}>
                Found {properties?.length} Properties
              </Text>
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
    backgroundColor: "#FFFFFF",
  },
  header: {
    padding: 16,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  userTextContainer: {
    flexDirection: "column",
  },
  greetingText: {
    color: '#6B7280',
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
  },
  usernameText: {
    fontSize: 16,
    fontFamily: 'Rubik-SemiBold',
    color: '#111827',
    marginTop: 4,
  },
  bellIcon: {
    width: 24,
    height: 24,
    tintColor: '#374151',
  },
  section: {
    marginVertical: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Rubik-Bold',
    color: '#111827',
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: 'Rubik-SemiBold',
    color: '#3B82F6',
  },
  mainListContent: {
    paddingBottom: 32,
  },
  columnWrapper: {
    gap: 16,
    paddingHorizontal: 16,
  },
  featuredListContent: {
    gap: 16,
    paddingHorizontal: 16,
  },
  cardItem: {
    flex: 1,
    margin: 4,
  },
  featuredCard: {
    width: 300,
    marginRight: 16,
  },
  loadingIndicator: {
    paddingVertical: 40,
    alignSelf: 'center',
  },
});
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { router, useLocalSearchParams, usePathname } from 'expo-router';
import icons from '@/constants/icons'; 
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
    const [search, setSearch] = useState<string>(params.query || '');
    
    const debounceSEarch= useDebouncedCallback((text: string) => router.setParams({query: text}), 500);

  const handleSearch = (text: string) => {
      setSearch(text);
      debounceSEarch(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={icons.search} style={styles.searchIcon} />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Image source={icons.filter} style={styles.filterIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    paddingVertical: 8,
    borderColor: '#DBEAFE',
    borderRadius: 8,
        backgroundColor: '#FEF3C7',
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    width: '100%',
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Rubik',
    color: '#000000',
  },
  filterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
});
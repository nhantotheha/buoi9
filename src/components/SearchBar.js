import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="location-on" size={20} color="#666" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for meals or area"
        placeholderTextColor="#666"
      />
      <TouchableOpacity>
        <Icon name="filter-list" size={20} color="#f4a261" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
});

export default SearchBar;
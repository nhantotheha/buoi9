import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';

// Sử dụng require để tải hình ảnh từ assets
const categories = [
  { id: '1', title: 'Pizza', image: require('../assets/images/pizza.jpg') },
  { id: '2', title: 'Burgers', image: require('../assets/images/burgers.jpg') },
  { id: '3', title: 'Steak', image: require('../assets/images/steak.jpg') },
];

const popularItems = [
  { id: '1', title: 'Food 1', image: require('../assets/images/food1.jpg'), price: 15 },
  { id: '2', title: 'Food 2', image: require('../assets/images/food2.jpg'), price: 35 },
];

const saleOffItems = [
  { id: '1', title: 'Food 1', image: require('../assets/images/food1.jpg'), discount: 10 },
  { id: '2', title: 'Food 2', image: require('../assets/images/food2.jpg'), discount: 15 },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Header title="Top Categories" />
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />
      <Header title="Popular Items" onViewAll={() => console.log('View all popular items')} />
      <FlatList
        horizontal
        data={popularItems}
        renderItem={({ item }) => (
          <CategoryCard title={item.title} image={item.image} price={item.price} />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />
      <Header title="Sale-off Items" onViewAll={() => console.log('View all sale-off items')} />
      <FlatList
        horizontal
        data={saleOffItems}
        renderItem={({ item }) => (
          <CategoryCard title={item.title} image={item.image} discount={item.discount} />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  list: {
    marginBottom: 20,
  },
});

export default Home;
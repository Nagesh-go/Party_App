import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/CategoryTabs';
import FilterToggle from '../components/FilterToggle';
import DishCard from '../components/DishCard';
import dishesData from '../data/dishes.json';

const HomeScreen = ({ navigation }) => {
  const [dishes, setDishes] = useState(dishesData);
  const [filteredDishes, setFilteredDishes] = useState(dishesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [vegetarianFilter, setVegetarianFilter] = useState(false);
  const [glutenFreeFilter, setGlutenFreeFilter] = useState(false);

  const categories = ['All', 'Appetizers', 'Main Course', 'Salads', 'Desserts'];

  useEffect(() => {
    filterDishes();
  }, [searchQuery, activeCategory, vegetarianFilter, glutenFreeFilter]);

  const filterDishes = () => {
    let filtered = dishes;

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (dish) =>
          dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dish.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Category filter
    if (activeCategory !== 'All') {
      filtered = filtered.filter((dish) => dish.category === activeCategory);
    }

    // Vegetarian filter
    if (vegetarianFilter) {
      filtered = filtered.filter((dish) => dish.isVegetarian);
    }

    // Gluten-free filter
    if (glutenFreeFilter) {
      filtered = filtered.filter((dish) => dish.isGlutenFree);
    }

    setFilteredDishes(filtered);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleDishPress = (dish) => {
    Alert.alert(
      dish.name,
      `Price: $${dish.price}\n\nDescription: ${dish.description}\n\nIngredients: ${dish.ingredients.join(', ')}\n\nPrep Time: ${dish.prepTime}`,
      [
        { text: 'View Ingredients', onPress: () => navigation.navigate('Ingredients', { dish }) },
        { text: 'OK', style: 'default' },
      ]
    );
  };

  const renderDish = ({ item }) => (
    <DishCard dish={item} onPress={handleDishPress} />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No dishes found</Text>
      <Text style={styles.emptySubtext}>Try adjusting your filters</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
      />
      
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <View style={styles.filtersContainer}>
        <Text style={styles.filtersTitle}>Filters:</Text>
        <View style={styles.filtersRow}>
          <FilterToggle
            label="Vegetarian"
            isActive={vegetarianFilter}
            onToggle={() => setVegetarianFilter(!vegetarianFilter)}
          />
          <FilterToggle
            label="Gluten Free"
            isActive={glutenFreeFilter}
            onToggle={() => setGlutenFreeFilter(!glutenFreeFilter)}
          />
        </View>
      </View>

      <FlatList
        data={filteredDishes}
        renderItem={renderDish}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  filtersContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filtersTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  filtersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listContainer: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
  },
});

export default HomeScreen;

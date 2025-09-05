import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ingredientsData from '../data/ingredients.json';

const IngredientScreen = ({ route, navigation }) => {
  const { dish } = route.params;
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    // Get detailed ingredient information
    const dishIngredients = dish.ingredients.map((ingredientName) => {
      return ingredientsData.find(
        (ingredient) => ingredient.name.toLowerCase() === ingredientName.toLowerCase()
      ) || {
        name: ingredientName,
        category: 'Unknown',
        description: 'Ingredient information not available',
        allergens: ['unknown'],
        isVegetarian: true,
        isGlutenFree: true,
      };
    });
    setIngredients(dishIngredients);
  }, [dish]);

  const renderIngredient = ({ item }) => (
    <View style={styles.ingredientCard}>
      <View style={styles.ingredientHeader}>
        <Text style={styles.ingredientName}>{item.name}</Text>
        <Text style={styles.ingredientCategory}>{item.category}</Text>
      </View>
      <Text style={styles.ingredientDescription}>{item.description}</Text>
      
      <View style={styles.tagsContainer}>
        <View style={styles.tagsRow}>
          <View style={[styles.tag, item.isVegetarian ? styles.vegetarianTag : styles.nonVegetarianTag]}>
            <Text style={styles.tagText}>
              {item.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
            </Text>
          </View>
          <View style={[styles.tag, item.isGlutenFree ? styles.glutenFreeTag : styles.glutenTag]}>
            <Text style={styles.tagText}>
              {item.isGlutenFree ? 'Gluten Free' : 'Contains Gluten'}
            </Text>
          </View>
        </View>
        
        {item.allergens && item.allergens.length > 0 && item.allergens[0] !== 'none' && (
          <View style={styles.allergensContainer}>
            <Text style={styles.allergensTitle}>Allergens:</Text>
            <View style={styles.allergensRow}>
              {item.allergens.map((allergen, index) => (
                <View key={index} style={[styles.tag, styles.allergenTag]}>
                  <Text style={styles.tagText}>{allergen}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
    </View>
  );

  const handleBackToMenu = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dishTitle}>{dish.name}</Text>
        <Text style={styles.dishPrice}>${dish.price}</Text>
      </View>
      
      <View style={styles.dishInfo}>
        <Text style={styles.dishDescription}>{dish.description}</Text>
        <Text style={styles.prepTime}>Prep Time: {dish.prepTime}</Text>
      </View>

      <View style={styles.ingredientsHeader}>
        <Text style={styles.ingredientsTitle}>Ingredients ({ingredients.length})</Text>
      </View>

      <FlatList
        data={ingredients}
        renderItem={renderIngredient}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.backButton} onPress={handleBackToMenu}>
        <Text style={styles.backButtonText}>Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  dishTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  dishPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  dishInfo: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  dishDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 8,
  },
  prepTime: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
  ingredientsHeader: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 80,
  },
  ingredientCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ingredientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  ingredientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  ingredientCategory: {
    fontSize: 14,
    color: '#FF6B6B',
    fontWeight: '600',
  },
  ingredientDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  tagsContainer: {
    gap: 8,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  vegetarianTag: {
    backgroundColor: '#E8F5E8',
  },
  nonVegetarianTag: {
    backgroundColor: '#FFEBEE',
  },
  glutenFreeTag: {
    backgroundColor: '#E3F2FD',
  },
  glutenTag: {
    backgroundColor: '#FFF3E0',
  },
  allergenTag: {
    backgroundColor: '#FFEBEE',
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  allergensContainer: {
    marginTop: 4,
  },
  allergensTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  allergensRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#FF6B6B',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default IngredientScreen;

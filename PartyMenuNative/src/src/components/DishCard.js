import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const DishCard = ({ dish, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(dish)}>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{dish.name}</Text>
          <Text style={styles.price}>${dish.price}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <View style={styles.tags}>
          {dish.isVegetarian && (
            <View style={[styles.tag, styles.vegetarianTag]}>
              <Text style={styles.tagText}>Vegetarian</Text>
            </View>
          )}
          {dish.isGlutenFree && (
            <View style={[styles.tag, styles.glutenFreeTag]}>
              <Text style={styles.tagText}>Gluten Free</Text>
            </View>
          )}
        </View>
        <View style={styles.footer}>
          <Text style={styles.prepTime}>{dish.prepTime}</Text>
          <Text style={styles.category}>{dish.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  tags: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  vegetarianTag: {
    backgroundColor: '#E8F5E8',
  },
  glutenFreeTag: {
    backgroundColor: '#E3F2FD',
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prepTime: {
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  },
  category: {
    fontSize: 12,
    color: '#FF6B6B',
    fontWeight: '600',
  },
});

export default DishCard;

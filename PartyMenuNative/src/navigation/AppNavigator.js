import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import IngredientScreen from '../screens/IngredientScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF6B6B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Party Menu' }}
      />
      <Stack.Screen 
        name="Ingredients" 
        component={IngredientScreen} 
        options={{ title: 'Ingredients' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

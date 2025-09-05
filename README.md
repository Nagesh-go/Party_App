# Party Menu App

A React Native application for browsing party menu items with filtering and ingredient details.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Android Studio (for Android development)
- Xcode (for iOS development, Mac only)

### Installation
1. **Clone and navigate to the project:**
   ```bash
   cd PartyMenuApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Metro bundler:**
   ```bash
   npm start
   ```

## 📱 How to Run the App

### Option 1: Using Expo Go (Recommended for Testing)
1. **Install Expo Go** on your phone from App Store/Play Store
2. **Start Metro bundler:**
   ```bash
   npm start
   ```
3. **Scan the QR code** that appears in terminal with Expo Go app
4. **Your app loads** on your phone!

### Option 2: Android Development
```bash
# Start Metro bundler
npm start

# In a new terminal, run:
npm run android
```

### Option 3: iOS Development (Mac only)
```bash
# Start Metro bundler
npm start

# In a new terminal, run:
npm run ios
```

### Option 4: Web Browser (Development)
```bash
# Start Metro bundler
npm start

# Press 'w' in terminal to open in web browser
# App opens at http://localhost:8081
```

## ✨ Features

- **🍕 Menu Browsing**: Browse through different categories (Appetizers, Main Course, Salads, Desserts)
- **🔍 Search Functionality**: Search for dishes by name, description, or ingredients
- **🥗 Filter Options**: Filter by Vegetarian and Gluten-Free options
- **📱 Category Tabs**: Easy navigation between different food categories
- **🧾 Detailed Views**: View detailed information about each dish including ingredients
- **⚠️ Ingredient Information**: Detailed ingredient information with allergen warnings

## 📁 Project Structure

```
PartyMenuApp/
├── App.js                          # Main app component
├── index.js                        # Entry point
├── metro.config.js                 # Metro bundler configuration
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── CategoryTabs.js         # Category navigation tabs
│   │   ├── DishCard.js            # Individual dish display card
│   │   ├── FilterToggle.js        # Toggle buttons for dietary filters
│   │   └── SearchBar.js           # Search input component
│   ├── data/                       # JSON data files
│   │   ├── dishes.json            # Menu items with details
│   │   └── ingredients.json       # Detailed ingredient information
│   ├── navigation/                 # Navigation configuration
│   │   └── AppNavigator.js        # Stack navigator setup
│   └── screens/                    # Screen components
│       ├── HomeScreen.js          # Main menu screen
│       └── IngredientScreen.js    # Detailed ingredient screen
└── android/                        # Android project files
```

## 🎯 Usage Guide

### Home Screen
1. **Browse Menu**: Scroll through the main screen to see all available dishes
2. **Search**: Use the search bar to find specific dishes or ingredients
3. **Filter**: Toggle Vegetarian or Gluten-Free filters to narrow down results
4. **Category Navigation**: Tap on category tabs to view dishes by type
5. **View Details**: Tap on any dish card to see detailed information

### Ingredient Screen
1. **View Dish Info**: See complete dish details including price and description
2. **Check Ingredients**: View detailed ingredient information with allergen warnings
3. **Dietary Info**: See vegetarian/gluten-free status for each ingredient
4. **Navigate Back**: Use the back button to return to the main menu

## 🛠️ Development

### Available Scripts
- `npm start` - Start Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator

### Dependencies
- **React Native 0.81.1** - Mobile app framework
- **React Navigation 7.x** - Navigation library
- **React Native Gesture Handler** - Touch gesture handling
- **React Native Reanimated** - Animation library
- **React Native Safe Area Context** - Safe area handling
- **React Native Screens** - Screen management
- **React Native Vector Icons** - Icon library

## 🎨 Design Features

- **Modern UI**: Clean, card-based design with beautiful images
- **Responsive Layout**: Works on different screen sizes
- **Color Scheme**: Party-themed colors (red, teal accents)
- **Typography**: Clear, readable fonts with proper hierarchy
- **Interactive Elements**: Smooth animations and transitions
- **Accessibility**: Proper contrast and touch targets

## 📊 Sample Data

The app includes sample data for:
- **8 Dishes** across 4 categories
- **31 Ingredients** with detailed allergen information
- **Complete Information**: Prices, descriptions, prep times, dietary info

## 🔧 Troubleshooting

### Common Issues
1. **Metro bundler not starting**: Run `npm start --reset-cache`
2. **Android build fails**: Ensure Android Studio and SDK are properly installed
3. **iOS build fails**: Ensure Xcode and iOS simulator are installed (Mac only)
4. **Dependencies issues**: Delete `node_modules` and run `npm install` again

### Development Tips
- Use **Expo Go** for quick testing without emulator setup
- **Hot reloading** is enabled for fast development
- **Debugging** available through React Native Debugger
- **Error boundaries** implemented for better error handling

## 📝 License

This project is for educational purposes. Feel free to use and modify as needed.

---

**🎉 Your Party Menu App is ready to use! Enjoy browsing delicious dishes!**

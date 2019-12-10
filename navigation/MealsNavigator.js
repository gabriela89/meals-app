import {createStackNavigator} from 'react-navigation-stack';
import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from "react-navigation-drawer";
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors'
import {Ionicons} from "@expo/vector-icons";
import {Platform} from 'react-native';


const defaultStackNavOptions = {
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Colors.primarycolor : ''
    },
    headerTitleStyle:{
        fontFamily: 'fructiger-bold'
    },
    headerBackTitleStyle:{
        fontFamily: 'fructiger-bold'
    },
    headerTintColor:
    Platform.OS === 'android' ? 'white' : Colors.primarycolor,
    headerTitle: 'A Screen'
};

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
});

const FavNavigator = createStackNavigator({
   Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
},{
    defaultNavigationOptions: defaultStackNavOptions
});

const MealsFavNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
              return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            }
        }
    },
    Favorites: {screen:FavNavigator, navigationOptions:{
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star-outline' size={25} color={tabInfo.tintColor}/>
            }
        }}
}, {
    tabBarOptions: {
        labelStyle:{
            fontFamily: 'fructiger-bold'
        },
        activeTintColor: Colors.accentColor,
        inactiveTintColor: Colors.primarycolor
    }

});

const FiltersNavigator = createStackNavigator({
   Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {screen: MealsFavNavigator, navigationOptions: {
           drawerLabel: "Favorite Meals",

        }},
    Filters: FiltersNavigator
},{
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: "fructiger-bold"
        }
    }
});

export default createAppContainer(MainNavigator);

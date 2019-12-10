import React from 'react';
import MealsList from '../components/MealsList';
import {useSelector} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {Platform} from "react-native";
import Colors from "../constants/Colors";
import HeaderButton from '../components/HeaderButton'

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);
  return <MealsList listData={favMeals} navigation={props.navigation}/>
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft:
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Menu" iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer();
          }}/>
        </HeaderButtons>,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primarycolor : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primarycolor
  }
};

export default FavoritesScreen;

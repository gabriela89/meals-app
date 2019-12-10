import React from 'react';
import {Platform} from 'react-native';
import {useSelector} from "react-redux";
import Colors from "../constants/Colors";
import {CATEGORIES} from "../data/dummy-data";
import MealsList from '../components/MealsList';

const CategoryMealScreen = props => {



    const catId = props.navigation.getParam('categoryId');
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  return (
<MealsList listData={displayedMeals} navigation={props.navigation}/>
  );
};

CategoryMealScreen.navigationOptions = (navidationData)=>{
    const catID = navidationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);
    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android'? Colors.primarycolor: 'white',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primarycolor
    }
};

export default CategoryMealScreen;

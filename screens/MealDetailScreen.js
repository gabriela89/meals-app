import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Button, Platform, ImageBackground, ScrollView} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import Colors from "../constants/Colors";
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import HeaderButton from '../components/HeaderButton';
import TextDefault from '../components/TextDefault';
import {toggleFavorite} from "../store/actions/meals";

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const availableMeals = useSelector(state => state.meals.meals);
    const currentMealIsFavorite = useSelector(state=>state.meals.favoriteMeals.some(meal=>meal.id === mealId));
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    const dispatch = useDispatch();
    const toggleFavoriteHandler = useCallback(()=>{
        dispatch(toggleFavorite(mealId))
    },[dispatch, mealId]);
    useEffect(()=>{
        // props.navigation.setParams({mealTitle: selectedMeal.title});
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler]);
    useEffect(()=>{
        // props.navigation.setParams({mealTitle: selectedMeal.title});
        props.navigation.setParams({isFav: currentMealIsFavorite})
    }, [currentMealIsFavorite]);

    return (
        <View style={styles.container}>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
                <ImageBackground source={{uri: selectedMeal.imageUrl}} style={styles.bgImage}>
                </ImageBackground>
            </View>
        <ScrollView style={styles.details}>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <TextDefault>{selectedMeal.duration}m</TextDefault>
                <TextDefault>{selectedMeal.complexity.toUpperCase()}</TextDefault>
                <TextDefault>{selectedMeal.affordability.toUpperCase()}</TextDefault>
            </View>
            <View style={styles.ingredientsContainer}>
                <Text style={styles.title}>Ingredients:</Text>
                {selectedMeal.ingredients.map(ingredient => <Text style={styles.ingredients} key={ingredient}>{ingredient}</Text>)}
            </View>
            <View>
                <Text style={styles.title}>Method:</Text>
                {selectedMeal.steps.map(step=> <Text style={styles.steps} key={step}>{step}</Text>)}
            </View>
        </ScrollView>
            <Button title='Go Back Categories' color={Colors.accentColor} onPress={() => {
                        props.navigation.popToTop()
                    }}/>
        </View>
    );
};

MealDetailScreen.navigationOptions = (navidationData) => {
    const mealID = navidationData.navigation.getParam('mealId');
    const mealTitle = navidationData.navigation.getParam('mealTitle');
    const toggleFavorite = navidationData.navigation.getParam('toggleFav');
    const isFavorite = navidationData.navigation.getParam('isFav');
    // const selectedMeal = MEALS.find(meal => meal.id === mealID);

    return {
        headerTitle: mealTitle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName={isFavorite ? 'ios-star': 'ios-star-outline'} onPress={toggleFavorite}/>
        </HeaderButtons>),
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primarycolor : 'white',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primarycolor
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        height: '100%'
    },
    details:{
        height: '60%',
        paddingHorizontal: 15
    },
    title:{
        fontSize: 16,
        fontFamily: 'fructiger-bold',
        paddingVertical: 10
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
         height: '40%',
        paddingHorizontal: 15
    },
    mealDetail: {
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        backgroundColor: '#ccc'

    },
    bgImage: {
        width: '100%',
        height: '100%'
    },
    ingredientsContainer:{
        flex: 1,
        height: '30%'
    },
    ingredients:{
      textAlign: 'left',
        fontSize: 14,
        fontFamily: 'fructiger-light'
    },
    steps:{
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'fructiger-light',

    }
});

export default MealDetailScreen;

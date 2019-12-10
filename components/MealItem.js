import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground} from 'react-native';
import TextDefault from '../components/TextDefault';


const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableNativeFeedback onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                        <Text style={styles.title}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <TextDefault>{props.duration}</TextDefault>
                        <TextDefault>{props.complexity.toUpperCase()}</TextDefault>
                        <TextDefault>{props.affordability.toUpperCase()}</TextDefault>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        color: '#ffffff',
        textShadowColor: "#000",
        textShadowOffset: {width: 2, height:2},
        textShadowRadius: 5,
        fontFamily: 'fructiger-bold',
        paddingHorizontal: 10
    },
    mealItem:{
        height: 200,
        width: '100%',
        backgroundColor: "#ccc",
        marginBottom: 15
    },
    mealRow: {
        flexDirection: 'row',

    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
       paddingHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: "#ccc",
        marginBottom: 15

    },
    bgImage: {
        width: '100%',
        height: '100%'
    },
    propertyOption:{
        color: '#ffffff',
        textShadowColor: "#000",
        textShadowOffset: {width: 2, height:2},
        textShadowRadius: 5
    }
});

export default MealItem;

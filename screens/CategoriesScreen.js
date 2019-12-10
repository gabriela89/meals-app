import React from 'react';
import {StyleSheet, FlatList, Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryMeals from '../screens/CategoryMealsScreen';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'


const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            imageUri={itemData.item.imageUri}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals', params: {
                        categoryId: itemData.item.id
                    }
                })
            }}/>;
    };
    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Meal Categories",
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;

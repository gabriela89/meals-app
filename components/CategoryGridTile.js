import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ImageBackground, View} from "react-native";

const CategoryGridTile = props => {
    return(<TouchableOpacity  style={styles.gridItem} onPress={props.onSelect}>
        <ImageBackground source={props.imageUri} style={{width: '100%', height: '100%'}} >
            <View style={styles.container}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            </ImageBackground>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3
    },
    title: {
        fontSize: 18,
        color: '#ffffff',
        textShadowColor: "#000",
        textShadowOffset: {width: 2, height:2},
        textShadowRadius: 5,
        fontFamily: 'fructiger-bold',
        paddingHorizontal: 10
    }
});

export default CategoryGridTile;

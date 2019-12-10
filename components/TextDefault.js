import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TextDefault = props => {
    return <Text style={styles.property}>{props.children}</Text>

};
const styles = StyleSheet.create({
    property: {
        fontFamily: 'fructiger-light',
        color: '#ffffff',
        textShadowColor: "#000",
        textShadowOffset: {width: 2, height:2},
        textShadowRadius: 5
    }
});

export default TextDefault;

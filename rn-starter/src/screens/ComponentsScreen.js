import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    return <Text style={styles.textStyles}> Component Screen </Text>
}

const styles = StyleSheet.create({
    textStyles:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'red',
        fontSize: 20
    }
})

export default ComponentsScreen;
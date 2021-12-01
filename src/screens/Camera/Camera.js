import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default function Camera({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style = {styles.font}>
                Camera
            </Text>
        </View>
    );
}



const styles = StyleSheet.create({
    font: {
        fontSize: 15,
        color: 'white'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});
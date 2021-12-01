import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Select({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        title="포도당측정"
                        onPress={() => navigation.navigate("색상검출")}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="pH측정"
                        onPress={() => navigation.navigate("색상검출")}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="카메라"
                        onPress={() => navigation.navigate("카메라")}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        margin: 30,
    }
})
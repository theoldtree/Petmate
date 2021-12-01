import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Camera({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Camera
            </Text>
            <Button
                title="사진촬영"
                onPress={() => navigation.navigate("색상검출")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
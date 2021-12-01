import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Result({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Result
            </Text>
            <Button
                title="사진촬영"
                onPress={() => navigation.navigate('사진촬영')}
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
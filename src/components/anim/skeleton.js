import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const SkeletonLoader = () => {
    const animatedValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        })
    ).start();

    const opacity = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0.5, 0.8, 0.5],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.skeleton, { opacity }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    skeleton: {
        width: 200,
        height: 20,
        backgroundColor: '#E0E0E0',
        marginBottom: 10,
    },
});

export default SkeletonLoader;

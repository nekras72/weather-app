import { StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';

const Homebackground = () => {
    const { width, height } = useWindowDimensions();
    return (
        <Canvas style={{ flex: 1 }}>
            <Rect x={0} y={0} width={width} height={height}>
                <LinearGradient start={vec(0, 0)} end={vec(width, height)} colors={['#2e335a', '#1c1b33']} />
            </Rect>
        </Canvas>
    )
}

export default Homebackground

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    }
})
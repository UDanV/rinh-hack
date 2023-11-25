import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
    return <Image source={require('../assets/logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 143.06,
        height: 79.73,
        marginBottom: 8,
    },
})

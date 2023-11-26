import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function NotAcceptedImg() {
    return <Image source={require('../assets/not-accepted.png')} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 180,
        height: 150,
        marginBottom: 8,
    },
})

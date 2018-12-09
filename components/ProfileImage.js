import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function ProfileImage (props)
{
    const size = props.size;

    const styles = StyleSheet.create({
        image: {
            resizeMode: 'cover',
            width: size,
            height: size,
            borderRadius: size / 2,
        },
    })

    return (
        <Image
            source={{uri:props.source}}
            style={styles.image}
        />
    )

}
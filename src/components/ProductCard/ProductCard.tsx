import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import styles from './ProductCard.styles';

const ProductCard = ({ item, onPress }: any) => {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.header_container}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                </View>
                <View style={styles.body_container}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCard;
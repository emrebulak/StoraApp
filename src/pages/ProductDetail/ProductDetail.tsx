import { View, Text, Button, Image } from 'react-native';
import React from 'react';
import styles from './ProductDetail.styles';

const ProductDetail = ({ navigation, route }: any) => {
    const item = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Image style={styles.image} source={{ uri: item.image }} />
            </View>
            <View style={styles.body_container}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price} ₺</Text>
            </View>
        </View>
    )
}

export default ProductDetail;
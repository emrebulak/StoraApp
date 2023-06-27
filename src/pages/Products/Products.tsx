import { FlatList } from 'react-native';
import React from 'react';
import styles from './Products.styles';
import { API_URL } from '@env';

//Components
import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch';


const Products = ({ navigation }: any) => {

    const routerDetailPage = (item: any) => {
        navigation.navigate('ProductDetailPage', item)
    }

    const { loading, data, error }: any = useFetch(API_URL);
    const renderItem = ({ item }: any) => <ProductCard item={item} onPress={() => routerDetailPage(item)} />;

    if (loading) {
        return <Loading />
    }

    if (error != null) {
        return <Error />
    }
    return (
        <FlatList style={styles.container} data={data} renderItem={renderItem} />
    )
}

export default Products;
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 15
    },
    inner_container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    body_container: {
        margin: 10
    },
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },
    description: {
        color: 'black',
        padding: 3,
        fontSize: 18
    },
    price: {
        textAlign: 'right',
        fontSize: 15,
        fontStyle: 'italic'
    }

});
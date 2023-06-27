import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row'
    },
    header_container: {
        marginRight: 8
    },
    body_container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: 'right'
    }
});
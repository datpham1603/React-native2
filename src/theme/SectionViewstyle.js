import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";

// Lấy kích thước của thiết bị hiện tại
const { width, height } = Dimensions.get('window');
const tlr = width / 373
const tlh = height / 734


const styles = StyleSheet.create({
    layoutItem: {
        marginTop: 15 * tlh,
        width: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemcontainer: {
        marginBottom: 30 * tlh
    },
    itemimage: {
        borderRadius: 8,
        backgroundColor: '#F6F6F6',
        resizeMode: 'stretch',
        width: 155 * tlr,
        height: 134 * tlh,
    },
    nameProduct: {
        marginTop: 4*tlh,
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22*tlh,
        color: 'black'
    },
    price: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22*tlh,
        color: '#007537'
    },
    description: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20*tlh,
        color: '#7D7B7B'
    }
})

export default styles
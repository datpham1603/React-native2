import React, { useState } from "react";
import { Image, Text, View } from "react-native"; // Thêm import này

import styles from "../themes/cartview.style";
import CheckBox from 'react-native-check-box';
import ButtonAddRemove from "../button/buttonAddRemove";
import { tlh, tlr } from "../../contants/dimension";
const CartView = ({ data, handleAdd }) => {
    const [checkedItems, setCheckedItems] = useState(Array(data.length).fill(false));

    const handleCheckBoxChange = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    const renderItem = (data) => {
        return data.map((item, index) => (
            <View
                key={index}
                style={styles.container}>
                <CheckBox
                    isChecked={checkedItems[index]}
                    onClick={() => handleCheckBoxChange(index)} // Sử dụng một hàm mô-đun để truyền chỉ số của ô kiểm
                />
                <Image style={styles.itemimage} source={{ uri: item.images[0] }} />
                <View>
                    <View style={styles.flex}>
                        <Text style={styles.nameProduct}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                    <Text style={styles.price}>{item.price}</Text>
                    <View style={styles.flex}>
                        <View style={styles.selectedContainer}>
                            <View style={styles.btnct}>
                                <Text> - </Text>
                            </View>
                            <Text> {item.quantity}</Text>
                            <View style={styles.btnct}>
                                <Text> + </Text>
                            </View>
                        </View>
                        <Text style={styles.delete}>Xóa</Text>
                    </View>
                </View>
            </View>
        ));
    };

    return (
        <View>
            {renderItem(data)}
        </View>
    );
};

export default CartView;

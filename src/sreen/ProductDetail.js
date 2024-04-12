import { Image, StatusBar, Text, View, TouchableOpacity } from "react-native"
import styles from "../theme/ProductDetail.style"
import HeaderApp from "../components/header/HeaderApp"
import ButtonAddRemove from "../components/button/buttonAddRemove";
import CustomButton from "../components/button/customButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../redux/slice/cart.slice";
import { useEffect, useState } from "react";
import { fetchProductById } from "../redux/slice/product.slice";

const ProductDetail = ({ route }) => {

    const [quantity, setQuantity] = useState(0);
    const { user } = useSelector(state => state.reducer.sign);
    const dispatch = useDispatch();

    const { categoryData } = route.params;

    const handleAdd = () => {
        setQuantity(quantity + 1);
    }
    const handleRemove = () => {
        if (quantity === 0) {
            setQuantity(quantity);
            return;
        }
        setQuantity(quantity - 1);
    }
    const handleBtn = () => {
        let userId = user.user._id;
        let productId = categoryData.item._id;
        dispatch(fetchCart({ userId, productId, quantity }));
    }
    const total = categoryData.item.price * quantity;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" />
            <HeaderApp
                title={'Spider Plant'}
                image1={require('../../assets/images/arrowleft.png')}
                image2={require('../../assets/images/shopping-cart.png')} />

            <View>
                <Image style={styles.imgf} source={{ uri: categoryData.item.images[0] }} />
                <View style={styles.categoryContainer}></View>

                <Text style={styles.price}> {categoryData.item.price}đ</Text>
                <View style={styles.detailContainer}>
                    <View >
                        <Text style={styles.detail}>Chi tiết sản phẩm</Text>
                    </View>
                    <View style={styles.kcc}>
                        <Text > Kích cỡ </Text>
                        <Text> {categoryData.item.product_detail.size} </Text>
                    </View>
                    <View style={styles.kcc}>
                        <Text > Xuất Xứ </Text>
                        <Text> {categoryData.item.product_detail.origin} </Text>
                    </View>
                    <View style={styles.kcc}>
                        <Text > Xuất Xứ </Text>
                        <Text> {categoryData.item.product_detail.quantity} </Text>
                    </View>
                </View>
                <View style={styles.generalContainer}>
                    <View style={styles.selected}>
                        <Text> Đã chọn {quantity} sản phẩm </Text>
                        <Text> Tạm tính </Text>
                    </View>
                    <View style={styles.view}>
                        <View style={styles.selectedContainer}>
                            <TouchableOpacity style={styles.button} onPress={handleRemove}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text> {quantity} </Text>
                            <TouchableOpacity style={styles.button} onPress={handleAdd}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text> {total}đ </Text>
                    </View>
                    {quantity > 0 ? (<CustomButton onPress={handleBtn} title={'CHỌN MUA'} />) : (<View></View>)}

                </View>
            </View>
        </View>
    )
}


export default ProductDetail
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native"
import styles from "../theme/cart.style"
import HeaderApp from "../components/header/HeaderApp"
import CartView from "../components/sectionView/cartsectionView"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/slice/cart.slice"
import { getProductCart } from "../redux/slice/product.slice"
const CartSreen = () => {

    // const [plus, setPlus] = useState(0)
    // const data = [
    //     {
    //         image: 'https://tse2.mm.bing.net/th?id=OIP.0nn5VwmVLFbMX2f80gRmUgHaEK&pid=Api&P=0&h=220',
    //         name: 'Spander plan',
    //         description: 'ưu bóng',
    //         price: '250000đ'
    //     }
    // ]
    const userId = '6612bd374fad37700b4749e7';


    const handleAdd = () => { }
    const handleRemove = () => { }
    const dispatch = useDispatch();
    const { giohang } = useSelector(state => state.reducer.cart);
    const { productCart } = useSelector(state => state.reducer.product);


    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getCart(userId));
            if (giohang.cart.listProduct && giohang.cart.listProduct.length > 0) {
                console.log('kkkkkkkkkkkkkkkkkkkkkk');
                const arrIdProduct = JSON.stringify(giohang.cart.listProduct);
                dispatch(getProductCart(arrIdProduct));
            }
        };

        fetchData();

    }, [dispatch]);


    if (productCart != null && productCart.length > 0) {
        var updatedProductCart = productCart.map(productItem => {
            const matchedGiohangItem = giohang.cart.listProduct.find(giohangItem => giohangItem.product_id === productItem._id);
            if (matchedGiohangItem) {
                return { ...productItem, quantity: matchedGiohangItem.quantity };
            } else {
                return productItem;
            }
        });
        console.log(updatedProductCart);
    }


    return (
        <View style={styles.container}>

            <HeaderApp
                title="GIỎ HÀNG"
                image1={require('../../assets/images/arrowleft.png')}
                image2={require('../../assets/images/trash.png')} />
            {productCart != null && productCart.length > 0 ? (<CartView
                data={updatedProductCart}
                handleAdd={handleAdd} />) : (
                <View></View>
            )}

            <View style={styles.footer}>
                <View style={[styles.flexrow, styles.footerContainer]}>
                    <Text>Tạm Tính</Text>
                    <Text> 500000đ</Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}> Tiến hành thanh toán </Text>
                    <Image source={require('../../assets/images/chevron-right.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartSreen
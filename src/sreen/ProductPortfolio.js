import { FlatList, Text, TouchableOpacity, View } from "react-native";
import HeaderApp from "../components/header/HeaderApp";
import styles from "../theme/ProductPortfolio.styyle";
import { fetchSubcate } from "../redux/slice/category.slice";
import { useEffect, useState } from "react";
import { fetchProduct } from "../redux/slice/product.slice";
import { useDispatch, useSelector } from "react-redux";
import SectionView from "../components/sectionView/sectionView";

const ProductPortfolio = ({ navigation, route }) => {

    const [selectedItem, setSelectedItem] = useState();
    const [idcate, setIdcate] = useState('660836fda96bdf21f523f4c1');
    const dispatch = useDispatch();
    const { subcate, loading } = useSelector(state => state.reducer.category);
    const { products } = useSelector(state => state.reducer.product)

    const { categoryData } = route.params;
    const uppercasename = categoryData.name.toUpperCase();
    const iconback = require('../../assets/images/arrowleft.png');
    const iconCart = require('../../assets/images/shopping-cart.png');
    const parent_id = categoryData.id;


    useEffect(() => {
        dispatch(fetchSubcate(parent_id))
    }, [])
    useEffect(() => {
        dispatch(fetchProduct(idcate))
    }, [idcate])

    if (subcate.listSubCategory != null) {
        var dataWithAll = [{ name_category: 'Tất cả' }, { name_category: 'Mới nhất' }, ...subcate.listSubCategory];
    }

    const handleItemPress = (item) => {
        console.log(item.parent_id)
        setSelectedItem(item);
        setIdcate(item.parent_id);
    };


    const renderCategory = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
                <View style={[styles.category, { backgroundColor: selectedItem === item ? '#009245' : 'transparent' }]}>
                    <Text style={{ color: selectedItem === item ? 'white' : '#7D7B7B' }}>{item.name_category}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <HeaderApp
                image1={iconback}
                image2={iconCart}
                title={uppercasename} />
            {subcate.listSubCategory && subcate.listSubCategory.length > 0 ? (
                <FlatList
                    data={dataWithAll}
                    horizontal={true}
                    style={styles.categoryContainer}
                    renderItem={renderCategory}
                />
            ) : (
                <Text>No subcategories found.</Text>
            )}
            {products.productList ? (<View><SectionView data={products.productList} /></View>) : (<View></View>)}

        </View>
    )
}

export default ProductPortfolio;

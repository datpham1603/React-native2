import { FlatList, Text, TouchableOpacity, View } from "react-native";
import HeaderApp from "../components/header/HeaderApp";
import styles from "../theme/ProductPortfolio.styyle";
import { fetchSubcate } from "../redux/slice/productPortfolio.slice";
import { useEffect, useState } from "react";
import { fetchProduct } from "../redux/slice/product.slice";
import { useDispatch, useSelector } from "react-redux";
import SectionView from "../components/sectionView/sectionView";

const ProductPortfolio = ({route }) => {

    const [selectedItem, setSelectedItem] = useState();
    const [idcate, setIdcate] = useState('660836fda96bdf21f523f4c1');
    const dispatch = useDispatch();
    const { subcate } = useSelector(state => state.reducer.productPortfolio);
    const { products } = useSelector(state => state.reducer.product);
    const { categoryData } = route.params;
    const uppercasename = categoryData.name.toUpperCase();
    const iconback = require('../../assets/images/arrowleft.png');
    const iconCart = require('../../assets/images/shopping-cart.png');
    const parent_id = categoryData.id;
    console.log(parent_id);

    useEffect(() => {
        dispatch(fetchSubcate(parent_id));
    }, [parent_id, dispatch]);

    useEffect(() => {
        switch (uppercasename) {
            case 'CÂY TRỒNG':
                dispatch(fetchProduct(idcate));
                break;

            case 'CHẬU CÂY TRỒNG':
                dispatch(fetchProduct(parent_id));
                break;

            case 'DỤNG CỤ':
                dispatch(fetchProduct(parent_id))
                break;
        }

    }, [idcate, dispatch]);

    const handleCateItemPress = (item) => {
        setSelectedItem(item);
        setIdcate(item._id);
    };

    const renderCategory = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleCateItemPress(item)}>
                <View style={[styles.category, { backgroundColor: selectedItem === item ? '#009245' : 'transparent' }]}>
                    <Text style={{ color: selectedItem === item ? 'white' : '#7D7B7B' }}>{item.name_category}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const renderView = (namecate) => {
        switch (namecate) {
            case 'CÂY TRỒNG':
                return (
                    <View>
                        {subcate.listSubCategory && subcate.listSubCategory.length > 0 ? (
                            <FlatList
                                data={subcate.listSubCategory}
                                horizontal={true}
                                style={styles.categoryContainer}
                                renderItem={renderCategory}
                            />
                        ) : (
                            <View>
                                <Text>No subcategories found.</Text>
                            </View>
                        )}
                        {products.productList ? (
                            <View>
                                <SectionView data={products.productList} />
                            </View>
                        ) : (
                            <View>
                                <Text>Hiện không có sản phẩm</Text>
                            </View>
                        )}
                    </View>
                );
            case 'CHẬU CÂY TRỒNG':
                return (
                    <View>
                        {products.productList ? (
                            <View>
                                <SectionView data={products.productList} />
                            </View>
                        ) : (
                            <View>
                                <Text>Hiện không có sản phẩm</Text>
                            </View>
                        )}
                    </View>
                );
            case 'DỤNG CỤ': {
                return (
                    <View>
                        {products.productList ? (
                            <View>
                                <SectionView data={products.productList} />
                            </View>
                        ) : (
                            <View>
                                <Text>Hiện không có sản phẩm</Text>
                            </View>
                        )}
                    </View>
                );
            }
            default:
                return null;
        }

    };

    return (
        <View>
            <HeaderApp
                image1={iconback}
                image2={iconCart}
                title={uppercasename}
            />
            {renderView(uppercasename)}
        </View>
    );
};

export default ProductPortfolio;

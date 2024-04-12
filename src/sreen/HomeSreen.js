import { fetchCategory } from "../redux/slice/category.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pages, handlePageTransition } from "../navigation/app.navigation";
import { ScrollView, StatusBar, Text, View, TouchableOpacity } from "react-native";
import styles from "../theme/HomeStyle"
import HeaderHome from "../components/header/HeaderHome"
import SkeletonLoader from "../components/anim/skeleton";
import SectionView from "../components/sectionView/sectionView";
const imageBackground = require('../../assets/images/header.png');
const iconCart = require('../../assets/images/shopping-cart.png');
const TITLE = `Tỏa sáng không gian nhà của bạn `;

const HomeSreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const { categories, loading } = useSelector((state) => state.reducer.category);

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);


    const handleItemProduct = (item) => {
        handlePageTransition(navigation, pages.productdetail,
            {item});
    }
    const renderCategories = categories => {
        if (!categories || categories.length === 0) {
            return <Text>Không có danh mục nào.</Text>;
        }
        return categories.map(category => {
            return (
                <View key={category.categoryName}>
                    <Text style={styles.textCaytrong}>{category.categoryName}</Text>
                    {renderProducts(category.listProduct)}
                    <TouchableOpacity
                        onPress={() => handlePageTransition(navigation, pages.productport,
                            { name: category.categoryName, id: category.categoryId })}
                        style={styles.moreContainer}>
                        <Text style={styles.textmore}> xem thêm {category.categoryName} </Text>
                    </TouchableOpacity>
                </View>
            )
        });
    };

    const renderProducts = (products) => {
        if (products.length === 0) {
            return <Text>Không có sản phẩm trong danh mục này.</Text>;
        }
        return (
            <View>
                <SectionView onPress={handleItemProduct} data={products} />
            </View>
        );
    }

    return (
        <ScrollView>
            <StatusBar backgroundColor="transparent" />
            <HeaderHome
                title={TITLE}
                iconCart={iconCart}
                imageBackground={imageBackground}
                handlePressCart={() => handlePageTransition(navigation, pages.cart)}
            />
            <View>
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    renderCategories(categories.listProduct)
                )}
            </View>
        </ScrollView>
    )
}

export default HomeSreen



import { View, Image, Text, TouchableOpacity } from "react-native"
import styles from "../../theme/SectionViewstyle"
const SectionView = ({ data, onPress }) => {

    const getNameCate = (id) => {
        console.log(id)
        if (id === '66084c3b3699af984059f988') {
            return 'ưu tối'
        }
        if (id === '66084cadcfb0870abaee2917') {
            return 'ưu sáng'
        }
        if (id === '660836fda96bdf21f523f4c1') {
            return 'ưu bóng'
        }
        return ''
    }

    const rederItemTree = (data) => {
        return data.map((item, index) => (
            <View
                key={index}
                style={styles.itemcontainer}>

                <TouchableOpacity onPress={()=>onPress(item)}>
                    <Image style={styles.itemimage} source={{ uri: item.images[0] }} />
                    <Text style={styles.nameProduct}>{item.name}</Text>
                    {getNameCate === '' ? (<View></View>) : (<Text style={styles.description}>{getNameCate(item.category_id)}</Text>)}

                    <Text style={styles.price}>{item.price}</Text>
                </TouchableOpacity>
            </View>
        ))
    }
    return (
        <View style={styles.layoutItem}>
            {rederItemTree(data)}
        </View>
    )
}

export default SectionView
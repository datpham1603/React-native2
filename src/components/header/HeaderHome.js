import { View, TouchableOpacity, Image, Text, ImageBackground } from "react-native"
import { memo } from "react"
import styles from "../themes/headerHome.style"
const HeaderHome = ({
    imageBackground,
    title,
    iconCart,
    handlePressCart
}) => {
    return (
        <View style={styles.flextop}>
            <View
                style={styles.imagecontainer}>
                <TouchableOpacity
                    onPress={handlePressCart}>
                    <Image source={iconCart} />
                </TouchableOpacity>
            </View>

            <ImageBackground
                style={styles.imageBackground}
                source={imageBackground}>
                <Text style={styles.title}> {title}</Text>
                <Text style={styles.textdetail}> Xem hàng mới về </Text>
            </ImageBackground>
        </View>
    )
}

export default memo(HeaderHome)
import { Image, Text, View } from "react-native"
import styles from "../themes/HeaderApp.style"
import { memo } from "react"

const HeaderApp = ({ image1, title = '', image2 }) => {
    console.log('r render')
    return (
        <View style={styles.headerContainer}>
            <View>
                {image1 && <Image style={styles.img} source={image1} />}
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.imgcontainer}>
                {image2 && <Image style={styles.img} source={image2} />}
            </View>

        </View>
    )
}
export default memo(HeaderApp)
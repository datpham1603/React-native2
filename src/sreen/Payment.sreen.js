import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native"
import HeaderApp from "../components/header/HeaderApp"
import styles from "../theme/payment.style"
const PaymentScreen = () => {
    return (
        <>
            {/* header */}
            <StatusBar backgroundColor={'transparent'} />
            <HeaderApp
                title="THANH TOÁN"
                image1={require('../../assets/images/arrowleft.png')}
            />
            {/** content */}
            <ScrollView>
                <View
                    style={styles.inforContainer}>
                    <Text style={styles.textPayment}>Thông tin khách hàng</Text>
                    <View style={styles.tipContainer}>
                        <TextInput style={styles.texttip} placeholder="datpt@gmail.com" />
                    </View>
                    <View style={styles.tipContainer}>
                        <TextInput style={styles.texttip} placeholder="datpt@gmail.com" />
                    </View>
                    <View style={styles.tipContainer}>
                        <TextInput style={styles.texttip} placeholder="datpt@gmail.com" />
                    </View>
                </View>
            </ScrollView>


        </>
    )
}

export default PaymentScreen
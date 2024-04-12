import { Image, ImageBackground, StatusBar, Text, View } from "react-native"
import styles from "./themes/signUp_style"
import CustomTextInput from "../../components/textinput/custom_textinput"
import CustomButton from "../../components/button/customButton"
import HorizontoLine from "../../components/Line/horizontalLine"
import { useState } from "react"
import { useDispatch } from 'react-redux';
import {fetchUser }from '../../redux/slice/authen'

const SignUp = ({navigation}) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch();
 
    const handleOnPress = () => {
        dispatch(fetchUser({userName:name,passWord:password,phoneNumber:phoneNumber,email:email}))
    }
    const handleSignIn=()=> navigation.navigate('signin')
    
    return (

        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />

            <View style={styles.header}>
                <ImageBackground
                    style={styles.img}
                    source={require('../../../assets/images/img.png')} />
            </View>

            <View
                style={styles.contend}>
                <Text style={styles.text}>Đăng Kí</Text>
                <Text style={styles.text1}>Tạo tài khoản</Text>

                <View style={styles.textinputContainer}>
                    <CustomTextInput
                        value={name}
                        onChangeText={(text) => { setName(text) }}
                        placeholder={'Họ Tên'}
                    />
                    <CustomTextInput
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
                        placeholder={'E-Email'} />
                    <CustomTextInput
                        value={phoneNumber}
                        onChangeText={(text) => { setPhoneNumber(text) }}
                        placeholder={'Số Điện Thoại'} />
                    <CustomTextInput
                        value={password}
                        image={require('../../../assets/images/ant-design_eye-invisible-filled.png')}
                        onChangeText={(text) => { setPassword(text) }}
                        placeholder={'Mật khẩu'} />
                </View>
                <View style={styles.policy}>
                    <Text >Để đăng kí tài khoản ,bạn đồng ý
                        <Text>Term & Conditions <Text>and</Text> Privacy Policy</Text></Text>
                </View>

                <CustomButton onPress={handleOnPress} title={'Đăng Kí'} />

                <View style={styles.flex}>
                    <HorizontoLine color={'#4CAF50'} width={120} height={1} />
                    <Text style={styles.text2}> Hoặc </Text>
                    <HorizontoLine color={'#4CAF50'} width={120} height={1} />
                </View>

                <View style={styles.flex2}>
                    <Image style={styles.google} source={require('../../../assets/images/google.png')} />
                    <Image style={styles.facebook} source={require('../../../assets/images/facebook.png')} />
                </View>

                <View style={styles.flex3}>
                    <Text> Tôi đã có tài khoản  </Text>
                    <Text onPress={handleSignIn} style={styles.texttaotaikhoan}> Đăng nhập </Text>
                </View>


            </View>

        </View>
    )
}

export default SignUp
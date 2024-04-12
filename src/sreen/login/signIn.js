import { Image, ImageBackground, StatusBar, Text, View } from "react-native"
import styles from "./themes/signIn_style"
import CustomTextInput from "../../components/textinput/custom_textinput"
import CustomButton from "../../components/button/customButton"
import HorizontoLine from "../../components/Line/horizontalLine"
import { login } from "../../redux/slice/signin"
import { tlr } from "../../contants/dimension"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"


const SignIn = ({ navigation }) => {

    const [userName, setUserName] = useState('')
    const [passWord, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.reducer.sign);
    console.log(user)

    const handleBtn = async () => {
        if (userName === '' || passWord === '') {
            setErrorMessage('Please enter your username and password');
        } else {
            const response = await dispatch(login({ userName, passWord }));
            if (response.payload.user) {
                navigation.navigate('tab');
            } else {
                setErrorMessage('Incorrect username or password');
            }
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
                style={styles.background}
                resizeMode="cover"
                source={require('../../../assets/images/imgf.png')}>
                <View style={styles.backct}>
                    <Image source={require('../../../assets/images/ep_arrow-right-bold.png')} />
                </View>
            </ImageBackground>
            <View style={styles.contend} >
                <Text style={styles.text}> Chào mừng bạn </Text>
                <Text style={styles.dn}> Đăng nhập tài khoản  </Text>
                <View style={{ width: '100%' }}>
                    <CustomTextInput
                        value={userName}
                        onChangeText={(t) => setUserName(t)}
                        placeholder={'Username'} />
                    <CustomTextInput
                        value={passWord}
                        image={require('../../../assets/images/ant-design_eye-invisible-filled.png')}
                        onChangeText={(t) => setPassword(t)}
                        placeholder={'Password'} />
                </View>
                <View style={{ width: '100%', alignItems: 'flex-start' }}>
                    <Text style={styles.errtext}> {errorMessage} </Text>
                </View>

                <View style={styles.flex}>
                    <View style={styles.flex1}>
                        <Image style={styles.remember} source={require('../../../assets/images/ri_checkbox-circle-line.png')} />
                        <Text style={styles.nhotaikhoan}>Nhớ tài khoản </Text>
                    </View>
                    <Text style={styles.texttao}>Forgot Password?</Text>
                </View>
                <CustomButton onPress={handleBtn} title={'Đăng nhập'} />

                <View style={styles.flex4}>
                    <HorizontoLine color={'#4CAF50'} width={120 * tlr} height={1} />
                    <Text style={styles.text2}> Hoặc </Text>
                    <HorizontoLine color={'#4CAF50'} width={120 * tlr} height={1} />
                </View>
                <View style={styles.flex2}>
                    <Image style={styles.google} source={require('../../../assets/images/google.png')} />
                    <Image style={styles.facebook} source={require('../../../assets/images/facebook.png')} />
                </View>
                <View style={styles.flex5}>
                    <Text style={styles.text7}> Bạn không có tài khoản </Text>
                    <Text style={styles.texttao}>  Tạo tài khoản?</Text>
                </View>
            </View>

        </View>
    )
}

export default SignIn
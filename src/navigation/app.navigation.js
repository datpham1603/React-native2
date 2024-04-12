import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSreen from '../sreen/HomeSreen';
import TabNavigation from './tab.navigation';
import SignUp from '../sreen/login/signUp';
import SignIn from '../sreen/login/signIn';
import CartSreen from '../sreen/Cart.sreen';
import ProductDetail from '../sreen/ProductDetail';
import ProductPortfolio from '../sreen/ProductPortfolio';
const AppNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='signup' component={SignUp}/>
                <Stack.Screen name='signin' component={SignIn}/>
                <Stack.Screen name="home" component={HomeSreen} />
                <Stack.Screen name="tab" component={TabNavigation} />
                <Stack.Screen name="cart" component={CartSreen} />
                <Stack.Screen name="productdetail" component={ProductDetail} />
                <Stack.Screen name="productport" component={ProductPortfolio} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export const pages = {
    cart: 'cart',
    deitail: 'detail',
    productport:'productport',
    productdetail:'productdetail'
}
export const handlePageTransition = (navigation,page,categoryData) => {
    console.log(categoryData)
    navigation.navigate(page,{categoryData});
}
export default AppNavigation
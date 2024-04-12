import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import HomeSreen from '../sreen/HomeSreen';
import InformSreen from '../sreen/Inform';
import SearchSreen from '../sreen/Search.sreen';
import ProfileSreen from '../sreen/ProfileSreen';
import { Dimensions, Image } from "react-native";

// Lấy kích thước của thiết bị hiện tại
const { width, height } = Dimensions.get('window');
const tlr = width / 373
const tlh = height / 734

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false, tabBarStyle: {
                    height: 60 * tlh
                },
                tabBarShowLabel: false
            }}>
            <Tab.Screen
                name="Home"
                component={HomeSreen}
                options={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={require('../../assets/images/home.png')}
                            style={{ width: size, height: size }}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Search"
                component={SearchSreen}
                options={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={require('../../assets/images/search.png')}
                            style={{ width: size, height: size }}
                        />
                    ),
                })}/>
            <Tab.Screen
                name="inform"
                component={InformSreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={require('../../assets/images/Vector.png')}
                            style={{ width: size, height: size }}
                        />
                    ),
                }} />
            <Tab.Screen
                name="profile"
                component={ProfileSreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={require('../../assets/images/user.png')}
                            style={{ width: size, height: size }}
                        />
                    ),
                }} />

        </Tab.Navigator>
    )
}

export default TabNavigation
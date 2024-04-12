/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import ProductDetail from './src/sreen/ProductDetail';
import HomeSreen from './src/sreen/HomeSreen';
import store from './src/redux/store';
import SignIn from './src/sreen/login/signIn';
import SignUp from './src/sreen/login/signUp';
import AppNavigation from './src/navigation/app.navigation';

import CartSreen from './src/sreen/Cart.sreen';
import HeaderApp from './src/components/header/HeaderApp';
import Payment from './src/sreen/Payment.sreen';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>

  )
}



export default App;

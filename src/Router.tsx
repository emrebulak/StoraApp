import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Pages
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Products} options={{headerShown:false}}/>
        <Stack.Screen name="ProductDetailPage" component={ProductDetail} options={{headerTitle:''}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;
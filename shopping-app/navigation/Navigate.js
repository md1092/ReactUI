import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../screens/HomePage";
import Category from "../screens/Category";
import Product from "../screens/Product";
import Cart from "../screens/Cart";
import Payment from "../screens/Payment";
import OrderConfirmation from "../screens/OrderConfirmation";
import { Platform } from "react-native";


const Stack = createNativeStackNavigator();
export default function Navigator(props) {
    return(
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
              headerStyle: {
              backgroundColor: '#add8e6',
              },
              headerTitleAlign:"center",
              headerTintColor: "black",
              headerTitleStyle: {
               fontSize:25,
               fontFamily:"Redressed-Regular"
              },
              }} 
             initialRouteName="HomePage"
              >
                <Stack.Screen name="HomePage" component={HomePage}
                 options={{
                 title: "HomePage"
                 }} 
                 />
                <Stack.Screen name="Category" component={Category}
                 options={({ route }) => ({ title: route.params.categoryName})} />
                <Stack.Screen name="Product" component={Product}
                  options={({ route }) => ({ title: route.params.productName})} />
                 <Stack.Screen name="Cart" component={Cart}/> 
                 <Stack.Screen name="Payment" component={Payment}/>
                <Stack.Screen name="Order Confirmation" component={OrderConfirmation}/>  
            </Stack.Navigator>
        </NavigationContainer>
    )
}
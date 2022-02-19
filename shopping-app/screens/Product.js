import React from 'react';
import { View, Text, ScrollView,Image,TouchableOpacity } from "react-native";
import styles from '../assets/style';
import {Products} from "../data/dummy-data";
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons'; 
import CartProduct from '../models/CartProduct';
import { CartProducts,totals } from '../data/cartData';

export default function Product({navigation,route}){

    const {productId} = route.params;
    const Product=Products.find(product => product.id === productId);

 
    const addToCart=(product)=>{
        let temp=new CartProduct(product.id,product.title,product.imageUrl,product.total);
        let price=product.total;
        price=(Number)(price)
        CartProducts.push(temp);
        totals.push(price);
        console.log(totals);
    }
    
   
     
return(
    <ScrollView style={{backgroundColor:'#fff'}}>
        <Image source={{uri: Product.imageUrl}} style={styles.image}/>
        <View style={styles.infoContainer}>
        <Text style={styles.info}>{Product.description}</Text>
        </View>
        <View style={styles.infoContainer}>
        <Text style={styles.info}>Size: {Product.size}</Text>
        </View>
        <View style={styles.infoContainer}>
        <Text style={styles.info}>Price: {Product.price}$</Text>
        </View>
       
        <View style={styles.infoContainer}>
        <Text style={styles.info}>Shipping: {Product.delivery}$</Text>
        </View>
    
        <View style={styles.infoContainer}>
        <Text style={styles.info}>Final Price: {Product.total}$</Text>
        </View>
        <View style={styles.infoContainer}>
        <Text style={styles.info}> Reviews({Product.reviews})</Text>
        </View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.Button} onPress={()=>addToCart(Product)}>
            <Text style={styles.buttonTxt}>Add To Cart
            <Icon name="cart" style={styles.buttonTxt} />
            </Text>
           
        </TouchableOpacity> 
        <TouchableOpacity style={styles.Button} onPress={ ()=> {navigation.navigate("Cart",{cart:CartProducts,total:totals})}}>
            <Text style={styles.buttonTxt}>Go To Cart
            <Icon name="cart" style={styles.buttonTxt} />
            </Text>
        </TouchableOpacity> 
        </View>
    </ScrollView>
);}



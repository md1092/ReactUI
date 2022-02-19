import React,{useState} from 'react';
import { FlatList, Text, View,Image, TouchableOpacity,TextInput } from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons'; 
import styles from '../assets/style';



export default function Cart({navigation,route}){
   const {cart}=route.params;
   const {total}=route.params;
   const[discountCoupon,setDiscountCoupon]=useState("");

    let price=0;
    for (const item of total) {
        price=price+item;
    }
    let temp=price
    const checkCoupon=(coupon)=>{
        if(coupon==="Birthday"){
          temp=price-(price*(10/100))
        }
        else  if(coupon==="Ram"){
            temp=price-(price*(30/100))
        }
        else  if(coupon==="Mycoupon"){
            temp=price-(price*(50/100))
        }
        return temp;

    }
    return(
    <View style={styles.cart2}>
      <FlatList
      data={cart}
      renderItem={({item})=>(
          <View style={styles.cart1}> 
              <Image source={{uri: item.imageUrl}} style={styles.cartImage}/>
          <View style={styles.cart2}>
          <Text style={styles.title}>{item.title} </Text> 
          <Text style={styles.title}>{item.description} </Text> 
          <Text style={styles.title}>{item.total}$ </Text> 
          </View>
          </View>
      )}
      keyExtractor={item => item.id}
      />
      <View style={styles.CartContainer}>
      <Text style={styles.info}>total Before Discount:{price}$  </Text> 
      <View style={styles.inputContainer}>
      <Text style={styles.inputText}>coupon: </Text>
      <TextInput
      style={styles.input}
      placeholder='Enter a coupon'
      onChangeText={(txt) => setDiscountCoupon(txt)}
      />
      </View>
      <Text style={styles.info}>total After Discount
      <Icon name="ticket-percent-outline" style={styles.info} />
      :{checkCoupon(discountCoupon)}$
      </Text>
      <TouchableOpacity style={styles.Button} onPress={()=> {navigation.navigate("Payment")}}>
      <Text style={styles.buttonTxt}>Buy Now  
      <Icon name="cash-multiple" style={styles.buttonTxt} />
      </Text>
      </TouchableOpacity>
      </View>
      </View>
    
    
    );
}
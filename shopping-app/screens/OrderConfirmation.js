import React from 'react';
import styles from '../assets/style';
import {Text, View,TouchableOpacity} from 'react-native';


export default function OrderConfirmation({navigation}){
     return(
           <View style={styles.container3}> 
           <Text style={styles.title}>Your order was confirmed succecfully </Text> 
           <TouchableOpacity style={styles.Button} onPress={ ()=> {navigation.navigate("HomePage")}}>
           <Text style={styles.buttonTxt}>Countinue Shopping</Text>
           </TouchableOpacity> 
           </View>
     );
 }
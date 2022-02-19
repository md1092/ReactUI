import React,{ useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from '../assets/style';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons'; 



export default function Payment({navigation}){

    const[isValid,setIsValid]=useState(true);

    const checkValidation=(txt)=>{
        if(txt===" ")
             setIsValid(false);
        else
        setIsValid(true);

    }

    const Purchase=()=>{
        if(isValid===true)
         return navigation.navigate("Order Confirmation");
        else
         alert("you have to fiil all the data")
    }
     return(
        <View style={styles.CartContainer}>
            <View style={styles.container2}>
            <Text style={styles.inputTitle}> Enter your personal info</Text>
            <View style={styles.inputContainer}>
            <Text style={styles.inputText}>First Name: </Text>
            <TextInput
            style={styles.nameInput}
            placeholder="    First Name"
            onChangeText={(txt) => checkValidation(txt)}
            />
           </View>
           <View style={styles.inputContainer}>
           <Text style={styles.inputText}>Last Name: </Text>
            <TextInput
            style={styles.nameInput}
            placeholder="    Last Name"
            onChangeText={(txt) => checkValidation(txt)}
            />
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email
            <Icon name="email-outline" style={styles.inputText} />:
            </Text>
            <TextInput
            style={styles.nameInput}
            placeholder="    email"
            onChangeText={(txt) => checkValidation(txt)}
            />
            <Text style={styles.inputText}>@gmail.com</Text>
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Phone Number
            <Icon name="cellphone" style={styles.inputText} />:
            </Text>
            <TextInput
            style={styles.nameInput}
            keyboardType="numeric"
            placeholder="    Phone Number"
            onChangeText={(txt) => checkValidation(txt)}
            />
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Country: </Text>
            <TextInput
            style={styles.nameInput}
            placeholder="    Country"
            onChangeText={(txt) => checkValidation(txt)}
            />
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.inputText}>City: </Text>
            <TextInput
            style={styles.nameInput}
            placeholder="    City"
            onChangeText={(txt) => checkValidation(txt)}
            />
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Address: </Text>
            <TextInput
            style={styles.nameInput}
            placeholder="    Address"
            onChangeText={(txt) => checkValidation(txt)}
            />
            </View>
            </View>
            <View style={styles.container2}>
            <Text style={styles.inputTitle}> 
            <Icon name="credit-card-outline" style={styles.inputText} />
            Enter your payment info
            <Icon name="credit-card-outline" style={styles.inputText} />
            </Text>
            <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Credit Card Owner Name: </Text>
            <TextInput
            style={styles.nameInput}
            placeholder="      owner name"
            onChangeText={(txt) => checkValidation(txt)}
            />
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Credit Card Number: </Text> 
            <TextInput
            keyboardType='numeric'
            style={styles.nameInput}
            placeholder="     0000 0000 0000 0000"
            onChangeText={(txt) => checkValidation(txt)}
            />
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Expire Date: </Text>
            <TextInput
            keyboardType='numeric'
            style={styles.nameInput}
            placeholder="      00/00"
            onChangeText={(txt) => checkValidation(txt)}
            />
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.inputText}>CCV: </Text>
            <TextInput
            keyboardType='numeric'
            style={styles.nameInput}
            placeholder="     000"
            onChangeText={(txt) => checkValidation(txt)}
            />
            </View>
            </View> 
            <TouchableOpacity style={styles.Button} onPress={()=>{Purchase()}}>
            <Text style={styles.buttonTxt}> Purchase
            <Icon name="cash-multiple" style={styles.buttonTxt} />
            </Text>
            </TouchableOpacity>           
        </View>
     );
 }
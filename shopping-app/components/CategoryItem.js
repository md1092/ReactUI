import React from "react";
import styles from "../assets/style";
import { View,Text,TouchableOpacity,ImageBackground} from "react-native";


const CategoryItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelectProduct} style={styles.container}>
        <View style={styles.productItem}>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
          <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {props.title}           price:{props.price}$
              </Text>
            </View>
          </ImageBackground>
        </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
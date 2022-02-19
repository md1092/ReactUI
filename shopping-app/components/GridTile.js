import React from "react";
import styles from '../assets/style';
import { View, Text,TouchableOpacity,ImageBackground } from "react-native";

const GridTile = (props) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
        <ImageBackground source={{uri: props.url}} style={styles.bgImage}>
        </ImageBackground>
        <View>
        <Text style={styles.title}>{props.title}</Text>
        </View>
    </TouchableOpacity>
    </View>
  );
};
export default GridTile;

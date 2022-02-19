import React from 'react';
import { FlatList, View,Text} from 'react-native';
import {Products } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";
import styles from '../assets/style';


const Category = ({ route,navigation }) => {
    const { categoryId } = route.params;
    const displayedProducts = Products.filter(product => product.categoryId.indexOf(categoryId) >= 0);
    
    const renderProductItem=({ item }) =>{
        return(
         <CategoryItem
            title={item.title}
            price={item.price}
            image={item.imageUrl}
            onSelectProduct={() =>{
                navigation.navigate("Product",{productId: item.id,
                    productName: item.title });
            }}/>
        );
    }
    return(
   <View style={styles.cart2}>
    <Text style={styles.title}>4 Products</Text>
   <FlatList
   data={displayedProducts}
   keyExtractor={item => item.id}
   renderItem={renderProductItem}
   numColumns={2}
   />
  
   </View>
    );
  };
  
  export default Category;
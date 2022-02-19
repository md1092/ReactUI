import React from 'react';
import { FlatList } from 'react-native';
import {Categories} from "../data/dummy-data";
import GridTile from "../components/GridTile";

const HomePage = ({ navigation }) => {
    const renderGridItem = ({ item }) => {
      return (
        <GridTile
          title={item.title}
          url={item.imageUrl}
          onSelect={() => {
            navigation.navigate("Category", {
              categoryId: item.id,
              categoryName: item.title,
            });
          }}
        />
      );
    };
    return (
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={Categories}
        renderItem={renderGridItem}
        numColumns={2}
      />
    );
  };
  
  export default HomePage;
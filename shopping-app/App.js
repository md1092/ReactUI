import React,{useState} from "react";
import * as Font from "expo-font"
import AppLoading from "expo-app-loading";
import Navigate from "./navigation/Navigate";

const fetchFonts=()=>{
Font.loadAsync({
  "Redressed-Regular":require("./assets/fonts/Redressed-Regular.ttf")
});
};

export default function App() {

  const [dataloaded,serDataLoaded]=useState(false);

  if(!dataloaded){
    return(
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() => serDataLoaded(true)}
      onError={ err => console.log(err)}
      />
 
    );
  }
  return (
  <Navigate/>
  );
}

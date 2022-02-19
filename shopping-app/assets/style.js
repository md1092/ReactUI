import  { NativeModules, StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:"center",
      flexDirection: "row"
    },
    gridItem: {
      margin: 15,
      width:200,
      height: 230,
      shadowColor: "black",
      shadowOpacity: 0.8,
      shadowOffset: { width:0, height: 3 },
      shadowRadius: 10,
      elevation: 3, 
      marginBottom:35,
      },
      productItem:{
      height:400,
      width:"100%",
      padding:10,
      },
      title: {
        fontSize: 22,
        fontFamily:"Redressed-Regular",
      },
      bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
      },
      titleContainer: {
        backgroundColor: "#add8e6",
        paddingVertical: 5,
        paddingHorizontal: 12,
      },
      image: {
        width: "100%",
        height: 400,
      },
      info:{
        fontSize: 24,
        fontFamily:"Redressed-Regular",
        marginBottom:10,
        textAlignVertical:"center",
        padding:10,
      },
      Button:{
        backgroundColor:"#add8e6",
        borderRadius:60,
        borderColor:"#add8e6",
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:"center",       
        height:40,
        width:155,
        marginBottom:10,
        marginRight:10,
        flexDirection: "row",
      },
      buttonTxt:{
        fontFamily:"Redressed-Regular",
        fontSize:20
      },
      infoContainer:{
        backgroundColor: '#fff',
        borderBottomColor:"#add8e6",
        borderBottomWidth:2,
        marginBottom:10,
        alignItems:"center"
      },
      cartImage:{
        height:100,
        width:100,
        marginRight:10
      },
      cart1:{
        flex: 1,
        flexDirection: "row",
        marginBottom:10,
        backgroundColor: '#fff',
      },
      cart2:{
        flex: 1,
        backgroundColor: '#fff',
      },
      icon:{
        fontSize:10
      },
      CartContainer:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent:"center",
      },
      input: {
        borderColor: "#add8e6",
        borderBottomWidth: 1.5,
        height:30,
        width:"40%",
        marginBottom:10,
        fontFamily:"Redressed-Regular",
        alignContent:"center"

      },
      inputContainer:{
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent:"center",
        flexDirection:"row"
      },
      container2:{
        alignItems: 'center',
        alignContent:"center",
        backgroundColor: '#fff',
        borderBottomColor:"#add8e6",
        borderStyle:"dashed",
        borderBottomWidth:1.5,
        margin:10
      },
      nameInput:{
        borderColor: "#add8e6",
        borderWidth: 1.5,
        borderRadius:60,
        height:30,
        width: "40%",
        fontFamily:"Redressed-Regular",
        fontSize:18,
        margin:5
      },
      inputText:{
        fontFamily:"Redressed-Regular",
        fontSize:22,
      },
      inputTitle:{
        fontFamily:"Redressed-Regular",
        fontSize:25,
        margin:3,
      },
      container3:{
        flex:1,
        alignItems: 'center',
        alignContent:"center",
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderColor:"#add8e6",
        borderStyle:"dashed",
        borderWidth:1.5,
        
      },
  });

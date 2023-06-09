import React, { useState ,useEffect} from "react";
import {Image,ScrollView,View,Text,TouchableOpacity,StyleSheet, ActivityIndicator} from "react-native";
import axios from "axios";

const Home = (props) => {
  const [categories,setCategories] = useState([]);
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then((response)=>{
        // console.log(response.data)
        setCategories(response.data);
    })
    .catch(error=>console.log(error.message))
},[]);
useEffect(()=>{
  axios.get('https://fakestoreapi.com/products')
  .then((response)=>{
      // console.log(response.data);
      // const products = response.data;

      setProducts(response.data);
  })
  .catch(error=>console.log(error.message))
},[]);

  return(
  <View style={ styles.container }>
    <View style={styles.containerCategory}>
      <View style={styles.title}>
        <Text style={styles.textTitleLeft}>Categories</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Categories")}>
          <Text style={styles.textTitleRight}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
          horizontal={true}
      >
        {categories?categories.slice(0,3).map((category,index)=><View key={index} style={styles.category}>
          <TouchableOpacity>
            <Text>{category}</Text>
          </TouchableOpacity>
        </View>):<ActivityIndicator/>}
      </ScrollView>
    </View>
    <View style={styles.containerProduct}>
      <View style={styles.title}>
        <Text style={styles.textTitleLeft}>Products</Text>
        <TouchableOpacity  onPress={()=>props.navigation.navigate("Products")}>
          <Text style={styles.textTitleRight} >See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {products.slice(0,5).map((product,index)=><View key={index} style={styles.product}>
          <View>
            <Image style={styles.productImage} source={{uri:product.image}}/>
          </View>
          <View style={styles.containerMiddle}>
            <Text numberOfLines={1} >{product.title}</Text>
            <Text>{product.category}</Text>
            <Text>{product.price}</Text>
          </View>
          <View >
            <View style={styles.containerLeftStarImage}>
              <Image style={styles.starImage} source={require('../assets/images/star.png')}/>
              <Text>{product.rating.rate}</Text>
            </View>
            <TouchableOpacity style={styles.btnBuy} onPress={()=>props.navigation.navigate('Product')}>
              <Text style={styles.buyBtnText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>)}
      </ScrollView>
    </View>
  </View>
  )  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10

  },
  containerCategory: {
      flex:.25
  },
  title: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  textTitleLeft: {
    fontSize:25,
    fontWeight:'500'
  },
  textTitleRight:{
    fontSize:18,
    color:'#FD5606'
  },
  category:{
    width:108,
    height:106,
    margin:6,
    borderRadius:6,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },
  containerProduct:{
    flex:.75
  },
  product:{
    width:352,
    height: 89,
    backgroundColor:'white',
    borderRadius:10,
    margin:10,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },

  productImage:{
    width:45,
    height:64
  },
  containerMiddle:{
    width:163
  },
  containerLeftStarImage:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginBottom:5,
  },
  starImage:{
    width:13,
    height:13
  },
  btnBuy:{
    paddingHorizontal:10,
    backgroundColor:'#FD5606',
    paddingVertical:6,
    borderRadius:3,
  },
  buyBtnText:{
    fontWeight:'600',
    fontSize:12,
    color:'white'
}
});

export default Home;

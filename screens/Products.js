import React, { useEffect, useState } from "react";
import { View,Text ,StyleSheet, TouchableOpacity,Image, FlatList} from "react-native";
import axios from "axios";

function Product(props){
    return(
        <View style={styles.productItem} >
            <Image style={styles.productImage} source={{ uri:props.item.image }} />
            
            <Text numberOfLines={1} >{props.item.title}</Text>
            <Text  style={{ color:'#8C8FA5' }}>{props.item.category}</Text>
            <View style={styles.productPrice}>
               <Text style={{ marginRight:8 }} >{props.item.price}</Text>
                
                <Image style={{width:15,height:15}} source={require('./../assets/images/star.png')}/>
                <Text  >{props.item.rating.rate}</Text>
            </View>
            <TouchableOpacity style={styles.buyBtn} onPress={()=>props.navigation.navigate('Product')}>
                <Text style={styles.buyBtnText}>Buy Now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default function Products(props){
    const [products ,setProducts] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            // console.log(response.data);
            setProducts(response.data);
        })
        .catch(error=>console.log(error.message))
    },[]);
    return <FlatList
        data={products}
        keyExtractor={(item,index)=>item.id+index}
        numColumns={2}
        renderItem={(itemProps)=><Product
            {...itemProps} 
            navigation={props.navigation}
        />}
    />
    // return <View>
    //     <ScrollView style={styles.productList} >
    //             {products.map((product,index)=>
    //             <View style={styles.productItem}   key={index}>
    //                 <Image style={styles.productImage} source={{ uri:product.image }} />
                    
    //                 <Text  >{product.title}</Text>
    //                 <Text  >{product.category}</Text>
    //                 <View style={styles.productPrice}>
    //                     <Text  >{product.price}</Text>
    //                     <Text  >{product.rating.rate}</Text>
    //                 </View>
    //                 <TouchableOpacity onPress={()=>handle}>
    //                     <Text>Buy Now</Text>
    //                 </TouchableOpacity>
    //             </View>)}
    //     </ScrollView>
    // </View>
}

const styles = StyleSheet.create({

    productItem:{
        backgroundColor:'white',
        padding:10,
        width:150,
        margin:15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    
    },
    productImage:{
        width:50,
        height: 80,
    },
    productPrice:{
        flexDirection:'row',
        marginVertical:8
    },
    buyBtn:{
        paddingHorizontal:20,
        backgroundColor:'#FD5606',
        paddingVertical:6,
        borderRadius:8,
        
    },
    buyBtnText:{
        fontWeight:'500',
        color:'white'
    }
});
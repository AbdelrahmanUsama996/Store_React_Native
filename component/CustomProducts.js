import React from 'react';
import { View,Text ,StyleSheet, TouchableOpacity,Image} from "react-native";




export default function Product(props){
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
            <TouchableOpacity style={styles.buyBtn}  onPress={()=>props.navigation}>
                <Text style={styles.buyBtnText}>Buy Now</Text>
            </TouchableOpacity>
        </View>
    )
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

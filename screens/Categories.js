import React, { useEffect, useState } from "react";
import { FlatList, } from "react-native";
import axios from "axios";
import Category from '../component/Category';


export default function Categories(){
    const [categories ,setCategories] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then((response)=>{
            // console.log(response.data)
            setCategories(response.data);
        })
        .catch(error=>console.log(error.message))
    },[]);
   return <FlatList 
        data={categories}
        keyExtractor = {index=>index}
        numColumns = {2}
        renderItem={Category}
    
    />
}


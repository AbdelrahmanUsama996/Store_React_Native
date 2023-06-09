import React from "react";
import { Text ,StyleSheet, TouchableOpacity, View} from "react-native";



export default function Category(props){

    return<View style={styles.categoryBtn}>
            <TouchableOpacity >
                <Text  style={styles.categoryItem}>{ props.item }</Text>
            </TouchableOpacity>
        </View>
}

const styles = StyleSheet.create({
    categoryBtn:{
        width:160,
        height:165,
        margin:15,
        borderRadius:6,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    categoryItem:{
        fontSize:18
    }
});
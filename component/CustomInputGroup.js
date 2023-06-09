import React from "react";
import { View,TextInput ,Text,StyleSheet } from "react-native";

const CustomInputGroup = (props) => {
    return (
    <View style={styles.textInputGroup}>
        <Text style = {styles.labelText}>{props.labelText}</Text>
        <TextInput
            style={styles.inputField}
            {...props}
        />
        {props.errorMessage&&<Text style={styles.errorMessage}>{props.errorMessage} .</Text>}
    </View>
)};

const styles = StyleSheet.create({
    textInputGroup : {
        paddingBottom : 15,
    },
    labelInput : {
        fontSize : 22,
        fontWeight:'bold',   
        
    },
    labelText:{
        fontWeight :'600',
        fontSize: 15,
        color: '#172331',
        marginBottom : 5
    },
    inputField : {
        height:50,
        borderWidth: 1,
        borderRadius:12,
        paddingHorizontal:15,
        fontSize : 22,
        color : '#918d8d',
        borderColor :'#FD5606',
        backgroundColor : '#F3F4F8'
    },errorMessage : {
        color : "red",
        fontSize : 16,
        paddingHorizontal : 5,
        paddingTop : 4,
    },
});

export default CustomInputGroup;
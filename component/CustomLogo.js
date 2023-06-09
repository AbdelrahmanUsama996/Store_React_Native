import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomLogo = (props) => {
    return (
        <View style={styles.logContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.paragraph}>{props.paragraph}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logContainer: {
        flex: 0.25,
        justifyContent: "center",
        alignItems: "center",
      },
      title: {
        marginVertical: 4,
        fontWeight: "700",
        fontSize: 30,
        color: "#FD5606",
      },
      paragraph :{
        fontWeight :'600',
        fontSize : 20,
      }
})

export default CustomLogo;
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const Splash = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(()=>{
        SecureStore.getItemAsync("token")
        .then(data => {
            data ? props.navigation.navigate("bottomTab",{screen:"Home"}) : props.navigation.navigate('login');
        })
        .catch(()=>{})
    },2000)
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBackground}>
          <Image
            style={styles.logoStyle}
            resizeMode='contain'
            source={require("../assets/images/Vector.png")}
            
          />
        </View>
        <Text style={styles.textLogo}>Shopping App</Text>
      </View>
      {/* {isLoading ? <ActivityIndicator size='large' color='#600ee6' />: */}
       <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnStart}
          onPress={() => {
            props.navigation.navigate("login");
            // props.navigation.navigate("bottomTab",{screen:"Home"});
          }}
        >
          <Text style={styles.textBtn}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FD5606",
  },
  logoContainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackground: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: "white",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  logoStyle: {
    width: 40,
    height: 40,
    
  },
  textLogo: {
    fontSize: 42,
    fontWeight: "500",
    color: "white",
  },
  btnContainer: {
    flex: 0.2,
    alignItems: "center",
    // justifyContent:'center'
  },
  btnStart: {
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textBtn: {
    color: "#FD5606",
    fontWeight: "500",
  },
});

export default Splash;

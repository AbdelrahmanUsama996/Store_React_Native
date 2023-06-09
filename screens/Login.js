import React, { useState } from "react";
import { View, StyleSheet,ScrollView, Text, TouchableOpacity } from "react-native";
import CustomInputGroup from "../component/CustomInputGroup";
import CustomLogo from "../component/CustomLogo";
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const Login = (props) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState({});

  const handleSubmit = () => {
    const errors = errorMessage;

    if (!userName) {
      errors.userName = "User Name field is required";
    } else if (userName.length < 3) {
      errors.userName = "User Name must be more than 3 characters long";
    } else {
      errors.userName = "";
    }
    if (!password) {
      errors.password = "Password field is required";
    } else if (password.length < 6) {
      errors.password = "Password must be more than 6 characters long";
    } else {
      errors.password = "";
    }
    
    if(errors.userName || errors.password ){
      setErrorMessage( {...errors})
      }else{
        // setIsLoading(true)
        const url = 'https://fakestoreapi.com/auth/login';
        axios.post(url,{
          'username': userName,
           'password' : password,
        })
        .then((response)=>{
          // setIsLoading(false)
          const token = response.data;
          props.navigation.navigate("bottomTab",{screen:"Home"})
          // // console.log(response.data.username)
          // SecureStore.setItemAsync("token",token)
          //     .then(()=>props.navigation.navigate("bottomTab",{screen:"Home"}))
          
          // // console.log(user);
        })
        .catch((error) =>{
          // setIsLoading(false)
          console.log(error.message);
        }
        )
      }

  };

  return (
      <ScrollView>
    <View style={styles.container}>
      <CustomLogo title = "Welcome Back!" paragraph = "Sign in to continue."/>
      <View style={styles.formContainer}>
        <CustomInputGroup
          placeholder="User Name"
          name="userName"
          onChangeText={setUserName}
          errorMessage={errorMessage.userName}
          labelText = "Username"
        />
        <CustomInputGroup
          placeholder="Password"
          name="password"
          secureTextEntry={true}
          onChangeText={setPassword}
          errorMessage={errorMessage.password}
          labelText = "Password"
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnForm}
          onPress={handleSubmit}
        >
          <Text style={styles.textBtn}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={{ opacity: 0.6, fontWeight: "500", fontSize: 16 }}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate("register")
          }}>
            <Text style={{ color: "#FD5606", fontWeight: "500", fontSize: 16 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 100,
  },

  formContainer: {
    flex: 0.55,
    width: "90%",
  },
  textInputGroup: {
    paddingBottom: 15,
  },
  btnForm: {
    backgroundColor: "#FD5606",
    marginVertical: 6,
    paddingVertical: 22,
    borderRadius: 10,
    alignItems: "center",
    color: "#6f00e5",
  },
  textBtn: {
    fontWeight: "700",
    fontSize: 20,
    color: "white",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 115,
  },
});

export default Login;


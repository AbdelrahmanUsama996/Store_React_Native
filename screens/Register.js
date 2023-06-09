import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import CustomInputGroup from "../component/CustomInputGroup";
import CustomLogo from "../component/CustomLogo";
import axios from "axios";

const Register = (props) => {
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    const errors = errorMessage;

    if (!userName) {
      errors.userName = "Full Name field is required";
    } else if (userName.length < 3) {
      errors.userName = "Full Name must be more than 3 characters long";
    } else {
      errors.userName = "";
    }

    if (!email) {
      errors.email = "Email field is required";
    } else if (email.length < 10) {
      errors.email = "Email must be more than 10 characters long";
    } else if (!email.includes("@")) {
      errors.email = "Email must includes '@'";
    } else {
      errors.email = "";
    }
    if (!password) {
      errors.password = "Password field is required";
    } else if (password.length < 6) {
      errors.password = "Password must be more than 6 characters long";
    } else {
      errors.password = "";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password field is required";
    } else if (confirmPassword != password) {
      errors.confirmPassword =
        "Password confirmation should be the same as password";
    } else {
      errors.confirmPassword = "";
    }

    if (
      errors.userName ||
      errors.email ||
      errors.password ||
      errors.confirmPassword
    ) {
      setErrorMessage(errors);
    } else {
      setIsLoading(true);
      setErrorMessage({});
      const url = "https://fakestoreapi.com/users";
      axios
        .post(url, {
          'username': fullName,
          'email': email,
          'password': password,
        })
        .then((response) => {
          setIsLoading(false);
          Alert.alert("Alert", "Your account successfully");
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <CustomLogo title="Create Account" paragraph="Sign up to continue." />
          <View style={styles.formContainer}>
            <CustomInputGroup
              placeholder="User Name"
              name="text"
              onChangeText={setUsername}
              errorMessage={errorMessage.userName}
              labelText="Username"
            />
            <CustomInputGroup
              placeholder="Email"
              name="email"
              keyboardType="email-address"
              onChangeText={setEmail}
              errorMessage={errorMessage.email}
              labelText="Email"
            />
            <CustomInputGroup
              placeholder="Password"
              name="password"
              secureTextEntry={true}
              onChangeText={setPassword}
              errorMessage={errorMessage.password}
              labelText="Password"
            />
            <CustomInputGroup
              placeholder="Confirm Password"
              name="password"
              secureTextEntry={true}
              onChangeText={setConfirmPassword}
              errorMessage={errorMessage.confirmPassword}
              labelText="Confirm Password"
            />

            {isLoading ? (
              <ActivityIndicator size="large" color="red" />
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnForm}
                onPress={handleSubmit}
              >
                <Text style={styles.textBtn}>Sign Up</Text>
              </TouchableOpacity>
            )}
            <View style={styles.registerContainer}>
              <Text style={{ opacity: 0.6, fontWeight: "500", fontSize: 16 }}>
                Already have an account?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("login");
                }}
              >
                <Text
                  style={{ color: "#FD5606", fontWeight: "500", fontSize: 16 }}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  formContainer: {
    flex: 0.65,
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
    marginVertical: 15,
  },
});

export default Register;

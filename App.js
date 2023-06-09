import React from "react";
import { Image, TouchableOpacity } from "react-native";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Splash from "./screens/Splash";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import Products from "./screens/Products";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 17,
          borderTopRightRadius: 17,
          backgroundColor: "white",
          position: "absolute",
        },
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#FD5606",
          borderBottomColor: "#FD5606",
        },
        headerTitleStyle: {
          color: "white",
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("bottomTab", { screen: "Home" })
            }
          >
            <Image
              resizeMode="contain"
              style={{ width: 30, height: 17, marginLeft: 20 }}
              source={require("./assets/images/arrow.png")}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => (
            <Image
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
              source={
                props.focused
                  ? require("./assets/images/icon/homeFocus.png")
                  : require("./assets/images/icon/home.png")
              }
            />
          ),
          headerLeft: false,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: (props) => (
            <Image
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
              source={
                props.focused
                  ? require("./assets/images/icon/categoryFoucs.png")
                  : require("./assets/images/icon/category.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: (props) => (
            <Image
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
              source={
                props.focused
                  ? require("./assets/images/icon/productsFoucs.png")
                  : require("./assets/images/icon/products.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: (props) => (
            <Image
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
              source={
                props.focused
                  ? require("./assets/images/icon/cartFoucs.png")
                  : require("./assets/images/icon/cart.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => (
            <Image
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
              source={
                props.focused
                  ? require("./assets/images/icon/profileFoucs.png")
                  : require("./assets/images/icon/profile.png")
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            backgroundColor:"#FD5606",
            headerShown: true,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#FD5606",
              borderBottomColor: "#FD5606",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Home' )
                }
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 30, height: 17, marginLeft: 20 }}
                  source={require("./assets/images/arrow.png")}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="bottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

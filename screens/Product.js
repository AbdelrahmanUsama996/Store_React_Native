import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import axios from "axios";

export default function Product(props) {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/1" )
      .then((response) => {
        // console.log(response.data);

        setProduct(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.productItem}>
        <View >
          <Image style={styles.productImage} source={{ uri: product.image }} />
        </View>
        <View style={styles.middleProduct}>
          <Text numberOfLines={1}>{product.title}</Text>
          <Text style={{ color: "#8C8FA5" }}>{product.category}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
        </View>
        <View style={{  }}>
          <Image
            style={{ width: 15, height: 15 }}
            source={require("./../assets/images/star.png")}
          />
          {/* <Text >{product.rating.rate}</Text> */}
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.productDescription}>
          <View style={styles.productTitle}>
            <Text style={styles.productName}>Product Name</Text>
            <Text style={styles.productTitleName}>{product.title}</Text>
          </View>
          <View>
            <Text style={styles.productName}>Product Description</Text>
            <Text style={styles.productTitleName}>{product.description}</Text>
          </View>
        </View>
        <View>
          <View style={styles.countStyle}>
            <Text style={styles.productQuantity}>Product Quantity</Text>
            <TouchableOpacity
              style={styles.btnCount}
              onPress={() => setCount(count - 1)}
            >
              <Text style={styles.operation}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity
              style={styles.btnCount}
              onPress={() => setCount(count + 1)}
            >
              <Text style={styles.operation}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btnAddCart}>
            <Text style={{ fontWight: "600", fontSize: 20, color: "white" }}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FD5606",
    flex: 1,
  },
  productItem: {
    width: 352,
    height: 123,
    marginHorizontal: 18,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 3,
    marginBottom: 25,
  },
  productImage: {
    width: 50,
    height: 80,
  },
  middleProduct:{
    width:163
  },
  productPrice: {
    flexDirection: "row",
    marginVertical: 8,
  },
  descriptionContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    paddingHorizontal: 20,
  },
  productDescription: {
    height: 450,
    paddingTop: 25,
  },
  productTitle: {
    marginBottom: 12,
  },
  productName: {
    fontWeight: "500",
    fontSize: 16,
    color: "#8C8FA5",
    paddingTop: 15,
  },
  productTitleName: {
    fontSize: 15,
    color: "#8C8FA5",
  },
  countStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productQuantity: {
    fontWeight: "500",
    fontSize: 16,
    color: "#8C8FA5",
  },
  btnCount: {
    width: 43,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#FD5606",
    justifyContent: "center",
    alignItems: "center",
  },
  operation: {
    color: "white",
  },
  count: {
    backgroundColor: "#FE8E5980",
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    paddingHorizontal: 40,
  },
  btnAddCart: {
    width: "100%",
    height: 50,
    backgroundColor: "#FD5606",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 30,
  },
});

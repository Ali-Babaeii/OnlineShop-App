import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Image } from "react-native";

import Home from "../screens/HomeScreen/HomeScreen";
import CollectionContents from "../screens/CollectionsScreen/CollectionContents";
import CollectionItems from "../screens/CollectionsScreen/CollectionItems";

import Cart from "../screens/CartScreen/Cart";
import { useNavigation } from "@react-navigation/native";

const basket = require("../assets/basket.png");
const avatar = require("../assets/profile.png");
const logo = require("../assets/logo.png");

const Stack = createStackNavigator();

export default function index() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => (
            <Image style={{ width: 90, height: 90 }} source={logo} />
          ),
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                style={{ width: 30, height: 30, marginLeft: 10 }}
                source={avatar}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Image
                style={{ width: 30, height: 30, marginRight: 10 }}
                source={basket}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Collections"
        component={CollectionItems}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="collectionContents"
        component={CollectionContents}
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Categories"
        component={CollectionContents}
        options={{
          headerTitle: "",
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

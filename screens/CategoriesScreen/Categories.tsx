import React, { useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";

import { fetchCategories } from "../../redux/actions";
import styles from "./styles";
const showAll = require("../../assets/show-all.png");
const clothes = require("../../assets/clothes.jpg");
export default function Categories() {
  const { items, pending } = useSelector(
    (state: RootStateOrAny) => state.category
  );
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Collections">>();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const renderItem = ({item}) => {
  
      return (
        <View style={styles.cardContainer}>
          <Pressable style={styles.pressable}>
            <View style={styles.darkView}>
              <Text style={styles.title}>{item.displayName}</Text>
            </View>

            <Image source={clothes} style={styles.image} />
          </Pressable>
        </View>
      );
   
  };
  if (pending == true) {
    return (
      <ActivityIndicator style={styles.spinner} size="small" color="#F2941B" />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.categoryText}>Categories</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Collections")}>
          <View style={styles.showAllContainer}>
            <Text style={styles.showAllText}>Show All</Text>
            <Image style={styles.icon} source={showAll} />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

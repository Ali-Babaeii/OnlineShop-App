import React, {  useEffect } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator
} from "react-native";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { fethCollectionItems } from "../../redux/actions";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Cart() {
  const { items, pending } = useSelector((state: RootStateOrAny) => state.collectionItem);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fethCollectionItems());
  }, []);

  if(pending==true){
    return(

      <ActivityIndicator style={styles.spinner} size="large" color="#F2941B" />
    )
  }
  const renderItem = ({ item }) => {
    return (
      <View style={styles.cartContainer}>
        <Image style={styles.cartImage} source={{ uri: item.picture }}></Image>
        <Text style={styles.title}>{item.displayName}</Text>
        <Text style={styles.price}>${item.currentPrice}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

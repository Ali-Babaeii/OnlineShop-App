import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import MasonryList from "../../components/MasonryList";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { fethCollectionItems } from "../../redux/actions";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import styles from "./styles";

export default function CollectionItems() {
  const { items, pending } = useSelector(
    (state: RootStateOrAny) => state.collectionItem
  );
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "CollectionItems">>();
  useEffect(() => {
    dispatch(fethCollectionItems());
  }, []);
  if (pending == true) {
    return (
      <ActivityIndicator style={styles.spinner} size="large" color="#F2941B" />
    );
  }
  return (
    <View style={styles.itemContainer}>
      <MasonryList
        data={items}
        ListEmptyComponent={() => <View></View>}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("collectionContents", { items: item })
              }
            >
              <View height={item.height}>
                <Image source={{ uri: item.picture }} style={{ flex: 1 }} />
              </View>

              <View style={styles.darkView}>
                <Text style={styles.itemText} numberOfLines={1}>
                  {item.displayName}
                </Text>
                <Text style={styles.itemPrice}>${item.currentPrice}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        getHeightForItem={({ item }) => item.height + 2}
        numColumns={2}
      />
    </View>
  );
}

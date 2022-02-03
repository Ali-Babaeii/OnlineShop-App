import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";

const basket = require("../../assets/basket-white.png");

export default function CollectionContents() {
  const { params } = useRoute();
  const [post, setPost] = useState<any>();
  useEffect(() => {
    const { items } = params;
    setPost(items);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardContent}>
        <Text>{item}</Text>
      </View>
    );
  };

  if (post == undefined) {
    return (
      <ActivityIndicator style={styles.spinner} size="small" color="#F2941B" />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.imageContent}
          source={{ uri: post.picture }}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={styles.footerContent}>
        <View style={{ flex: 1 }}>
          <View style={styles.textContainerContext}>
            <Text numberOfLines={1} style={styles.titleContent}>
              {post.displayName}
            </Text>

            <Text style={styles.priceContent}>${post.currentPrice}</Text>
          </View>

          <Text numberOfLines={4} style={styles.description}>
            {post.description}
          </Text>

          <Text style={styles.size}>Size</Text>
          <FlatList
            scrollEnabled={false}
            horizontal={true}
            data={post.availableSizes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonTochable}>
            <Image source={basket} style={styles.buttonIcon}></Image>
            <Text style={styles.buttonText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

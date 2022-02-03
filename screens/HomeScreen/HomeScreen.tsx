import React from 'react';
import { Text, View } from 'react-native';

import Collection from '../CollectionsScreen/Collections';
import Categories from '../CategoriesScreen/Categories';
import styles from './styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Find Your Style Online!
          </Text>
        </View>
        <Collection />
        <Categories />
      </View>
    </View>
  );
}

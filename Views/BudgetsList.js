import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'blue'
   } 
});

const BudgetsList = () => {
  return (
    <View style={styles.container}>
    <Text style={{flex: 1,color: 'black', fontSize: 100}} > Hello world 2 </Text>
  </View>
  );
};

export default BudgetsList;
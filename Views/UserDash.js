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

import LinearGradient from 'react-native-linear-gradient';

const UserDash = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={{flex: 1}}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={['#242478', '#3b5998', '#1b9bb5']}>
      <Text style={{flex: 1,color: 'black', fontSize: 100}} > Hello world 1 </Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default UserDash;
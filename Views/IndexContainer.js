import React from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import { Button } from 'react-native-material-ui';
import { Icon } from 'react-native-material-ui';


const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: 'flex-end'
  },
  iconsContainer: {
    flex: 1,
    padding: 32,
    //flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 100
  },
  buttonContainerM1: {
    padding: 14,
    height: 50,
    marginBottom: 32
  },
  buttonContainerM2: {
    padding: 14,
    height: 50,
    marginBottom: 100
  },
  buttonTextM: {
    color: '#fff',
    fontFamily: 'FiraSans-Bold',
    fontSize: 16,
  },
  buttonCS: {
    borderWidth: 4,
    borderColor: '#ADD8E6',
    padding: 10
  },
  typography: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Mina-Bold',
    textAlign: 'center'
  }
});

const IndexContainer = (props) => {

  return (<>
    <View style={styles.iconsContainer}>
      <Icon
        name="assessment"
        size={60}
        color="white"
        style={{alignSelf: 'center', paddingBottom: 16}}
      />
      <Text style={styles.typography} > Create Budgets and track your spendings. It is free, fun, useful and secure. </Text>
    </View>
    
    <View style={styles.buttonContainer}>

      <Button
        text="Log in"
        type="outline"
        style={{ container: { ...styles.buttonContainerM1 }, text: { ...styles.buttonTextM } }}
        primary
        raised
        icon={
          <Icon
            name="person"
            size={20}
            style={{ marginRight: 16 }}
            color="white"
          />}
      />

      <Button
        text="Create Account "
        type="outline"
        primary
        raised
        style={{ container: { ...styles.buttonContainerM2, backgroundColor: '#faa500' }, text: { ...styles.buttonTextM } }}
        icon={
          <Icon
            name="person"
            size={20}
            style={{ marginRight: 16 }}
            color="white"
          />}
      />
    </View>
  </>);
}

export default IndexContainer;
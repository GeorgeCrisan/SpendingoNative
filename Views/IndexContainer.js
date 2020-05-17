import React from 'react';
import { useHeaderHeight } from '@react-navigation/stack';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button } from 'react-native-material-ui';
import { Icon } from 'react-native-material-ui';

import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: ("#fff500"),
  },
  container: {
    flex: 1

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700',
  },
  typography: {
    fontFamily: 'FiraSans-Regular'
  },
  gradient: {
    flex: 1
  },
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
    paddingBottom: 50
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

  const { navigation } = props;
  const headerHeight = useHeaderHeight();

  return (<>
    <LinearGradient
      style={{ ...styles.gradient, marginTop: headerHeight }}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      colors={['#242478', '#3b5998', '#1b9bb5']}>
      <Header />
      <View style={styles.iconsContainer}>
        <Icon
          name="assessment"
          size={60}
          color="white"
          style={{ alignSelf: 'center', paddingBottom: 16 }}
        />
        <Text style={styles.typography} > Create Budgets and track your spendings. It is free, fun, useful and secure. </Text>
      </View>

      <View style={styles.buttonContainer}>

        <Button
          text="Log in"
          type="outline"
          onPress={() => navigation.navigate('Log In')}
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
          onPress={() => navigation.navigate('Create Account')}
          raised
          style={{ container: { ...styles.buttonContainerM2, backgroundColor: '#faa500' }, text: { ...styles.buttonTextM } }}
          icon={
            <Icon
              name="people"
              size={20}
              style={{ marginRight: 16 }}
              color="white"
            />}
        />
      </View>
    </LinearGradient>
  </>);
}

export default IndexContainer;
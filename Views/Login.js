import React, { useState, useEffect } from 'react';
import { connect, dispatch } from 'react-redux';
import { loginUser } from '../actions';
import { useHeaderHeight } from '@react-navigation/stack';
import Header from '../Components/Header';

//Native Imports

//Child Components
import LinearGradient from 'react-native-linear-gradient';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// Style
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: ("#fff500"),
  },
  container: {
    flex: 1
  },
  gradient: {
    flex: 1
  },
  form: {
    flex: 1,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
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
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});



const Login = (props) => {

  useEffect(() => {
    //props.authEmailPass('georgerdp@gmail.com','test22');
  }, []);

  const headerHeight = useHeaderHeight();


  return (
    <View style={{ flex: 1, marginTop: headerHeight }}>
      <LinearGradient
        style={styles.gradient}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={['#242478', '#3b5998', '#1b9bb5']}>
        <Header customText={'Please log in to your account'} />
        <View style={styles.form}>
          <Text > !!!!!!!!!!!!!!!!!! </Text>
          <Text > !!!!!!!!!!!!!!!!!! </Text>
          <Text > !!!!!!!!!!!!!!!!!! </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated

  };
}

function mapDsipatchToProps(dispatch) {
  return {
    authEmailPass: (email, pass) => {
      dispatch(loginUser(email, pass));
    }
  }
}

export default connect(mapStateToProps, mapDsipatchToProps)(Login);
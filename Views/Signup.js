import React, { useState, useEffect } from 'react';
import { connect, dispatch } from 'react-redux';
import { loginUser, createUser } from '../actions';

//Native Imports

//Child Components
import Header from '../Components/Header';
import MyStatusBar from '../Components/MyStatusBar';
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






const SignUp = (props) => {

  useEffect(() => {
    //props.authEmailPass('georgerdp@gmail.com','test22');
  }, []);

  return (<>
    <View style={styles.container}>
      <View style={styles.container}>
        <Text> !!!!!!!!!!!!!!!!!!!!!!!!!! </Text>
      </View>

    </View>
  </>);
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

export default connect(mapStateToProps, mapDsipatchToProps)(SignUp);
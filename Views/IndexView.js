import React , { useState, useEffect} from 'react';
import {connect, dispatch } from 'react-redux';
import {loginUser, createUser} from '../actions';
//Native Imports

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// Style

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: ("#fff500"),
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: "#fff",
    color: '#faa500'
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
  }
});


const IndexView = (props)=> {

    console.log(props.isAuthenticated);
    useEffect(()=>{
      props.authEmailPass('georgerdp@gmail.com','test22');
    },[]);
    console.log('user ********************************');
  return (<>
    <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.body}>
            {!props.isAuthenticated && <Text  > Login out </Text>}
            {props.isAuthenticated && <Text  > in  </Text>}
          </View>
        </ScrollView>
      </SafeAreaView>
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
      authEmailPass: (email,pass) => {
        dispatch(loginUser(email,pass));
      }
    }
}

export default connect(mapStateToProps, mapDsipatchToProps)(IndexView);
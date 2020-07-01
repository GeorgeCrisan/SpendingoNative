import React, { useState, useEffect } from 'react';
import { loginUser, logoutUser, fetchBudgets } from '../actions';
import { connect } from 'react-redux';

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
  },
  formCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginLeft: 16,
    borderRadius: 5,
    marginBottom: 32,
    marginTop: 10,
    marginRight: 16
  },
});

import LinearGradient from 'react-native-linear-gradient';

const UserDash = (props, { navigation }) => {

  const { loading, budgets } = props;
  useEffect(() => {
    props.fetchBudgets();
  }, []);

  console.log(budgets, 'man');

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={{ flex: 1 , justifyContent: 'flex-start'}}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={['#242478', '#3b5998', '#1b9bb5']}>
        
        <Text style={{ color: 'white', fontSize: 26, textAlign: 'center', marginBottom: 16 }} > Selected Budget </Text>
        <View style={{...styles.formCard}}>
          {loading && <ActivityIndicator size="large" color="#242478" />}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch(logoutUser());
    },
    fetchBudgets: () => {
      dispatch(fetchBudgets());
    },
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.budgets.loading,
    budgets: state.budgets.budgets

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDash);
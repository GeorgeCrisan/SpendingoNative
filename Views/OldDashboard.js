import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser, fetchBudgets } from '../actions';
//Native Imports

//Child Components
import Header from '../Components/Header';
import MyStatusBar from '../Components/MyStatusBar';
import LinearGradient from 'react-native-linear-gradient';

import { createStackNavigator } from '@react-navigation/stack';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';

import MyAccount from './MyAccount';
import BudgetsList from './BudgetsList';
import UserDash from './UserDash';



// Style
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: ("#fff500"),
  },
  gradient: {
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  container: {
    flex: 1,
    //marginTop: 60,
    //justifyContent: 'space-between',
    flexDirection: 'column'

  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    maxHeight: "60%",
    padding: 16,
    marginLeft: 16,
    borderRadius: 5,
    marginTop: 0,
    marginBottom: 50,
    marginRight: 16
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
  active: {
    color: 'red'
  }
});



const Dashboard = (props) => {

  let { user, loading } = props;

  useEffect(() => {
    //props.fetchBudgets();
  }, []);


  return (<>


        <SafeAreaView style={styles.container}>

         <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            headerTitleAlign: 'right',
            headerBackground: () => (<LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1, height: 0 }}
              colors={['#242478', '#3b5998', '#1b9bb5']} />),
            headerTitleStyle: {
              color: '#fff',
              fontSize: 0.01
            }
          }}>


            <Stack.Screen
              name="UserDash"
              component={UserDash}
            />

            <Stack.Screen
              name="BudgetsList"
              component={BudgetsList}
            />

            <Stack.Screen
              name="MyAccount"
              component={MyAccount}
            />



        </Stack.Navigator>

          
        </SafeAreaView>
  </>);
};

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.budgets.loading,
    budgets: state.budgets.budgets

  };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
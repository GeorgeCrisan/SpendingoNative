import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../actions';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


//Native Imports

//Child Components
//import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import MyAccount from './MyAccount';
import BudgetsList from './BudgetsList';
import UserDash from './UserDash';
import NewBudget from './NewBudget';


// Style
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: ("#fff500"),
  },
  container: {
    flex: 1,
    
  },
  gradient: {
    flex: 1,
  },
  highlight: {
    fontWeight: '700',
  },
  typography: {
    fontFamily: 'FiraSans-Regular'
  },
  title: {
    marginTop: 10
  }
});






const Dashboard = (props) => {

  useEffect(() => {
    //props.authEmailPass('georgerdp@gmail.com','test22');
  }, []);

  return (<>
    <View style={styles.container}>
      <LinearGradient
        style={{flex: 1}}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={['#242478', '#3b5998', '#1b9bb5']}>

          <NavigationContainer tabPress={()=>{console.log('fuck me')}}  independent={true}>
            <Tab.Navigator
              activeColor="#242478"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Dashboard') {
                    iconName = 'view-dashboard';
                  } else if (route.name === 'Budgets List') {
                    iconName = 'playlist-check';
                  } else if (route.name === 'My Account') {
                    iconName = 'human-greeting';
                  } else if (route.name === 'Create Budget') {
                    iconName = 'plus-outline';
                  }

                  // You can return any component that you like here!
                  return <Icon name={iconName} size={26} color={focused ? '#242478' : '#fff' } />;
                },
              })}
              tabBarOptions={{
                activeTintColor: '#1b9bb5',
                inactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen name="Dashboard" component={UserDash} />
              <Tab.Screen name="Budgets List" component={BudgetsList} />
              <Tab.Screen name="Create Budget" component={NewBudget} />
              <Tab.Screen name="My Account" component={MyAccount} />
            </Tab.Navigator>
          </NavigationContainer>
      </LinearGradient>


    </View>
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

function mapDsipatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch(logoutUser());
    },
    fetchBudgets: () => {
      dispatch(fetchBudgets());
    },
  }
}

export default connect(mapStateToProps, mapDsipatchToProps)(Dashboard);
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../actions';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Native Imports

//Child Components
import Header from '../Components/Header';
import MyStatusBar from '../Components/MyStatusBar';
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
const Tab = createBottomTabNavigator();

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
        style={styles.gradient}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={['#242478', '#3b5998', '#1b9bb5']}>

          <NavigationContainer  independent={true}>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = 'view-dashboard';
                  } else if (route.name === 'BudgetList') {
                    iconName = 'playlist-check';
                  } else if (route.name === 'MyAccount') {
                    iconName = 'human-greeting';
                  } else if (route.name === 'NewBudget') {
                    iconName = 'plus-outline';
                  }

                  // You can return any component that you like here!
                  return <Icon name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: '#1b9bb5',
                inactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen name="Home" component={UserDash} />
              <Tab.Screen name="BudgetList" component={BudgetsList} />
              <Tab.Screen name="NewBudget" component={NewBudget} />
              <Tab.Screen name="MyAccount" component={MyAccount} />
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
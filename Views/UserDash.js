import React from 'react';

import { BottomNavigation } from 'react-native-material-ui';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

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

const UserDash = ({navigation}) => {
  return (
    <SafeAreaView style={{marginTop:  50, flex: 1, backgroundColor: 'red'}}>
      <Text style={{flex: 1,color: 'black', fontSize: 100}} > Hello world 1 </Text>
      <BottomNavigation active={false} hidden={false} >
            <BottomNavigation.Action
              key="newbudget"
              icon="dashboard"
              label="Add Budget"
              style={styles.bnactive}
              onPress={() => navigation.navigate('BudgetsList')}
            />
            <BottomNavigation.Action
              key="budgets"
              icon="list"
              label="Budgets"
              style={styles.bnactive}
              onPress={ ()=> navigation.navigate('BudgetsList')}
            />
            <BottomNavigation.Action
              key="account"
              icon="person"
              label="My Account"
              style={styles.bnactive}
              onPress={() => setNav('account')}
            />
            <BottomNavigation.Action
              key="settings"
              icon="power"
              label="Log Out"
              style={styles.active}
              onPress={() => props.logOut()}
            />
          </BottomNavigation>
    </SafeAreaView>
  );
};

export default UserDash;
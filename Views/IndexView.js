import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
//Native Imports
import { createStackNavigator } from '@react-navigation/stack';

//Child Components
import LinearGradient from 'react-native-linear-gradient';
import IndexContainer from './IndexContainer';
import Login from './Login';
import Signup from './Signup';
import MyStatusBar from '../Components/MyStatusBar';
import Dashboard from './Dashboard';

import {
  StyleSheet,
  View,
} from 'react-native';

import Resetpassword from './Resetpassword';




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
});

const Stack = createStackNavigator();


const IndexView = (props) => {
  let { isAuthenticated } = props;
  console.log(props.isAuthenticated, 'is Auth');
  useEffect(() => {
    //props.authEmailPass('georgerdp@gmail.com','test22');
    //temp dispatch shoud add to map actions to props
    
    props.logOut();
  }, []);


  return (<>
    <View style={styles.container}>
      <MyStatusBar backgroundColor="#1b9bb5" barStyle="light-content" />
      <View style={styles.container}>

        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            headerTitleAlign: 'right',
            headerBackground: () => (<LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1, height: 60 }}
              colors={['#242478', '#3b5998', '#1b9bb5']} />),
            headerTitleStyle: {
              color: '#fff',
              fontSize: 0.01
            }
          }}>
          {isAuthenticated && <Stack.Screen
            name="Dashboard"
            component={Dashboard}
          />}

          {!isAuthenticated && (<>
            <Stack.Screen
              name="Home"
              component={IndexContainer}
            />
            <Stack.Screen
              name="Log In"
              component={Login}
            />
            <Stack.Screen
              name="Create Account"
              component={Signup}
            />
            <Stack.Screen
              name="Reset Password"
              component={Resetpassword}
            />
          </>)}
        </Stack.Navigator>

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
    logOut: () => {
      dispatch(logoutUser());
    }
  }
}

export default connect(mapStateToProps, mapDsipatchToProps)(IndexView);
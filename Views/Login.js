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

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
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
  formCard: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    maxHeight: 400,
    padding: 16,
    marginLeft: 16,
    borderRadius: 5,
    marginRight: 16
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
  input: {
    padding: 32,
    marginBottom: 16
  },
  error: {
    color: 'red',
    paddingBottom: 8
  }
});



const Login = (props) => {
  
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    error: ""
  });

  const changes = (type,value)=> {
      let newFormState = {...formState};
      newFormState[type] = value;
      setFormState(newFormState);
  }
   
  const [borderBottomColor, setBorderBottomColor] = useState({
    unu: 'gray',
    doi: 'gray'
  });

  const headerHeight = useHeaderHeight();

  const setBorderBottomColorT = (type,color)=> {
      let borderBottomColor2 = {...borderBottomColor};
      borderBottomColor2[type] = color;
      setBorderBottomColor(borderBottomColor2);
  }
  if(props.error) {
    console.log('what error', props.error, typeof props.error);
  }
  

  return (
    <View style={{ flex: 1, marginTop: headerHeight }}>
      <LinearGradient
        style={styles.gradient}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={['#242478', '#3b5998', '#1b9bb5']}>
        <Header customText={'Please log in to your account'} />

        <View style={styles.formCard}>
          <Icon
            name="user-circle"
            size={50}
            color="#faa500"
            style={{ alignSelf: 'center', paddingBottom: 16 }}
          />
          <Input
            placeholder="Email"
            label='Email Address'
            onFocus={()=>{ setBorderBottomColorT('unu', '#2196f3') }}
            onBlur={()=>{ setBorderBottomColorT( 'unu', 'grey') }}
            inputContainerStyle={{
              borderBottomColor: borderBottomColor['unu']
            }}
            leftIcon={
              <Icon
                name='at'
                size={24}
                color={borderBottomColor['unu'] ?? 'gray'}
                style={{marginRight: 4}}
              />
            }
            style={styles.input}
            onChangeText={(e) => { changes('email', e);  }}
          />
          <Input
            placeholder="Password"
            label='Password'
            onFocus={()=>{ setBorderBottomColorT('doi','#2196f3') }}
            onBlur={()=>{ setBorderBottomColorT('doi', 'gray') }}
            inputContainerStyle={{
              borderBottomColor: borderBottomColor['doi']
            }}
            leftIcon={
              <Icon
                name='lock'
                size={24}
                style={{marginRight: 4}}
                color={borderBottomColor['doi'] ?? 'gray'}
              />
            }
            style={styles.input}
            onChangeText={(e) => { changes('password', e);  }}
          />
          {props.error && <Text style={styles.error} > {props.error.message} </Text>}
          <Button
            title="Log in"
            type="outline"
            onPress={() => props.authEmailPass(formState.email, formState.password) }
            buttonStyle={{borderWidth: 1.6}}
            titleStyle={{fontFamily: 'Mina-Regular', fontWeight: 'bold'}}
            style={{marginTop: 16}}
          />
        </View>

      </LinearGradient>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    loading: state.auth.loading,
    error: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated

  };
}

function mapDsipatchToProps(dispatch) {
  return {
    authEmailPass: (email, pass) => {
      dispatch(loginUser(email , pass));
    }
  }
}

export default connect(mapStateToProps, mapDsipatchToProps)(Login);
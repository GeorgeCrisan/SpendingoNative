import React, { useState, useEffect } from 'react';
import { connect, dispatch } from 'react-redux';
import { loginUser, resetError } from '../actions';
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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
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
    justifyContent: 'center'
  },
  formCard: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    maxHeight: 480,
    padding: 16,
    marginLeft: 16,
    borderRadius: 5,
    marginRight: 16,
    marginTop: 30
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
    paddingBottom: 8,
    marginBottom: 8
  },
  header: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Mina-Bold',
    textAlign: 'center',
    alignSelf: 'center',
    alignContent:'center'
  },
});



const Login = (props) => {
  const {navigation} = props;
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    error: ""
  });

  useEffect(()=>{
    props.resetError();
  },[]);

  const [eye, setEye] = useState(true);

  const changes = (type,value)=> {
      let newFormState = {...formState};
      newFormState[type] = value;
      setFormState(newFormState);
  }
   
  const [borderBottomColor, setBorderBottomColor] = useState({
    unu: 'gray',
    doi: 'gray'
  });

  const setBorderBottomColorT = (type,color)=> {
      let borderBottomColor2 = {...borderBottomColor};
      borderBottomColor2[type] = color;
      setBorderBottomColor(borderBottomColor2);
  }
  

  return (
    <View style={{ display: 'flex', flex: 1,justifyContent: 'center',  marginTop: 0 }}>
      <LinearGradient
        style={styles.gradient}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={['#242478', '#3b5998', '#1b9bb5']}>
        <Text style={styles.header} > Log in </Text>
        <View style={styles.formCard}>
          <Icon
            name="keycdn"
            size={50}
            color="#faa500"
            style={{ alignSelf: 'center', paddingBottom: 16 }}
          />
          <Input
            placeholder="Email"
            label='Email Address'
            autoCapitalize="none"
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
            autoCapitalize="none"
            secureTextEntry={eye}
            onFocus={()=>{ setBorderBottomColorT('doi','#2196f3') }}
            onBlur={()=>{ setBorderBottomColorT('doi', 'gray') }}
            inputContainerStyle={{
              borderBottomColor: borderBottomColor['doi']
            }}
            
            rightIcon={
              <Icon2
              name={!eye ? 'eye-off' : 'eye'}
              size={16}
              style={{marginRight: 4}}
              color={borderBottomColor['doi'] ?? 'gray'}
              onPress={()=>{setEye(!eye)}}
            />
            }

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
            style={{marginBottom: 8 }}
          />
          <Button style={{marginTop: 8}} title={'Reset password'} onPress={() => navigation.navigate('Reset Password')} />
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

function mapDispatchToProps(dispatch) {
  return {
    authEmailPass: (email, pass) => {
      dispatch(loginUser(email , pass));
    },
    resetError: () => {
      dispatch(resetError());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
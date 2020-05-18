import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createUser, resetError } from '../actions';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
    flex: 1,
    justifyContent: 'space-around'
  },
  formCard: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    maxHeight: 480,
    padding: 16,
    marginLeft: 16,
    borderRadius: 5,
    marginTop: 10,
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



const Signup = (props) => {
  
  const [formState, setFormState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordMatch: "",
    error: ""
  });

  const [eye, setEye] = useState(true);


  useEffect(()=>{
    props.resetError();
  },[]);

  const changes = (type,value)=> {
      let newFormState = {...formState};
      newFormState[type] = value;
      setFormState(newFormState);
  }
   
  const [borderBottomColor, setBorderBottomColor] = useState({
    unu: 'gray',
    doi: 'gray',
    trei: 'gray'
  });


  const setBorderBottomColorT = (type,color)=> {
      let borderBottomColor2 = {...borderBottomColor};
      borderBottomColor2[type] = color;
      setBorderBottomColor(borderBottomColor2);
  }
  

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', marginTop: 0 }}>
      <LinearGradient
        style={styles.gradient}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={['#242478', '#3b5998', '#1b9bb5']}>

        <View>

        <Text style={{textAlign: 'center',
          fontSize: 26,
          marginTop: 16,
          fontWeight: 'bold',
          padding: 16,
          color: 'white',
          fontFamily: 'Mina-Regular'}}> Create account </Text>

        </View>
        

        <View style={styles.formCard}>
          <Icon
            name="account-circle-outline"
            size={50}
            color="#faa500"
            style={{ alignSelf: 'center', paddingBottom: 16 }}
          />
          <Input
            placeholder="Name"
            label='Display name'
            onFocus={()=>{ setBorderBottomColorT('trei', '#2196f3') }}
            onBlur={()=>{ setBorderBottomColorT( 'trei', 'grey') }}
            inputContainerStyle={{
              borderBottomColor: borderBottomColor['trei']
            }}
            leftIcon={
              <Icon
                name='account'
                size={24}
                color={borderBottomColor['trei'] ?? 'gray'}
                style={{marginRight: 4}}
              />
            }
            style={styles.input}
            onChangeText={(e) => { changes('displayname', e);  }}
          />
          <Input
            placeholder="Email"
            autoCapitalize="none"
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
            secureTextEntry={eye}
            label='Password'
            autoCapitalize="none"
            onFocus={()=>{ setBorderBottomColorT('doi','#2196f3') }}
            onBlur={()=>{ setBorderBottomColorT('doi', 'gray') }}
            inputContainerStyle={{
              borderBottomColor: borderBottomColor['doi']
            }}

            rightIcon={
              <Icon
              name='eye'
              size={16}
              style={{marginRight: 4}}
              color={borderBottomColor['doi'] ?? 'gray'}
              onPress={()=>setEye(!eye)}
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
            title="Create account"
            type="outline"
            onPress={() => props.createUser(formState.email, formState.password, formState.displayName) }
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
    error: state.auth.createError,
    isAuthenticated: state.auth.isAuthenticated

  };
}

function mapDsipatchToProps(dispatch) {
  return {
    createUser: (email, pass, dn) => {
      dispatch(createUser(email , pass, dn));
    },
    resetError: () => {
      dispatch(resetError());
    }
  }
}

export default connect(mapStateToProps, mapDsipatchToProps)(Signup);
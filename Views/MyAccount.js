import React, { useState, useEffect } from 'react';
import { logoutUser, deleteAccount , resetError } from '../actions';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';

import { Button } from 'react-native-material-ui';
import { Button as ButtonRE } from 'react-native-elements';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
  },
  formCard: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 16,
    marginLeft: 16,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 16,
    //alignSelf: 'center'
  },
  buttonText: {
    fontFamily: 'Mina-Regular',
    fontSize: 16
  },
  error: {
    color: 'red',
  },
  typography1: {
    fontFamily: 'Mina-Regular',
    color: 'gray',
    textAlign: 'center',
    fontSize: 32,
    margin: 32
  },
  typography2: {
    fontFamily: 'Mina-Regular',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
    color: 'black'
  },
});

const MyAccount = (props) => {

  const [eye, setEye] = useState(true);

  useEffect(()=>{
    const onScreenFocus = () => {
      props.resetError();
    }

    props.navigation.addListener('tabPress', onScreenFocus);
  
  },[]);

  const [formState, setFormState] = useState({
    password: "",
  });

  const changes = (type, value) => {
    let newFormState = { ...formState };
    newFormState[type] = value;
    setFormState(newFormState);
  }

  const [borderBottomColor, setBorderBottomColor] = useState({
    unu: 'gray',
    doi: 'gray'
  });

  const setBorderBottomColorT = (type, color) => {
    let borderBottomColor2 = { ...borderBottomColor };
    borderBottomColor2[type] = color;
    setBorderBottomColor(borderBottomColor2);
  }


  return (
    <LinearGradient
      style={{ ...styles.gradient, marginTop: 0 }}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      colors={['#242478', '#3b5998', '#1b9bb5']}>
      <View style={styles.formCard}>
        <Text style={styles.typography1} > Manage account </Text>
        <Icon
              name='exclamation'
              size={62}
              style={{ marginLeft: 0, marginRight: 0, alignSelf: 'center', marginBottom: 16 }}
              color={'#faa500'}
            />
        <Text style={styles.typography2} >If you have decided to delete your account and wipe the data permanently, please insert your password and proceed with the deletion. </Text>
        <Input
          placeholder="Password"
          label='Password'
          autoCapitalize="none"
          secureTextEntry={eye}
          onFocus={() => { setBorderBottomColorT('doi', '#2196f3') }}
          onBlur={() => { setBorderBottomColorT('doi', 'gray') }}
          inputContainerStyle={{
            borderBottomColor: borderBottomColor['doi']
          }}

          rightIcon={
            <Icon
              name={eye ? 'eye-off' : 'eye'}
              size={16}
              style={{ marginRight: 4 }}
              color={borderBottomColor['doi'] ?? 'gray'}
              onPress={() => { setEye(!eye) }}
            />
          }

          leftIcon={
            <Icon
              name='lock'
              size={24}
              style={{ marginRight: 4 }}
              color={borderBottomColor['doi'] ?? 'gray'}
            />
          }
          style={styles.input}
          onChangeText={(e) => { changes('password', e); }}
        />
        {props.error.isError && <Text style={styles.error} > {props.error.message + ' Please try again.'} </Text>}

        <ButtonRE
          disabled={formState.allowDelete}
          title="Delete Account and All Data"
          type="outline"
          onPress={()=>{ props.deleteAccount(formState.password) }}
          buttonStyle={{ borderWidth: 1.6, borderColor: 'red', marginBottom: 16, marginTop: 16 }}
          titleStyle={{ color: 'red', fontFamily: 'Mina-Regular', fontWeight: 'bold' }}
          style={{ marginBottom: 8 }}
          icon={
            <Icon
              name="delete-circle-outline"
              size={27}
              style={{ marginRight: 16 }}
              color="red"
            />}
        />

      </View>

      <Button
        text="Log out"
        type="outline"
        style={{ container: { margin: 16, marginTop: 60, marginBottom: 60, height: 46, backgroundColor: 'orange' }, text: { ...styles.buttonText } }}
        primary
        onPress={props.logOut}
        raised
        icon={
          <Icon
            name="account-arrow-right-outline"
            size={27}
            style={{ marginRight: 16 }}
            color="white"
          />}
      />
    </LinearGradient>
  );
};

function mapDsipatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch(logoutUser());
    },
    deleteAccount: (pass) => {
      dispatch(deleteAccount(pass));
    },
    resetError: () => {
      dispatch(resetError());
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    loading: state.auth.loading,
    error: state.auth.deleteAccountErr,
  };
}

export default connect(mapStateToProps, mapDsipatchToProps)(MyAccount);

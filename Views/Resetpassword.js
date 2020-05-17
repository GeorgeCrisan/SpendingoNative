import React, { useState, useEffect } from 'react';
import { connect, dispatch } from 'react-redux';
import { passwordReset, resetError } from '../actions';
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
    paddingBottom: 16,
    paddingTop: 16,
    fontSize: 18
  },
  done: {
    color: 'green',
    textAlign: 'center',
    paddingBottom: 16,
    fontSize: 20,
    paddingTop: 16
  }
});



const Resetpassword = (props) => {
  const {navigation} = props;
  const [formState, setFormState] = useState({
    email: "",
    error: ""
  });

  useEffect(()=>{
    props.resetError();
  },[]);

  const [done, setDone] = useState(false);

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

  const resetRequest = () => {
    setDone(!done);
    props.passwordReset(formState.email);
  }
  

  return (
    <View style={{ flex: 1, marginTop: headerHeight }}>
      <LinearGradient
        style={styles.gradient}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={['#242478', '#3b5998', '#1b9bb5']}>
        <Header customText={'Request a link to reset your password'} />

        <View style={styles.formCard}>
          {!done && <>
          <Icon
            name="envelope-open-text"
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

          <Button
            title="Reset Password"
            type="outline"
            onPress={resetRequest  }
            buttonStyle={{borderWidth: 1.6}}
            titleStyle={{fontFamily: 'Mina-Regular', fontWeight: 'bold'}}
            style={{marginTop: 16}}
          />
          </>}
          {done && <>
            {!props.error.isError && <Text style={styles.done}> Password request successful. </Text>}
            {props.error && <Text style={styles.error} > {props.error.message} </Text>}
            <Button title={'Reset again'} onPress={()=>{setDone(!done)}} />
          </> }
        </View>

      </LinearGradient>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    loading: state.auth.loading,
    error: state.auth.resetPassErr,
    isAuthenticated: state.auth.isAuthenticated

  };
}

function mapDsipatchToProps(dispatch) {
  return {
    passwordReset: (email, pass) => {
      dispatch(passwordReset(email , pass));
    },
    resetError: () => {
      dispatch(resetError());
    }
  }
}

export default connect(mapStateToProps, mapDsipatchToProps)(Resetpassword);
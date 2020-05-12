import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';




const styles = StyleSheet.create({
  container: {
    minHeight: 160,
    paddingTop: 64,
    paddingBottom: 64,
    justifyContent: 'center'
  },
   header: {
     color: '#fff',
     fontSize: 32,
     fontFamily: 'Mina-Bold',
     textAlign: 'center',
     alignSelf: 'center',
     alignContent:'center'
   },
   by: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'FiraSans-Bold'
   },

});

const Header = (props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}  > {props.isAuthenticated ? `Welcome,  ${props.displayName}` : 'SpendingoNative'} </Text>
        {!props.isAuthenticated && <Text style={styles.by}  > by georgecrisan.com </Text>}
      </View>
    )
}


export default Header;
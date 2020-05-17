import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';




const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 32,
    justifyContent: 'center',
  },
   header: {
     color: '#fff',
     fontSize: 25,
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
    if(props.customText) {
      return (<View style={styles.container}>
        <Text style={styles.header}  > {`${props.customText}`} </Text>
      </View>);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}  > {props.isAuthenticated ? `Welcome,  ${props.displayName}` : 'SpendingoNative'} </Text>
        {!props.isAuthenticated && <Text style={styles.by}  > by georgecrisan.com </Text>}
      </View>
    )
}


export default Header;
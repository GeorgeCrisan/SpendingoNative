
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  StatusBar,
  StyleSheet
} from 'react-native';



const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

// Style
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const MyStatusBar = ({ ...props }) => (
  <LinearGradient
    style={styles.statusBar}
    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
    colors={['#242478', '#3b5998', '#1b9bb5']}>

    <StatusBar translucent {...props} />
  </LinearGradient>
);

export default MyStatusBar;
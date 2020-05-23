import  Base64  from "./utils/Base64";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';



global.atob = Base64.atob;
global.btoa = Base64.btoa;


AppRegistry.registerComponent(appName, () => App);

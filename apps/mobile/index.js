/**
 * Entry point for the mobile app.
 * Init modules must run before App is registered.
 */

import './shared/api/init';

import {AppRegistry} from 'react-native';

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

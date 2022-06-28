import {database} from './src/database';
if (__DEV__) {
  const {
    connectDatabases,
    WatermelonDB,
  } = require('react-native-flipper-databases');

  connectDatabases([new WatermelonDB(database)]);
}
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';

import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import React from 'react';
import Home from './pages/Home';
import {LogBox} from 'react-native';
import Navbar from './components/Navbar';
import CustomDrawerContent from './components/Drawer';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: () => <Navbar />,
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          lazy: true,
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;

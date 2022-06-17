import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import React from 'react';
import Home from './pages/home';
import {LogBox} from 'react-native';
import Navbar from './components/Navbar';
import CustomDrawerContent from './components/Drawer';
import Analytics from './pages/analytics';
import Post from './pages/post';
import Results from './pages/results';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Analytics: undefined;
      Results: {
        search: string;
      };
      Post: {
        id: string;
      };
    }
  }
}

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
      <Drawer.Screen
        name="Analytics"
        component={Analytics}
        options={{
          lazy: true,
        }}
      />
      <Drawer.Screen
        name="Post"
        component={Post}
        options={{
          lazy: true,
        }}
      />
      <Drawer.Screen
        name="Results"
        component={Results}
        options={{
          lazy: true,
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;

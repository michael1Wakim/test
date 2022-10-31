import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppProvider} from './src/context/Context';
import Login from './src/pages/Login';
import Dashboard from './src/pages/Dashboard ';
import {Provider} from 'react-redux';
import {Store} from './src/redux/Store';

// {
//   AppProvider;
// }

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        {/* <AppProvider> */}
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        {/* </AppProvider> */}
      </NavigationContainer>
    </Provider>
  );
}

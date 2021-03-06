import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import Route from './routes/Route'

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <Route/>
</NavigationContainer>
    </Provider>

    
  );
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {StatusBar, Text} from 'react-native';
import DestinationSearchScreen from './src/screens/DestinationSearchScreen';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <DestinationSearchScreen />
    </>
  );
};

export default App;

/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View, YellowBox } from 'react-native';
import Header from './src/components/Header';
import TripList from './src/components/TripList';

YellowBox.ignoreWarnings(['Remote debugger']);

const App = () => (
    <View>
        <Header headerText={'Bevy Prototype'} />
        <TripList />
    </View>
);

AppRegistry.registerComponent('bevyprototype', () => App);
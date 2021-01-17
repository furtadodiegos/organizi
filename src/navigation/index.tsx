import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../app/home';
import { DetailsScreen } from '../app/details';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => (
    <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Details" component={DetailsScreen} />
    </Navigator>
);

export default () => (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
);

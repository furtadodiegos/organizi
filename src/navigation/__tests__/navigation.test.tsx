import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { render, waitFor } from '@testing-library/react-native';

import { AppNavigator } from '..';

describe('Testing navigation', () => {
    test('renders correctly first screen', async () => {
        const { getByText } = render(
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>,
        );

        await waitFor(() => getByText('List of numbersXXX'));
    });
});

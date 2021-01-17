import 'react-native';
import React from 'react';
import renderer, { act, ReactTestRenderer } from 'react-test-renderer';

import App from './App';

let tree: ReactTestRenderer;

describe('Testing App renderer', () => {
    test('renders correctly', async () => {
        tree = renderer.create(<App />);

        await act(async () => {
            expect(tree).toBeTruthy();
        });
    });
});

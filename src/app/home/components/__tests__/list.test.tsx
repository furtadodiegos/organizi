import React from 'react';
import { render, act, cleanup, fireEvent } from '@testing-library/react-native';

import List from '../list';

const CHANGE_TEXT = 'CHANGE_TEXT';

// Testing hooks(useEffect)
// https://reactnativetesting.io/component/effects-and-external-services.html#mocking-a-module
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         expect(queryByText('Widget 1')).not.toBeNull();
//         expect(queryByText('Widget 2')).not.toBeNull();
//         resolve();
//     }, 1000);
// });

describe('Testing Home List component', () => {
    afterEach(cleanup);

    test('page contains the header and 5 items', async () => {
        const { findByText, queryByTestId, getAllByText } = render(<List />);

        const header = await findByText('List of numbersXXX');
        const items = getAllByText(/Item number/);
        const firstItem = queryByTestId('item_1');

        await act(async () => {
            expect(header).toBeTruthy();
            expect(items.length).toBe(5);
            expect(firstItem?.children).toStrictEqual(['Item number ', '1']);
        });
    });

    test('Should find and write on input', async () => {
        const { findByTestId } = render(<List />);

        const itemInput = await findByTestId('itemInput');

        fireEvent.changeText(itemInput, CHANGE_TEXT);

        await act(async () => {
            expect(itemInput.props.value).toBe(CHANGE_TEXT);
        });
    });

    test('Should add a new item to list', async () => {
        const { findByTestId, queryByTestId } = render(<List />);
        // const onPress = jest.fn()
        const button = await findByTestId('btnPlus');

        fireEvent.press(button);

        await act(async () => {
            const firstItem = queryByTestId('item_6');

            expect(firstItem?.children).toStrictEqual(['Item number ', '6']);
        });
    });
});

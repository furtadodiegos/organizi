import React, { FC, useLayoutEffect } from 'react';

import { INavigation } from '../../../navigation/types';
import List from './list';

const HomeScreen: FC<INavigation> = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return <List />;
};

export default HomeScreen;

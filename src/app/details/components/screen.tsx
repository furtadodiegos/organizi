import React, { FC, useLayoutEffect } from 'react';
import { CardStyleInterpolators } from '@react-navigation/stack';

import { INavigation } from '../../../navigation/types';
import Description from '../components/description';

const DetailsScreen: FC<INavigation> = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
        });
    }, [navigation]);

    return <Description />;
};

export default DetailsScreen;

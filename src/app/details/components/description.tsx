import React from 'react';
import { View, Text } from 'react-native';

import styles from '../assets/styles';
import useDescription from '../hooks/useDescription';

const Description = () => {
    const { item } = useDescription();

    return (
        <View>
            <Text style={styles.header}>Showing details for {item}</Text>
            <Text style={styles.body}>the number you have chosen is {item}</Text>
        </View>
    );
};

export default Description;

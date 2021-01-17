import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import useList from '../hooks/useList';

const List = () => {
    const { items, onOpacityPress, value, onChangeText, submit } = useList();

    return (
        <View>
            <Text style={styles.header} testID="header">
                List of numbers
            </Text>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeText(text)}
                    value={value}
                    testID="itemInput"
                />

                <TouchableOpacity testID="btnPlus" onPress={submit} style={styles.button}>
                    <Text>PLUS</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                keyExtractor={(_, idx) => `${idx}`}
                data={items}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onOpacityPress(item)} style={styles.row}>
                        <Text testID={`item_${item}`}>Item number {item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const divider = '#DDDDDD';

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 16,
    },
    row: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderBottomColor: divider,
        borderBottomWidth: 1,
    },
    input: {
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        flex: 1,
        marginHorizontal: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        margin: 10,
    },
});

export default List;

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import codePush from 'react-native-code-push';

import Navigation from './navigation';

const codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />

            <SafeAreaView style={styles.container}>
                <Navigation />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default codePush(codePushOptions)(App);

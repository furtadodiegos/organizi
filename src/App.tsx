import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

// import auth from '@react-native-firebase/auth';

import Navigation from './navigation';

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

export default App;

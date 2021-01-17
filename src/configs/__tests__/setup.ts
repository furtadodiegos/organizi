import 'react-native-gesture-handler/jestSetup';
import './navigation';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('../../../node_modules/react-native-gesture-handler/jestSetup.js');
jest.mock('react-native-appearance');

// jest.useFakeTimers();

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    Reanimated.default.call = () => {};

    return Reanimated;
});

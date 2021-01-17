import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export enum ENavigator {
    Home = 'Home',
    Details = 'Details',
}

export type NavigatorParamlist = {
    Home: undefined;
    Details: { item: number };
};

export interface INavigation {
    navigation: StackNavigationProp<NavigatorParamlist>;
    route: RouteProp<NavigatorParamlist, 'Home' | 'Details'>;
}

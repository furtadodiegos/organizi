import { useRoute, RouteProp } from '@react-navigation/native';

import { NavigatorParamlist } from '../../../navigation/types';

const useDescription = () => {
    const { params } = useRoute<RouteProp<NavigatorParamlist, 'Details'>>();

    return { item: params?.item };
};

export default useDescription;

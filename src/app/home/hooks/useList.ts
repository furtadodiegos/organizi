import { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

const useList = () => {
    const { navigate } = useNavigation();

    const [value, onChangeText] = useState('');
    const [items, setItems] = useState(new Array(5).fill(null).map((_, idx) => idx + 1));

    const onOpacityPress = useCallback((item: number) => navigate('Details', { item }), [navigate]);

    const submit = useCallback(() => {
        setItems([...items, items.length + 1]);
    }, [items]);

    return { items, onOpacityPress, value, onChangeText, submit };
};

export default useList;

import React from 'react';
import * as S from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

export const ItemList = () => {
    const [fav, setFav] = React.useState(false);
    const { navigate } = useNavigation()

    const toggleFav = React.useCallback(() => {
        setFav(value => !value)
    },[fav])

    const changeToCheckoutScreen = React.useCallback(() => {
        navigate('Checkout');
    },[])


    return (
        <S.Container onPress={changeToCheckoutScreen} >
            <S.Content>
                <S.Image />
            </S.Content>
            <S.Title>Óculos Exemplo</S.Title>
            <S.Price>R$ 99,00</S.Price>
            <S.ContainerIcon onPress={toggleFav} >
                <FontAwesome name={fav ? 'heart' : 'heart-o'} size={20} color={'yellow'} />
            </S.ContainerIcon>
        </S.Container>
    )
}
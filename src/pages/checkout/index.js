import React from 'react';
import * as R  from 'react-native';
import * as S from './styles';

export const Checkout = () => {
    return(
        <R.ScrollView>
            <S.Container>
                <S.TopContent>
                    <S.Image />
                </S.TopContent>
                <S.BottomContent>
                    <S.TitleView>
                        <S.Title>Óculos Exemplo Exemplar</S.Title>
                        <S.Price>R$ 99,00</S.Price>
                    </S.TitleView>
                </S.BottomContent>
            </S.Container>
        </R.ScrollView>
    )
}
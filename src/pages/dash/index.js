import React from 'react';
import * as R from 'react-native';
import * as S from './styles';
import {ItemList} from '../../components/ItemList'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export const Dash = () => {
    return (
        <S.Container>
            <S.ContainerOptions>
                <S.Options>
                    <MaterialCommunityIcons name='dip-switch' color='black' size={20} />
                    <S.Text>Filtros</S.Text>
                </S.Options>
                <S.Options>
                    <MaterialCommunityIcons name='view-grid' color='black' size={20} />
                    <MaterialCommunityIcons name='square' color='black' size={20} />
                </S.Options>
            </S.ContainerOptions>
            <R.FlatList
                contentContainerStyle={{justifyContent:'space-between'}}
                data={['','','','','','']}
                numColumns={2}
                renderItem={() => <ItemList />}
                keyExtractor={(item,index) => String(index)}
            />
        </S.Container>
    )
}
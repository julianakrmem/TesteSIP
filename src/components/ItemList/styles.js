import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    padding: 20px;
`;

export const Content = styled.View`
    background-color: #c5c5c5;
    padding: 20px;
`;

export const ContainerIcon = styled.TouchableOpacity`
    padding: 10px;
    position: absolute;
    right: 20px;
    top: 20px;
`;

export const Image = styled.Image.attrs({
    source: require('../../assets/promotions/promotions.png'),
    resizeMode: 'contain',
})`
    width: 100px;
    height: 100px;
    
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: black;
    text-align: center;
`;

export const Price = styled.Text`
    font-size: 18px;
    color: grey;
    text-align: center;
`;
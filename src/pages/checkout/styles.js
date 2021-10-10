import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1
`;

export const TopContent = styled.View`
    flex:1;
    background-color: grey;
    align-items:center;
    justify-content: center;
`;

export const Image = styled.Image.attrs({
    source: require('../../assets/promotions/promotions.png'),
    resizeMode: 'contain'
})`
    width: 100%;
    height: 200px;
`;

export const BottomContent = styled.View`
    flex:1;
`;

export const Title = styled.Text`
    color: black;
    font-size: 20px;
    font-weight: bold;
    width: 50%;
`;

export const Price = styled.Text`
    color: black;
    font-size: 20px;
`;

export const TitleView = styled.View`
    flex-direction: row;
    padding: 20px;
    flex:1;
`;
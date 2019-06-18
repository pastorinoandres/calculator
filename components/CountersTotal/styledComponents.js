
//dependecies
import styled , { css } from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

//Styles


export const TotalContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 15;
  margin-bottom: 15;
  `;


export const TotalBoxView = styled.View`
  background-color: #FFE599;
  flex: 1;
  flex-basis: 100%;
  borderWidth: 3;
  paddingHorizontal:10;
  height:90;
`;

export const TotalBoxTouch = styled.TouchableOpacity`
  background-color: #FFE599;
  flex: 1;
  flex-basis: 100%;
  borderWidth: 3;
  paddingHorizontal:10;
  height:90;
  ${props => (props.platform && props.platform === 'ios') && css`
    background-color: #9FC5F8;
  `}
  ${props => (props.platform && props.platform === 'android') && css`
    background-color: #B6D7A8;
  `}
`;


export const TotalHeader = styled.Text`
  flex: 1;
  flex-basis: 100%;
  color: #000;
  font-weight: 400;
  font-size: 30px;
  text-align: left;
  margin-bottom: 10px;
  ${props => props.date && css`
    font-size: 25px;
  `}
  ${props => (props.platform && props.platform === 'android') && css`
    text-align: right;
  `}
`;

export const TotalItem = styled.Text`
  color: #000;
  font-weight: 800;
  font-size: 60px;
  text-align: center;
  ${props => (props.platform && props.platform === 'android') && css`
    text-align: right;
  `}
  
`;


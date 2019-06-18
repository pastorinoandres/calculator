
//dependecies
import styled , { css } from 'styled-components/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

//Styles
export const ButtonAction = styled.TouchableOpacity`
  background-color: #2c3e50;
  border: 4px solid #000000;
  padding: 10px;
  flex: 1;
  height:60px;  
  ${props => props.add && css`
    background: #B6D7A8;
    margin-right: 10px;
  `}
  ${props => props.delate && css`
    background: #E06666;
    margin-left: 10px;
  `}
`;

export const TextAction = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  ${props => props.dark && css`
    color: #000;
  `}
  ${props => props.light && css`
    color : #fff;
  `}

`;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 3,
  }
});
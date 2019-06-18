
//dependecies
import styled , { css } from 'styled-components/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

//Styles
export const ButtonAction = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 20px;
  background-color: #DDDDDD;
  border: 4px solid #000000;
  padding: 10px;
  height:60px;
`;

export const TextAction = styled.Text`
  color: #000;
  font-weight: 600;
  font-size: 25px;
  text-align: center; 

`;


export const ViewContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;



export const styles = StyleSheet.create({
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 1,
  }
});
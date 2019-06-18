import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styledComponents'

class CounterContainer extends React.Component {
  renderCounter() {
    const { counter, selectedKey, increaseCounter, decreaseCounter } = this.props;

    return counter.map((item, index) => (
      <View key={index} style={styles.containerItem} >        

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => decreaseCounter(selectedKey,index)} >
              <Text style={styles.icon}>{`<`}</Text>
          </TouchableOpacity>          
        </View>

        <Text style={styles.counter}> {item} </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => increaseCounter(selectedKey,index)} >
              <Text style={styles.icon}>{`>`}</Text>
          </TouchableOpacity>          
        </View>          
        
      </View>
      ));
  }

  render() {
    return (
      <View>
        {this.renderCounter()}
      </View>
    );
  }
}


export default CounterContainer;


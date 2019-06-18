import React from 'react';
import { View} from 'react-native';
import { ButtonAction, TextAction, styles } from "./styledComponents";

class ActionButtons extends React.Component {

  removeCounter = () =>{
    const {counter, removeCounter, defaultCounter, selectedKey, counterLength } = this.props;
    if (counterLength > 1){
      removeCounter(selectedKey)
    }
    console.log(counter[0]);
    console.log(counterLength);
    if((counterLength === 1) && (!(counter[0] === 0))){
      console.log('entra al if');
      defaultCounter(selectedKey,0)
    }
  }

  addCounter = () =>{
    const {addCounter, selectedKey } = this.props;
    addCounter(selectedKey);    
  }

  render() {

    return (
      <View style={styles.container}>

        <ButtonAction style={styles.shadow} add onPress={this.addCounter} >
          <TextAction dark>+</TextAction>
        </ButtonAction>

        <ButtonAction style={styles.shadow} delate onPress={this.removeCounter} >
          <TextAction light>-</TextAction>
        </ButtonAction>
      </View>
    );
  }
}

export default ActionButtons;


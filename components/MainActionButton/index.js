import React, { Component } from 'react';
import { ViewContainer, ButtonAction, TextAction, styles } from "./styledComponents";


class MainActionButton extends Component {

  render() {
    const { action, actionText } = this.props;

    return (
      <ViewContainer>
        <ButtonAction onPress={action} style={styles.shadow}>
          <TextAction>{actionText}</TextAction>
        </ButtonAction>  
      </ViewContainer>
    );
  }
}


export default MainActionButton

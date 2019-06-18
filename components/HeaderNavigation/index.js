import React, { Component } from 'react';
import { styles } from "./styledComponents";
import { Text } from 'react-native';


class HeaderNavigation extends Component {

  render() {
    const { action, actionText } = this.props;

    return (
      <Text style={styles.title}>
            {this.props.title}
      </Text>
    );
  }
}


export default HeaderNavigation

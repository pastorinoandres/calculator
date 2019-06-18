
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import CounterContainer from '../components/CounterContainer';
import ActionButtons from '../components/ActionButtons';
import HeaderNavigation from './../components/HeaderNavigation';
import MainActionButton from './../components/MainActionButton';
import CountersTotal from '../components/CountersTotal';
import { addCounter, removeCounter, increaseCounter, decreaseCounter, setCountersInStorage, removeRecord, defaultCounter} from './../state/actions';
import { getRecordsLength, getSelectedKey, getRecordSelect, getTotal, getRecords  } from '../state/selectors';
import { COUNTERS } from './../constanst/index';

class NuevoTotalScreen extends Component{

  setCountersInStorage = async (data) => {
    try {
      await AsyncStorage.setItem(COUNTERS,JSON.stringify(data));
      
    } catch (error) {
      console.log(error);
    }     
    
  }

  save = () => {
    const { navigation, removeRecord, selectedKey, counterLength, total, records } = this.props;
    navigation.pop();
    if(counterLength === 1 && total === 0 ){
      removeRecord(selectedKey);
    }    
    this.setCountersInStorage(records);
  }

  renderList = () => {

    const { selectedKey,counter,increaseCounter, decreaseCounter } = this.props;

    return (
    <ScrollView style={styles.scrollViewContainer}>
      <CounterContainer 
        selectedKey= {selectedKey}
        counter = {counter}
        increaseCounter = {increaseCounter}
        decreaseCounter = {decreaseCounter}/>
    </ScrollView>);   

  }

  renderActionButtons = () => {

    const { 
      selectedKey,
      counter,
      addCounter, 
      removeCounter, 
      counterLength,
      defaultCounter } = this.props;

    return (
    <ActionButtons 
      addCounter={addCounter} 
      removeCounter={removeCounter} 
      counterLength={counterLength} 
      selectedKey= {selectedKey}          
      defaultCounter = {defaultCounter} 
      counter = {counter}/>);  

  }

  
  

  render(){

    const {       
      counter, 
      total,
    } = this.props;
    

    return (
      <View style={styles.container}>

          <HeaderNavigation title="Nuevo total"/>
          
          {(counter)?this.renderActionButtons():null}
          {(counter)?this.renderList():null}
          {(counter)?(<CountersTotal total={total} header="Total"/>):null}
          
          <MainActionButton action={this.save} actionText="Guardar"/>
      </View>
  );
  }
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 20,
    },
  
    title: {
      color: '#2c3e50',
      fontSize: 32,
      fontWeight: '700',
      fontStyle: 'italic',
      textAlign: 'center',
      marginTop: 40,
      marginBottom: 20
    },
  
    scrollViewContainer: {
      flex: 1,
    },
  });


const mapStateToProps = state => { 
  return{
    counterLength: getRecordsLength(state),
    selectedKey: getSelectedKey(state),
    counter: getRecordSelect(state),
    records: getRecords(state),
    total: getTotal(state)
  }
};


const mapDispatchToProps = { 
  addCounter, 
  removeCounter, 
  increaseCounter, 
  decreaseCounter, 
  setCountersInStorage, 
  removeRecord, 
  defaultCounter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NuevoTotalScreen);

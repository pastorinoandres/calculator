import React, { Component} from 'react';
import { View, ScrollView, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import HeaderNavigation from '../components/HeaderNavigation';
import MainActionButton from './../components/MainActionButton';
import CountersTotal from './../components/CountersTotal';
import { NUEVO_TOTAL } from "./../constanst";
import { getRecords } from '../state/selectors';
import { setCounterSelected, addAndSetCounter, getAndSet } from './../state/actions';




class TotalesScreen extends Component {

  componentDidMount(){
    console.log('componet did mount');
    this.props.getAndSet()
  }

  addRecordAction = () =>{
    const {addAndSetCounter, navigation} = this.props;
    navigation.navigate(NUEVO_TOTAL);
    addAndSetCounter();
  }

  goToRecord = (recordkey) =>{
    console.log(`El recordKey es : ${recordkey}`);
    const {setCounterSelected, navigation} = this.props;
    setCounterSelected(recordkey);
    navigation.navigate(NUEVO_TOTAL);    
  }

  objectToArray = () => {

    const listCounters = [];
    const { records } = this.props;

    for (const key in records) {
      listCounters.push({key: key, value: records[key] })      
    }
    return listCounters;
  }

  render(){
    
    const list = this.objectToArray().map((record)=>{

      const total = record.value.reduce((acum, currentValue) => (acum + currentValue));
      return <CountersTotal key={record.key} total={total} header={record.key} action={this.goToRecord} platform={Platform.OS}/>

    })

    return (
      <View style={styles.container}>

        <HeaderNavigation title={`Totales en ${Platform.OS}`}/>

        <ScrollView style={styles.scrollViewContainer}>
          {
            (list.length)? list:(<Text style={styles.message}>Aun no hay totales cargados</Text>)
          }
        </ScrollView>

        <MainActionButton action={this.addRecordAction} actionText="Agregar"/>
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
  
    message: {
      color: '#2c3e50',
      fontSize: 25,
      fontWeight: '500',
      textAlign: 'left',
      marginTop: 30,
      marginBottom: 20
    },
  
    scrollViewContainer: {
      flex: 1,
    },
  });


const mapStateToProps = state => ({
  records: getRecords(state)
});

const mapDispatchToProps = {setCounterSelected, addAndSetCounter, getAndSet };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TotalesScreen);


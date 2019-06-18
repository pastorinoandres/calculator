
//dependecies
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({  
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#9FC5F8',
    borderWidth: 3,
    paddingHorizontal: 20,
    height:80,
    marginBottom: 15
  },
  counter: {
    flex: 1,
    color: '#2c3e50',
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#FFFFFF',
    width:40,
    height:30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 5,
  },  

  icon: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#2c3e50',
    fontSize: 20,
    fontWeight:'500',
    
  },
});
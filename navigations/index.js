
import { TOTALES, NUEVO_TOTAL } from './../constanst/index';
import TotalesScreen from './../screens/TotalesScreen';
import NuevoTotalScreen from './../screens/NuevoTotalScreen';
import { createStackNavigator } from 'react-navigation';


export const Navigator = createStackNavigator(
    {
      [TOTALES]: TotalesScreen,
      [NUEVO_TOTAL]: NuevoTotalScreen
    },
    {
      initialRouteName: TOTALES, //Este string hace referencia al nombre de la propiedad
      mode: 'modal',
      headerMode: 'none'
    },
  );
  
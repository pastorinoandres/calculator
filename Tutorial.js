//app.js
import { createAppContainer } from 'react-navigation';
import Menu from './navigators/Menu';

const AppContainer = createAppContainer(Menu);

const App  = () => (<AppContainer onNavigationStateChange={() => ({ })}/>)
export default App;

//Navigators/Menu
import { createStackNavigator } from 'react-navigation';
import MenuScreen from '../screens/MenuScreen';
import Stack from './Stack';
import Tab from './Tab';
import Drawer from './Drawer';

const NavigatorMenu = createStackNavigator(
  {
    Menu:           {screen: MenuScreen},
    StackExample:   {screen: Stack},
    TabExample:     {screen: Tab},
    DrawerExample:  {screen: Drawer},
  },
  {
    initialRouteName: 'Menu', //Este string hace referencia al nombre de la propiedad
    headerMode: 'none',
  },
);

export default NavigatorMenu;

//screens/MenuScreen.js

this.props.navigation.replace('StackExample', { name: 'John' });
this.props.navigation.replace('DrawerExample');


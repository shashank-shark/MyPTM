import { createStackNavigator, createAppContainer } from 'react-navigation';

import Homescreen from '../components/Homescreen';
import Events from '../components/Events';
import Messages from '../components/Messages';

const App = createStackNavigator({
    Homescreen: { screen: Homescreen },
    Events: { screen: Events },
    Messages : { screen : Messages },
});

const AppNavigator = createAppContainer(App);

export default AppNavigator;
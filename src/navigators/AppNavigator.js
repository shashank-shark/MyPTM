import { createStackNavigator, createAppContainer } from 'react-navigation';

import Homescreen from '../components/Homescreen';
import Events from '../components/Events';
import Messages from '../components/Messages';
import Escort from '../components/Escort';

const App = createStackNavigator({
    Homescreen: { screen: Homescreen },
    Events: { screen: Events },
    Messages : { screen : Messages },
    Escort: {screen : Escort},
});

const AppNavigator = createAppContainer(App);

export default AppNavigator;
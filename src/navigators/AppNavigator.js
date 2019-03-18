import { createStackNavigator, createAppContainer } from 'react-navigation';

import Homescreen from '../components/Homescreen';
import Events from '../components/Events';

const App = createStackNavigator({
    Homescreen: { screen: Homescreen },
    Events: { screen: Events },
});

const AppNavigator = createAppContainer(App);

export default AppNavigator;
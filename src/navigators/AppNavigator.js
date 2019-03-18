import { createStackNavigator } from 'react-navigation';

import Homescreen from '../components/Homescreen';

const AppNavigator = createStackNavigator({
    Home: { screen: Homescreen },
});

export default AppNavigator;
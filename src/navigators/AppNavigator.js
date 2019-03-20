import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import Homescreen from '../components/Homescreen';
import Events from '../components/Events';
import Messages from '../components/Messages';
import Escort from '../components/Escort';
import Login from '../Authflow/Login';
import Loading from '../Authflow/Loading';

const AppStack = createStackNavigator({
    Homescreen: { screen: Homescreen,
        navigationOptions: {
            title: 'LOGIN',
            header: null,
        }
     },
    Events: { screen: Events },
    Messages : { screen : Messages },
    Escort: {screen : Escort},
});

const AuthStack = createStackNavigator({
    Login: { screen: Login}
});

const AppNavigator = createAppContainer(createStackNavigator(
    {
        AuthLoading: Loading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));

export default AppNavigator;
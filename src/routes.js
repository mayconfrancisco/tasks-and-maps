import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Task from './pages/Task';
import Sponsor from './pages/Sponsor';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    App: createStackNavigator({
      Task,
      Sponsor,
    }),
  }),
);

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import Routes from './config/routes';

import GenreList from './screens/GenreList';


import Navigator, {
	createStackNavigator,
	createAppContainer,
	NavigationActions
} from 'react-navigation';

// import {
//   createReduxBoundAddListener,
//   createReactNavigationReduxMiddleware
// } from 'react-navigation-redux-helpers';


const AppStackNavigator = createAppContainer(
	createStackNavigator(Routes,{
		mode:              'card',
		headerMode:        'screen',
		navigationOptions: {
			gesturesEnabled: false
		},
		cardStyle: { shadowColor: 'transparent' }
	})	
);


const navReducer = ( state, action ) => {
	switch(action.type) {
		case 'SHOW_MOVIES':
			NavigationActions.navigate({routeName: 'MoviesList'});
		default:
			return (
				state &&
				action.type === NavigationActions.NAVIGATE &&
				routeName === state.routes[ state.routes.length - 1 ].routeName
			) ? state : AppStackNavigator.router.getStateForAction(action, state);
	}
};


export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

export  { navReducer }; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
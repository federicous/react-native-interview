import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MovieList extends Component {

	static navigationOptions = ({ navigation }) => ({
		headerTitle: <Text>{navigation.state.routeName}</Text>
	});


	render() {
		// TO FILTER  >>>>> navigation.getParam('poop')
		return (
			<View>
				<Text>This is the MovieList</Text>
			</View>
		);
	}
}	

import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

export default class MovieList extends Component {

	static navigationOptions = ({ navigation }) => ({
		headerTitle: <Text>{navigation.state.routeName}</Text>
	});

	state = {
		movies: []
	}

	componentDidMount() {
		if(this.state.movies.length === 0) {
			fetch('http://localhost:3000/movies')
				.then(res => res.json())
				.then(movies => {
					// const genreObjects = movies.map((el, i) => { return { key: el  } });

					this.setState({ movies })
				})
				.catch(err => {
					console.log('Error: ', err);
				})
		}
	}

	renderItem = (item) => {
		return (
			<View style={styles.rowItem}>
				<Text>{item.title}</Text>
				<Button title="click me" onPress={()=>this.props.navigation.push('MovieList', { poop: 'paap' })}/>
			</View>
		)
	}

	render(){
		// TO FILTER  >>>>> navigation.getParam('poop')
		return (
			<View style={styles.row}>
				<FlatList
					data={this.state.movies}
					renderItem={({item}) => this.renderItem(item)}
				/>
			</View>
		);
	}
}	


const styles = StyleSheet.create({
	row: {
		flex: 1
	},
	rowItem: {
		borderColor: 'purple'
	}
})
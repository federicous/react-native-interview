import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

export default class MovieList extends Component {

	static navigationOptions = ({ navigation }) => ({
		headerTitle: <Text>{navigation.getParam('genre')}</Text>
	});

	state = {
		movies: []
	}

	componentDidMount() {
		if(this.state.movies.length === 0) {
			fetch('http://localhost:3000/movies')
				.then(res => res.json())
				.then(movies => {
					this.setState({ movies })
				})
				.catch(err => {
					console.log('Error: ', err);
				})
		}
	}

	getMoviesData = () => {
		const fullData = this.state.movies;
		const filter   = this.props.navigation.getParam('genre');
		return fullData.filter(el => el.genres.some(g => g === filter));
	}

	goToMovieDetail = (movie) => this.props.navigation.push('MovieDetails', { movie, genre: this.props.navigation.getParam('genre') })

	renderItem = (item) => {
		
		return (
			<View style={styles.rowContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{item.title}</Text>
					<Text style={styles.title}>{'Directed by '+item.director}</Text>
					<Text style={styles.title}>{item.year}</Text>
				</View>
				<View style={styles.iconContainer}>
					<TouchableOpacity onPress={()=>this.goToMovieDetail(item)}>
						<Icon
							name='rightcircleo'
							size={30}
							color='#2d6bd6'
						/>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	render(){
		return (
			<View style={styles.container}>
				<FlatList
					data={this.getMoviesData()}
					renderItem={({item}) => this.renderItem(item)}
					keyExtractor={(item, index) => item.title}
				/>
			</View>
		);
	}
}	


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	rowContainer: {
		flexDirection: 'row',
		borderWidth: 1
	},
	titleContainer: {
		flex: 8,
		paddingTop: 5,
		paddingBottom: 5,
		justifyContent: "center"
	},
	title: {
		textAlignVertical: 'bottom',
		margin: 3,
		marginLeft: 5
	},
	iconContainer: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
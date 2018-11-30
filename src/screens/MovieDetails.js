import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MovieDetails extends Component {
	
	static navigationOptions = ({ navigation }) => ({
		headerTitle: <Text>{navigation.getParam('movie').title}</Text>
	});

	render() {
		const movie = this.props.navigation.getParam('movie');
		const genre = this.props.navigation.getParam('genre');

		return (
			<View style={styles.container}>
				<View style={styles.upperView}>
					<View style={styles.actors}>
						<Text style={styles.text}>{'Starring'}</Text>
						{
							movie.actors.split(',').map(actor => (
								<Text key={actor} style={styles.text}>{actor}</Text>
							))
						}
					</View>
					<View style={styles.runtime}>
						<Text style={styles.text}>{'Runtime '+ movie.runtime + ' minutes'}</Text>
					</View>
					<View style={styles.plotContainer}>
						<Text style={styles.text}>{movie.plot}</Text>
					</View>
				</View>
				<View style={styles.lowerView}>
					<View style={styles.genres}>
					<Text style={styles.text}>{'Other genres'}</Text>
						{
							movie.genres.filter(el => el !== genre ).map(genre => (
								<Text key={genre} style={styles.text}>{genre}</Text>
							))
						}
					</View>
					<View style={styles.director}>
						<Text style={styles.text}>{'Directed by'}</Text>
						<Text style={styles.text}>{movie.director}</Text>
					</View>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	upperView: {
		flex: 5
	},
	lowerView: {
		flex: 1,
		flexDirection: 'row'
	},
	genres: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderRightWidth: 1,
		borderStyle: 'solid',
		borderColor: 'black'
	},
	director: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderLeftWidth: 1,
		borderStyle: 'solid',
		borderColor: 'black'
	},
	actors: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	runtime: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	plotContainer: {
		flex: 3,
		marginRight: 30,
		marginLeft: 30,
		alignItems: 'center'
	},
	text: {
		textAlign: 'center',
		fontSize: 16,
		margin: 2
	}
})
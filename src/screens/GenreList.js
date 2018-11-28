import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

console.log(Icon)


export default class GenreList extends Component {

	static navigationOptions = ({ navigation }) => ({
		headerTitle: <Text>{navigation.state.routeName}</Text>
	});


	state = {
		genres: []
	}

	componentDidMount() {
		if(this.state.genres.length === 0) {
			fetch('http://localhost:3000/genres')
				.then(res => res.json())
				.then(genres => {
					const genreObjects = genres.map((el, i) => { return { key: el  } });
					this.setState({ genres:  genreObjects })
				})
				.catch(err => {
					console.log('Error: ', err);
				})
		}
	}

	goToMovieList = () => this.props.navigation.push('MovieList', { poop: 'paap' })

	renderItem = (item) => {
		
		return (
			<View style={styles.rowContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{item.key}</Text>
				</View>
				<View style={styles.iconContainer}>
					<TouchableOpacity onPress={this.goToMovieList}>
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
			<View style={styles.row}>
				<FlatList
					data={this.state.genres}
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
	rowContainer: {
		height: 50,
		flexDirection: 'row',
		borderWidth: 1
	},
	titleContainer: {
		flex: 8,
		justifyContent: "center"
	},
	title: {
		textAlignVertical: 'bottom',
		marginLeft: 5
	},
	iconContainer: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
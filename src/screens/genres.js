import React, { Component } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default class GenreList extends Component {

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

	renderItem = (item) => {
		
		return (
			<View style={styles.rowItem}>
				<Text>{item.key}</Text>
				<Button title="click me" onPress={()=>console.log('PRESSED')}/>
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
	rowItem: {
		borderColor: 'purple'
	}
})
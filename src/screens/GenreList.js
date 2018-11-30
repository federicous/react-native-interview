import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { getGenres } from '../actions/movies.actions';


class GenreList extends Component {

	static navigationOptions = ({ navigation }) => ({
		headerTitle: <Text>{navigation.state.routeName}</Text>
	});

	componentDidMount() {
		if(this.props.genres.length === 0) {
			this.props.getGenres();
		}
	}

	goToMovieList = (genre) => this.props.navigation.push('MovieList', { genre })

	renderItem = (item) => {
		return (
			<View style={styles.rowContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{item.key}</Text>
				</View>
				<View style={styles.iconContainer}>
					<TouchableOpacity onPress={()=>this.goToMovieList(item.key)}>
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
					data={this.props.genres}
					renderItem={({item}) => this.renderItem(item)}
				/>
			</View>
		);
	}

}

const mapStateToProps = (state) => ({
	genres: state.movies.genres //Selector might not be needed for now
})

const mapDispatchToProps = (dispatch) => ({
	getGenres: () => dispatch(getGenres())
})

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);


const styles = StyleSheet.create({
	container: {
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
import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import Bar from './Bar'

export default class Tasks extends React.Component {

	render() {
		return (
			<View style={styles.container}>
			<Bar navigation={this.props.navigation}/>

			<TouchableOpacity
			style={styles.btn}
			onPress={this.login}
			>
			<Text style={styles.textStyle}>Assign Task</Text>
			</TouchableOpacity>

			<TouchableOpacity
			style={styles.btn}
			onPress={this.login}
			>
			<Text style={styles.textStyle}>Monitor Task</Text>
			</TouchableOpacity>

			<TouchableOpacity
			style={styles.btn}
			onPress={this.login}
			>
			<Text style={styles.textStyle}>Add Info</Text>
			</TouchableOpacity>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#2896d3',
		paddingLeft: 40,
		paddingRight: 40,
	},

	textStyle: {

		alignSelf: 'center',
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',

	},

	btn: {
		alignSelf: 'stretch',
		backgroundColor: '#01c853',
		alignItems: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		justifyContent: 'center',
		height: 60,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 20 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},

	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 20 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
});

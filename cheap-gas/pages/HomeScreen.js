import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';

class HomeScreen extends Component{
	render(){
		return(
		<View>
			<Button title="Miles Left" onPress={()=> this.props.navigation.navigate('Main')} />
		</View>
		);
	}
}

export default HomeScreen;
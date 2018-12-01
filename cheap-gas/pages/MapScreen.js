import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';

class MapScreen extends Component{
	render(){
		return(
		<View>
			<Button title="Miles Left" onPress={() => this.props.navigation.popToTop()} />
		</View>
		);
	}
}

export default MapScreen;
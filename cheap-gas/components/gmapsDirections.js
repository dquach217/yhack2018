import React, {Component} from 'react';
import getDirections from 'react-native-google-maps-directions'
 
export default class gmapsDirections extends Component {
 
  handleGetDirections = (sourceLatitude, sourceLongitude, destinationLatitude, destinationLongitude) => {
    const data = {
       source: {
        latitude: Number(sourceLatitude),
        longitude: Number(sourceLongitude)
      },
      destination: {
        latitude: Number(destinationLatitude),
        longitude: Number(destinationLongitude)
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode 
        }
      ]
    }
 
    getDirections(data)
  }
 
  render() {
    return (
      <View style={{}}>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}
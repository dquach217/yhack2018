 
//IDEA: Make it easy to know how long it will take and where to go to charge your electric car



//Pesudocode:

//App main page:
//  Display logo, battery level
// FOR BATTERY LEVEL - hardcode this data for now
//                   - Synthesize this data from: odo reading at last "fill" + battery capacity in miles  and the current odo reading.
// and number of miles left
// IF number of miles left is below threshold value then:
// Bring up alert form -> "your car battery is low, do you want me to find a charging station?"


// If no > do nothing

// If yes to ^ then:
// ======= display list of charging stations WITH
//    the actual time it will take you to charge to full

//once one is selected: open a map to navigate there.

import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from "./pages/HomeScreen";
import MainScreen from "./pages/MainScreen";
import MapScreen from "./pages/MapScreen";

const RootStack = createStackNavigator(
  {
  Home: HomeScreen,
  Main: MainScreen,
  Map: MapScreen
},
{
  initialRouteName: 'Home',
});

export default class App extends Component{
  render(){
    return <RootStack/>
  }
}


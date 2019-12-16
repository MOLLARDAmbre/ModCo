import React  from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ButtonBox from './ButtonBox'
import State from './State'
import {Notifications} from 'expo'

export default class ModCo extends React.Component { // Deals with the GUI and integrating the other elements


  constructor(props) {
    super(props)
    this.state = {
      kevinEnCours: true
    }
  };

  kevinHandler = (enCours) => {
    console.log(this.state.kevinEnCours);
    this.setState({kevinEnCours: enCours});
  };


  render() {
    return (
        <View style={{ marginTop: 0, flex:1, backgroundColor: '#7be6fc'}}>
        <View style={{flex:1}}></View>
        <View style={{flex: 1, alignItems:'center'}}>
            <Text style={styles.textStyle}> ModCo project : </Text>
        </View>
        <View style={{flex:1}}></View>
        <View style={{flex: 1, alignItems:'center'}}>
            <Text style={styles.textStyle}> Proof Of Concept </Text>
        </View>
        <View style={{flex:1}}></View>
        <View style={{flex:4, alignItems:'center' }}>
          <Image source={require('../assets/modCoImage.png')}/>
        </View>
        <View style={{flex:1}}> 
        </View>
        <View style={{flex:6}}></View>
        <View style={{ flex: 4} }>
            <ButtonBox kevinHandler={this.kevinHandler}/>
        </View>
        <State enCours={this.state.kevinEnCours}/>
        </View>
    )
   }

}

const styles = StyleSheet.create({
  textStyle : {
    fontSize : 42
  }
})

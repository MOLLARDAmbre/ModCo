import React from 'react'
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native'


export default class ButtonBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lcol : 'yellow',
      rcol : 'white',
      cours : 'Kevin est en cours'
    }
  }

  _lButton() {
      this.setState({
        lcol : 'yellow',
        rcol : 'white',
        cours : 'Kevin est en cours'
      })
  }

  _rButton() {
    this.setState({
      lcol : 'white',
      rcol : 'yellow',
      cours : "Kevin n'a pas cours"
    })
  }


  render() {
      return (
          <View style={{flex:1}}>
              <View style={{flex:4, flexDirection:'row'}}>
              <View style={{flex:1, marginHorizontal: 25, marginVertical: 25}}>
              <TouchableHighlight style={styles.buttonStyle} underlayColor='yellow' onPress={()=>this._lButton()}>
                  <Text style={{fontSize: 15}}> Kevin est en cours </Text>
              </TouchableHighlight>
              </View>
              <View style={{flex:1, marginHorizontal: 25, marginVertical: 25}}>
              <TouchableHighlight style={styles.buttonStyle} underlayColor='yellow' onPress={()=>this._rButton()}>
                  <Text style={{fontSize: 15}}> Kevin n'a pas cours </Text>
              </TouchableHighlight>
              </View>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                  <Text> {this.state.cours} </Text>
              </View>
          </View>
        )
    }
}


const styles = StyleSheet.create({
  buttonStyle: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal: 25,
    paddingVertical: 25,
    backgroundColor: 'white'
  }
})

import React  from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ButtonBox from './ButtonBox'
import State from './State'

export default class ModCo extends React.Component {

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
            <View style={{flex:6}}></View>
            <View style={{ flex: 4} }>
                <ButtonBox/>
            </View>
            <State/>
        </View>
    )
   }

}


const styles = StyleSheet.create({
  textStyle : {
    fontSize : 42
  }
})

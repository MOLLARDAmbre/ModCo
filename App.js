import React from 'react'
import ModCo from './Components/ModCo'
import { View } from 'react-native'

export default class App extends React.Component { // The entry point
  render() {
    return (
        <ModCo/> // The component ModCo will render the whole app
    )
  }
}

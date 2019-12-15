import React, { Component } from 'react';
import { AppState, Text, Alert } from 'react-native';
import { Permissions, Notifications } from 'expo';


export default class App extends Component {



  state = {
    appState: AppState.currentState,
  };

  componentWillMount() {
    this._askPermissions();
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  _handleAppStateChange = nextAppState => {
    if (nextAppState == "background") {
      //console.log("Kevin est un mechant garcon");
      this._sendNotification();
    }
    this.setState({ appState: nextAppState });
  };

  async _askPermissions() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      await Permissions.askAsync(Permissions.NOTIFICATIONS);
    }
  }

  async _sendNotification() {

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('chat-messages', {
        name: 'notif_channel',
        sound: true,
        priority: 'high'
      });
    }

    const notification = {
      title: 'Déconnexion de ModCo',
      body: 'Kévin, reviens tout de suite !',
      android: { sound: true, priority: 'high', channelId: 'notif_channel' },
      ios: { sound: true }, 
    };
    const id = Notifications.presentLocalNotificationAsync(notification)
  }

  render() {
    return (
      <Text style={{flex:1, marginTop: 0, padding: 0, backgroundColor:'#7be6fc'}}>
      </Text>
    );
  }



}

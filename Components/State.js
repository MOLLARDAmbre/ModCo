import React, { Component } from 'react';
import { AppState, Text, Alert } from 'react-native';
import { Permissions, Notifications } from 'expo';


export default class App extends Component { // This class is used to check when to send notifications to Kevin and do it


  constructor(props) {
    super(props)
    this.state = {
      appState: AppState.currentState,
    }
  }


  componentWillMount() {
    this._askPermissions(); // Make sure we always have the right permissions
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange); // deal witht he state of the app
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange); // deal with the state of the app
  }

  _handleAppStateChange = nextAppState => {
    if (nextAppState == "background") {
      this._sendNotification(); // If we have to send a notification we do so
    }
    this.setState({ appState: nextAppState });
  };

  async _sendNotification() { // This defines and sends the notification
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
    if (this.props.enCours) {
      const id = Notifications.presentLocalNotificationAsync(notification)
    }
  }

  async _askPermissions() { // This deals with asking for notification permissions
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      await Permissions.askAsync(Permissions.NOTIFICATIONS);
    }
  }


  render() { // renders nothing
    return (
      <Text style={{flex:1, marginTop: 0, padding: 0, backgroundColor:'#7be6fc'}}>
      </Text>
    );
  }



}

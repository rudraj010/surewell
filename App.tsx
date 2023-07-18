import { Text, View } from 'react-native';
import React, { Component } from 'react';
import AppContainer from './src/Navigation/Index';
import { requestUserPermission,NotificationListner } from './src/utils/PushNotification';

class App extends Component {
  
   componentDidMount() {
     requestUserPermission();
      NotificationListner();
    console.log('pri')
  }

  render() {
    return (
      
         <AppContainer />
       
    );
  }
}

export default App;

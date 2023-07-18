import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native'

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken()
  }
}


   const GetFCMToken=async()=> {
    let fcmtoken = await AsyncStorage.getItem('fcmtoken');
    console.log(fcmtoken,'old token')
    if (!fcmtoken) {
      try {
        fcmtoken = await messaging().getToken();
        if (fcmtoken) {
          console.log(fcmtoken,' token')
          await AsyncStorage.setItem('fcmtoken', fcmtoken);
        }  
      } catch (error) {
        console.log(error, 'error');
      }
    }
  }

//   await GetFCMToken(); // Call the GetFCMToken function asynchronously
 

 export const NotificationListner=()=>{

  messaging().onNotificationOpenedApp(remoteMessage => {
    
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  
    })
  
    messaging().onMessage(async (remoteMessage:any)=>{
      console.log('notification,' , remoteMessage)
      Alert.alert(
      remoteMessage.notification.title,
      remoteMessage.notification.body
    )
    })
    
    
    
     messaging()
     .getInitialNotification()
     .then(remoteMessage => {
       if (remoteMessage) {
         console.log(
           'Notification caused app to open from quit state:',
           remoteMessage.notification,
         );
       }
        
     });
    


 }


 
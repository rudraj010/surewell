import {
  Text,
  View,
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/App/Home/Home';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
const home = require('../Assets/home1.png');

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



class Screen extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="bottomNavigation" component={BottomNavigation} />
      </Stack.Navigator>
    );
  }
}


class BottomNavigation extends Component{
   
    
  // _renderIcon=(routeName: any, selectedTab: any)=> {
  //   let icon = '';

  //   switch (routeName) {
  //     case 'title1':
  //       icon = 'ios-home-outline';
  //       break;
  //     case 'title2':
  //       icon = 'settings-outline';
  //   }
  //   return(
  //     <Text>render</Text>
  //   )
  // }

  // renderTabBar = ({routeName, selectedTab, navigate}: any) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => navigate(routeName)}
  //       style={styles.tabbarItem}>
  //       {this._renderIcon(routeName, selectedTab)}
  //     </TouchableOpacity>
  //   );
  // };


  render(){
    
    return(
    //   <CurvedBottomBar.Navigator
    //   type="UP"
    //   style={styles.bottomBar}
    //   shadowStyle={styles.shawdow}
    //   height={55}
    //   circleWidth={50}
    //   bgColor="white"
    //   initialRouteName="title1"
    //   borderTopLeftRight
    //   renderCircle={({ selectedTab, navigate }) => (
    //     <Animated.View style={styles.btnCircleUp}>
    //       <TouchableOpacity
    //         style={styles.button}
    //         onPress={() => Alert.alert('Click Action')}
    //       >
    //         <Image source={home}/>
    //       </TouchableOpacity>
    //     </Animated.View>
    //   )}
    //   tabBar={this.renderTabBar}
    // >
    //   <CurvedBottomBar.Screen
    //     name="Home"
    //     position="LEFT"
    //     component={Home}
    //   />

      
    // </CurvedBottomBar.Navigator>

    <Tab.Navigator
     
    screenOptions={{
     tabBarShowLabel:false,
       tabBarStyle:{
         backgroundColor:'#cccc'
       } 
   }}
  
    >
     <Tab.Screen 
     name='home' 
     component={Home} 
     options={{
       tabBarIcon:({focused})=>(

         <Image source={home}
         resizeMode="contain"
         style={{
           width:30,
           height:30
         }}
         />
       ),
          headerShown:false,
        
     }}
      
     /> 
    
      
      
    
     
</Tab.Navigator>


    )
  }

}

 

class AppStack extends Component {

  render() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Screen" component={Screen} />
      </Drawer.Navigator>
    );
  }
}

export default AppStack;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});

function renderIcon() {
  throw new Error('Function not implemented.');
}

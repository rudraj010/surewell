import React, { Component,} from 'react'
import { Text, View } from 'react-native'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { NavigationContainer } from '@react-navigation/native';


interface Iperson{
    verification:boolean
}

 class AppContainer extends Component <{},Iperson>{

constructor(props:{})
{
    super(props)
  this.state={
       verification:false
    }

}

     

  render() {

    console.log(this.state.verification,'pp')

    return (
      <NavigationContainer>
    
       {
        this.state.verification?<AppStack/>:<AuthStack/>
       }
        </NavigationContainer>
    
    )
  }
}

export default AppContainer

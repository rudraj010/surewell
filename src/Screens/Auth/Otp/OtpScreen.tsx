import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
const loginImage = require('../../../Assets/login.png')
import { TextInput } from 'react-native-gesture-handler'
import { createStackNavigator, StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import { NavigationProp } from '@react-navigation/native';


interface Iperson{   
  inputValue: string;
}

interface ILoginScreenProps {
 navigation: NavigationProp<any>;
}
 
 class OtpScreen extends Component<ILoginScreenProps,Iperson> {

  constructor(props:any){
    super(props)
    this.state={
      inputValue:''
    }
  }

     handleInputChange=(text:string)=>{
      this.setState({inputValue:text})
      console.log(this.state.inputValue)
     }


   handleVerifyOTP = () => {
      //  const Otp='123456';
      //  if(this.state.inputValue===Otp){
      //   console.log('verification success')
         this.props.navigation.navigate('PersonalDetailsScreen');
       }
      //  else{
      //            console.log('please provide correct otp')
      //  }
      // };

      

  render() {
    return (
      <View style={styles.login}>
        <View style={styles.loginimagecontainer}>
            <Image source={loginImage} style={styles.loginImage}/>
        </View>
        
        <View style={{marginTop:25}}>
            <TextInput style={styles.input} placeholder='OTP'
            onChangeText={this.handleInputChange}
            value={this.state.inputValue}
            />
            <TouchableOpacity style={styles.btn}
            onPress={this.handleVerifyOTP}>
                <Text style={{color:'#fff',fontSize:18,fontWeight:'400'}}>Verify</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={{color:'#fff',fontSize:18,fontWeight:'400'}}>Cancle</Text>
            </TouchableOpacity>
            
        </View>
        
      </View>
    )
  }
}

export default OtpScreen


const styles= StyleSheet.create(

    
  {
login:{
         flex:1,
         backgroundColor:"#fff"
      },
      loginimagecontainer:{
          width:'100%',
          height:'50%'
      },
      loginImage:{
          width:'100%',
          height:'100%'
          
      },
      texts:{
           marginTop:18,
           marginLeft:18
      },
     

input:{
  width:'90%',
  marginTop:15,
  // paddingVertical:6,
  paddingHorizontal:10,
  backgroundColor:'#fff',
     borderRadius:8,
      alignSelf:'center',
      height:60,
      borderWidth:1,
      borderColor:'#B1B5B3'

},textinput:{
     width:'100%',
},
btn:{
    width:'90%',
    backgroundColor:'#038344',
    height:60,
    alignSelf:'center',
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
},


  }
)
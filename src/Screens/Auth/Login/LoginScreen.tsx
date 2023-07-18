import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler'
const loginImage = require('../../../Assets/login.png')
import { NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface Iperson{
    
     inputValue: string;
     name:string;
     email:string
}
interface ILoginScreenProps {
    navigation: NavigationProp<any>;
  }


  

 class LoginScreen extends Component<ILoginScreenProps,Iperson> {

    constructor(props:any){
        super(props)

        this.state={
        inputValue:'',
        name:'rajendra',
        email:'rajendrakumar25.rk11@gmail.com'
        // navigation: null,
        }
    }

    handleInputChange = (text: string) => {
        this.setState({ inputValue: text });
      };
    
      storeData = async () => {
        const data={ 
            inputValue:this.state.inputValue,
        name:this.state.name,
        email:this.state.email
              
        }
        try {
          await AsyncStorage.setItem('inputFileldData', JSON.stringify(data));
        
          console.log('Data stored successfully',data)
        } catch (error) {
          console.log('Error storing data: ', error);
        }
        this.props.navigation.navigate('OtpScreen');
      };

   
  render() {
    return (
      <View style={styles.login}>
        <View style={styles.loginimagecontainer}>
            <Image source={loginImage} style={styles.loginImage}/>
        </View>
        <View style={styles.texts}>
             <Text style={styles.text1}>Login To Continue</Text>
             <Text style={styles.text2}>Enter Your Mobile Number</Text>
             <Text style={styles.text3}>We Will Send You OTP To Verify</Text>
        </View>
        <View style={{marginTop:25}}>
            <TextInput style={styles.input} placeholder='Mobile Number'
            onChangeText={this.handleInputChange}
            value={this.state.inputValue}
            />
            <TouchableOpacity style={styles.btn}
            onPress={this.storeData}
            >
                <Text style={{color:'#fff',fontSize:16,fontWeight:'600'}}>Send OTP</Text>
            </TouchableOpacity>
            <View style={styles.condition}>
                <Text style={styles.conditiontext}>By continuing to agree our 
               <Text style={{color:'blue'}}> Terms and Condition </Text> 
                 and <Text style={{color:'blue'}}>Privacy Policy</Text></Text>
            </View>
        </View>
        
      </View>
    )
  }
}

export default LoginScreen

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
        text1:{
             color:'#038344',
            fontWeight:'600',
            fontSize:22,
            marginBottom:5
        },
        text2:{
            fontWeight:'400',
            fontSize:13,
            fontFamily:'serif'
         },
        text3:{
            fontWeight:'400',
            fontSize:13,
            marginTop:4,
            fontFamily:'serif'

         },

  input:{
    width:'90%',
    marginTop:15,
    paddingHorizontal:8,
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
  condition:{
    width:'90%',
    //  alignItems:'center',
    // justifyContent:'center'
     alignSelf:'center',
     marginTop:15
     
  },
  conditiontext:{
    fontSize:11,
    fontWeight:'400',
    fontFamily:'serif'
    
    
  }
    }
)
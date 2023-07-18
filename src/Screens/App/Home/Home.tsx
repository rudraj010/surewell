import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'
import { NavigationProp } from '@react-navigation/native';
const banner = require('../../../Assets/banner.jpg');
const logo = require('../../../Assets/logo.png');
const pregnancy = require('../../../Assets/pregnancy.jpg')
const jointpain = require('../../../Assets/jointpain.jpg')
const covid = require('../../../Assets/covid.jpg')
import Icon from 'react-native-vector-icons/Ionicons';// interface Iperson{
import { TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// }

// interface ILoginScreenProps {
//   navigation: NavigationProp<any>;
// }

 const data=[
  { id:1,
    img:pregnancy,
    text:'pregnancy'
   },
  { id:2,
    img:jointpain,
    text:'jointpain'

   },
  { id:3,
    img:covid,
    text:'covid'

   },
  
  ]

  class Home extends Component {
    
    

  render() {
    return (
      <View style={styles.home}>
<View style={styles.homeheader}>
  <View style={styles.homeimg}>
  <Image source={logo} style={styles.logoimg}/>
  </View>
  <View  style={styles.location}>

    <View style={styles.locationhead}>
      
    {/* <Icon name="location" size={10} color="#4F8EF7" />  */}
    </View> 
      
    <View>
      <Text>Jaipur</Text>
    </View>
  </View>
</View>
   <View style={styles.textinput}>
   {/* <MaterialCommunityIcons name="home"  size={30} /> */}
    <TextInput style={styles.input} placeholder='Search text Packages here'>
    </TextInput>
   </View>
<View style={styles.bannerhead}> 
          <Image source={banner} style={styles.bannerimg}/> 
    
</View>
   <View style={styles.imghead}>
            {
              data.map((item,i)=>{
                return(
                  <View key={i} style={styles.imgmidhead}>
                   <Image source={ item.img} style={styles.mapimg}/>
                  </View>
                )
              })
            }
             
  </View>
  </View>
    )
  }
}

export default Home

const styles=StyleSheet.create({
   home:{
    flex:1
   },
   homeheader:{
   width:'100%',
   justifyContent:'space-around',
   flexDirection:'row',
  //  height:50,
   marginTop:15,
   alignItems:'center'
   },

   homeimg:{
    width:'45%',
    alignItems:'center'
   },

   logoimg:{
      width:'100%',
      height:45,
      alignItems:'center'
   
   },
   location:{
       backgroundColor:'#fff',
       width:'30%',
       borderRadius:50,
       height:22,
      justifyContent:'space-around',
      flexDirection:'row'
   },
   locationhead:{
    
   },
   locationimg:{
    
   },
   textinput:{
     width:'90%',
     flexDirection:'row',
     alignSelf:'center',
     marginTop:20
   },
   input:{
    width:'100%',
    backgroundColor:'#fff',
    height:45,
    borderRadius:20
   },

   bannerhead:{
    width:'90%',
    alignSelf:'center',
   
   },
   bannerimg:{
    width:'100%',
    resizeMode:'center',
    height:190
    
   },
   imghead:{
    flexDirection:'row',

   },
   imgmidhead:{
    flexDirection:'row',
        width:'40%',
        marginHorizontal:8
   },

   mapimg:{
    // flexDirection:'row',
    width:'100%',
    height:160,
    borderRadius:15
   }

})
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Iperson{
  name: string;
  email: string;
}

interface ILoginScreenProps {
  navigation: NavigationProp<any>;
}

class PersonalDetailsScreen extends Component<ILoginScreenProps, Iperson> {
  constructor(props:any){
    super(props)
    this.state = {
      name: '',
      email: '',
    };
  }

  componentDidMount(): void {
    this.retriveData();
  }

  retriveData = async () => {
    try {
      const localData = await AsyncStorage.getItem('inputFileldData');
      if (localData) {
        const parsedData = JSON.parse(localData);
        this.setState(parsedData);
        console.log('Data retrieved successfully', parsedData);
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  }

  handleNameChange = (text: string) => {
    this.setState({ name: text });
  }

  handleEmailChange = (text: string) => {
    this.setState({ email: text });
  }

  handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('inputFileldData', JSON.stringify(this.state));
      console.log('Data saved successfully',this.state);
      this.props.navigation.navigate('Home');
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };

  render() {
    const { name, email } = this.state;

    return (
      <View style={styles.personalDetailsScreen}>
        <View style={{marginTop: 25}}>
          <TextInput
            style={styles.input}
            placeholder='Name'
            value={name}
            onChangeText={this.handleNameChange}
          />
          <TextInput
            style={styles.input}
            placeholder='Email Address'
            value={email}
            onChangeText={this.handleEmailChange}
          />
          <TouchableOpacity style={styles.btn} onPress={this.handleSubmit}>
            <Text style={{color:'#fff', fontSize:16, fontWeight:'600'}}
            
            >Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PersonalDetailsScreen;

const styles= StyleSheet.create({
  personalDetailsScreen: {
    flex: 1,
    backgroundColor:"#fff"
  },
  loginimagecontainer: {
    width: '100%',
    height: '50%'
  },
  loginImage: {
    width: '100%',
    height: '100%'
  },
  input: {
    width: '90%',
    marginTop: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignSelf: 'center',
    height: 60,
    borderWidth: 1,
    borderColor: '#B1B5B3'
  },
  textinput: {
    width: '100%',
  },
  btn: {
    width: '90%',
    backgroundColor: '#038344',
    height: 60,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

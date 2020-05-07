import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import { Constants } from 'expo';
export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    var { height, width } = Dimensions.get('window');
    this.state = {
      screenHeight: height, screenWidth: width,
      staffId: '',
      password: '',
    };
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Sign In Button pressed " + viewId);
  };

  componentDidMount() { }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer1}>

          <TextInput
            style={styles.inputs}
            placeholder="Enter Staff ID"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={staffId => this.setState({ staffId: staffId })}
          />
          <Image
            style={styles.inputIcon}
            source={require('../assets/contactIcon.png')}
          />
        </View>
        <View style={styles.inputContainer2}>

          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password: password })}
          />
          <Image
            style={styles.inputIcon}
            source={require('../assets/passwordIcon.png')}
          />
        </View>

        <TouchableOpacity style={styles.navigateButton} onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text></TouchableOpacity>

        <TouchableOpacity style={styles.submitButtonText} onPress={() => this.props.navigation.navigate('AddEvent')}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#99ffcc"
  },
  inputContainer1: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputContainer2: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
    color: '#FF0018'
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: 250,
    borderRadius: 30
  },


  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    marginTop: 5,
    height: 60,
  },
  submitButtonText: {
    color: '#FFFFFF',
    backgroundColor: '#FF0018',
    width: 250,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signInText: {
    color: '#FFFFFF',
    alignItems: 'center'
  },
  navigateButton: {
    //  backgroundColor:'#99ffcc',
    width: 250,
    height: 30,
    marginLeft: 248,
  },
  forgotPasswordText: {
    color: '#000000',
    // textDecorationLine:'underline',
    fontWeight: 'bold',
    marginRight: 1,
  },
})
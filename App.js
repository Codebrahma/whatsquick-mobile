import React, { Component } from 'react'
import { View, TextInput, Linking, Button, StyleSheet } from 'react-native'
import Toolbar from './toolbar';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View>
        <Toolbar toolbarStyles={styles.toolbar}
          toolbarTitleStyles={styles.title}
          title="WhatsQuick" />
        <View style={{ padding: 10 }}>
          <TextInput
            style={[{ height: 40 }, styles.formFieldContainer]}
            underlineColorAndroid='transparent'
            placeholder="Enter number with country code" keyboardType="phone-pad"
            onChangeText={(text) => this.setState({ text })}
          />
          <Button
            onPress={() => { Linking.openURL('https://api.whatsapp.com/send?phone=' + this.state.text) }
            }
            title="Send Message"
          />
        </View>
      </View>
    )
  }
}

const baseStyles = {
  title: {
    color: '#579adf',
    textAlign: 'center',
    fontSize: 20
  },
  toolbar: {
    backgroundColor: '#FFFFFF',
    height: 50
  },
  formFieldContainer: {
    elevation: 1.5,
    marginTop: 20,
    borderRadius: 3,
    backgroundColor: '#F2F2F2',
    marginBottom: 20,
    padding: 5
  }
}
const styles = StyleSheet.create(baseStyles);

export default App
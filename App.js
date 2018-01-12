import React, { Component } from 'react'
import { View, TextInput, Linking, Button } from 'react-native'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Enter number with country code" keyboardType="phone-pad"
          onChangeText={(text) => this.setState({ text })}
        />
        <Button
          onPress={() => { Linking.openURL('https://api.whatsapp.com/send?phone='+this.state.text) }
          }
          title="Send Message"
        />
      </View>
    )
  }
}

export default App
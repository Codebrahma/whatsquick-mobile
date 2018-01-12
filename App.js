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
        <Toolbar toolbarStyles={ styles.toolbar }
        toolbarTitleStyles={ styles.title }
          title="WhatsQuick" />
        <View style={{padding: 10}}>
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
      </View>
    )
  }
}

const baseStyles = {
	container: {
		flex: 1,
    backgroundColor:'#F2F2F2',
    
	},
	title: {
		color: '#579adf',
    textAlign: 'center',
		fontSize: 20
	},
	toolbar: {
    backgroundColor: '#FFFFFF',
    height: 50
  },
  tabbar: {
    backgroundColor:'#FFFFFF',
  },
  selectedTabStyle: {
		backgroundColor: '#F2F2F2',
		borderColor: '#579adf',
		borderTopWidth: 1
  },
  iconStyle: {
    width: 25,
    height:25
  }
}
const styles = StyleSheet.create(baseStyles);

export default App
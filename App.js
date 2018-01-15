import React, { Component } from 'react'
import { View, TextInput, Linking, Button, StyleSheet, Clipboard, ToastAndroid } from 'react-native'
import Toolbar from './toolbar';

const phoneNumberPattern = '/^[\+]/^\d+$/'
const digitsPattern = /^\+?(([0-9]+[-. ]*[0-9]+)+)+$/

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: '',
      clipboardContent: ''
    }
  }

  componentDidMount() {
    this.readFromClipboard();
  }

  readFromClipboard = async () => {   
    const content = await Clipboard.getString();
    if (digitsPattern.test(content)) {
      this.setState({
        clipboardContent: content,
      })
    }
  };

  pasteFromCBText = async () => {
    const content = await Clipboard.getString();   
    if (digitsPattern.test(content)) {
      this.setState({
        clipboardContent: content,
        inputText: content
      })
    } else {
      ToastAndroid.show('Clipboad empty or Invalid content', ToastAndroid.SHORT);
      this.setState({
        clipboardContent: ''
      })
    }  
  }

  render() {
    return (
      <View>
        <Toolbar toolbarStyles={styles.toolbar}
          toolbarTitleStyles={styles.title}
          title="WhatsQuick" />
        <View style={{ padding: 10 }}>
        <View style={ styles.inputContainer }>
          
          <TextInput
            style={[styles.formFieldContainer]}
            autoFocus={true}  
            underlineColorAndroid='transparent'
            placeholder="Enter number with country code" keyboardType="phone-pad"
            value={this.state.inputText}
            onChangeText={(inputText) => this.setState({ inputText })}
          />
            <Button   
              onPress={ this.pasteFromCBText }
              title="Paste"
            />
            </View>
          <View style={ styles.buttonsContainer }>
            
            <Button
              disabled={this.state.inputText === ''}  
              onPress={() => { Linking.openURL('https://api.whatsapp.com/send?phone=' + this.state.inputText) }
              }
              title="Send Message"
            />
          </View>
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
    flex: 1,
    elevation: 1.5,
    borderRadius: 3,
    backgroundColor: '#F2F2F2',
    marginRight: 15,
    padding: 5,
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10    
  }
}
const styles = StyleSheet.create(baseStyles);

export default App
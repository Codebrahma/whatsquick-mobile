'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';

export default function(props) {
	return (
		<View style={ [ props.toolbarStyles, styles.toolbarStyles, { marginTop: (Platform.OS === 'ios') ? 20 : 0 } ] }>
			<View style={{flex: 5}}>
      	<Text style={ [props.toolbarTitleStyles] }>{ props.title }</Text>
      </View>
    </View>
	)
};

const styles = StyleSheet.create({
	toolbarStyles: {
		padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
		justifyContent: 'center',
		elevation: 2,
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
	},
	iconStyle: {
		width: 20,
		height: 20
	}
})

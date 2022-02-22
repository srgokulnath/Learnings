import React from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
const Row = props => (
  <View style={{padding:10}}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
);
export default Row

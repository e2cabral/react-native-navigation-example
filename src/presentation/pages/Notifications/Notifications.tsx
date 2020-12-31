import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const Notifications = () => {
  return (
    <View style={style.view}>
      <Text style={style.text}>
        Notifications Drawer
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
  }
});

export default Notifications;

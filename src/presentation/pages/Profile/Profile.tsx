import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const Profile = () => {
  return (
    <View style={style.view}>
      <Text style={style.text}>
        Profile Drawer
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

export default Profile;

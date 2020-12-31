import {StyleSheet, Text, View} from "react-native";
import React from "react";

const PremiumAccount = () => {
  return (
    <View style={style.view}>
      <Text style={style.text}>
        Premium Account Tab
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

export default PremiumAccount;

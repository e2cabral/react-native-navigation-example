import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Signup = (props: any) => {
  return (
    <View style={style.view}>
      <Text style={style.text}>
        Signup Component
      </Text>

      <Button
        title="Make your Login"
        onPress={() => props.navigation.navigate('Login')} />
    </View>
  );
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

export default Signup;

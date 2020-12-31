import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Login = (props: any) => {
  return (
    <View style={style.view}>
      <Text style={style.text}>Login Component</Text>
      <Button
        title="Go to Sign up"
        onPress={() => props.navigation.navigate('SignupTabs')} />

      <Button
        title="Go to Profile"
        onPress={() => props.navigation.navigate('Drawer')} />
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

export default Login;

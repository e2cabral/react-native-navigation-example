import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";

import Login from "../presentation/pages/Login/Login";
import SignupTabs from "../presentation/routes/SignupTabs/SignupTabs";
import Drawer from "../presentation/routes/Drawer/Drawer";

const Stack = createStackNavigator();
const DrawerPage = createDrawerNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={
          { headerStyle:
            { backgroundColor: '#6973A2' },
            headerTintColor: '#fff'}
        }>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignupTabs" options={{ title: 'Sign Up Pages' }} component={SignupTabs} />
        <DrawerPage.Screen name="Drawer" options={{ title: 'Drawer Page' }} component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from '@expo/vector-icons';

import Signup from "../../pages/Signup/Signup";
import PremiumAccount from "../../pages/PremiumAccount/PremiumAccount";

const Tab = createBottomTabNavigator();

const SignupTabs = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Signup"
          component={Signup}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => <Ionicons name="enter-outline" size={40} />
          }} />

        <Tab.Screen
          name="PremiumAccount"
          component={PremiumAccount}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => <Ionicons name="medal-outline" size={40} />
          }} />
      </Tab.Navigator>
  );
}

export default SignupTabs;

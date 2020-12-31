import React from 'react';
import Profile from "../../pages/Profile/Profile";
import Notifications from "../../pages/Notifications/Notifications";
import {createDrawerNavigator} from "@react-navigation/drawer";

const DrawerPage = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerPage.Navigator>
      <DrawerPage.Screen name="Profile" component={Profile} />
      <DrawerPage.Screen name="Notifications" component={Notifications} />
    </DrawerPage.Navigator>
  )
}

export default Drawer;

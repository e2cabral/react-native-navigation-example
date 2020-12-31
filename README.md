### React Native Navigation Examples

This project is a basic example of how to work with multiple types of routes
in React Native using React Navigation.

#### Stack Example

This is a simple example of how to create a Stack Route:
```tsx
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
```
#### Tabs Example

This is a simple example of how to create a Tabs Route:
```tsx
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
```

#### Drawer Example

This is a simple example of how to create a Drawer Route:
```tsx
<DrawerPage.Navigator>
  <DrawerPage.Screen name="Profile" component={Profile} />
  <DrawerPage.Screen name="Notifications" component={Notifications} />
</DrawerPage.Navigator>
```

The first example join all these three types of navigation.

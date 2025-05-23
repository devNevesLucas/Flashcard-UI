import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigator from './navigator/AuthNav';
import MainNavigator from './navigator/MainNav';
import { useState } from 'react';
import RootContainer from './RootContainer';
import { UserProvider } from './context/user/UserProvider';

export default function App() {

  return (
    <UserProvider>
      <RootContainer />
    </UserProvider>
  );

}


/*
const [userLogado, setUserLogado] = useState(false);

<NavigationContainer style={{backgroundColor: "#4361EE"}}>
  {userLogado? <MainNavigator /> : <AuthNavigator /> }
</NavigationContainer>


<SafeAreaProvider style={styles.container}>
</SafeAreaProvider>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

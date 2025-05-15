import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AuthNavigator from './navigator/AuthNav';
import MainNavigator from './navigator/MainNav';
import { useState } from 'react';

export default function App() {

  const [userLogado, setUserLogado] = useState(false);

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        {userLogado? <MainNavigator /> : <AuthNavigator /> }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

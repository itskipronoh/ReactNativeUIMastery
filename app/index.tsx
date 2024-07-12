import React, { useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../components/screens/HomeScreen';
// import SettingsScreen from '../components/screens/SettingsScreen';

import { I18n } from 'i18n-js';
import en from '../components/langs/en.json';
import gr from '../components/langs/gr.json';
import it from '../components/langs/it.json';
import tr from '../components/langs/tr.json';
const i18n = new I18n({ en, gr, it, tr });

const Stack = createNativeStackNavigator();

import { AppContext } from '../components/context/AppContext';

export default function App() {

  const [locale, setLocale] = useState('tr');

  const appContext = useMemo(() => {
    return {
      t: (scope: string, options: any) => {
        return i18n.t(scope, { locale, ...options });
      },
      locale,
      setLocale
    }
  }, [locale]);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar />
     
        <AppContext.Provider value={appContext}>
          <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            {/* <Stack.Screen name='Settings' component={SettingsScreen} /> */}
          </Stack.Navigator>
        </AppContext.Provider>
     
    </SafeAreaProvider>
  );
}
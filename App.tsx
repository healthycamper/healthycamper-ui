import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import Navigator from './routes/homeStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import authContext from './components/authContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();
  const [authenticated, setAuthenticated] = useState(false);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <authContext.Provider value={{ authenticated, setAuthenticated }}>
        <SafeAreaProvider>
          <StatusBar />
          <Navigator />
        </SafeAreaProvider>
        </authContext.Provider>
    );
  }
}

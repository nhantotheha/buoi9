import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator'; // Cập nhật đường dẫn
import { getLoginState } from './src/utils/auth'; // Cập nhật đường dẫn

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLoginState = async () => {
      const loggedIn = await getLoginState();
      setIsLoggedIn(loggedIn);
    };
    checkLoginState();
  }, []);

  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#f4a261" />
      </View>
    );
  }

  return <AppNavigator isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
};

export default App;
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Onboarding from './src/screens/Onboarding/index';
import Login from './src/screens/Login/index';
import Signup from './src/screens/SignUp/index';
import Home from './src/screens/Home/index';
import History from './src/screens/History/index';
import Profile from './src/screens/Profile/index';
import Donate from './src/screens/Donate/index';

export default function App() {
  const [screen, setScreen] = useState('onboarding');

  const goToLogin = () => setScreen('login');
  const goToSignup = () => setScreen('signup');
  const goToHome = () => setScreen('home');
  const goBack = () => setScreen('onboarding');
  const goToHistory = () => setScreen('history');
  const goToProfile = () => setScreen('profile');
  const goToDonate = () => setScreen('donate'); // 🔧 Corrigido aqui

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screen === 'donate' && <Donate goToHome={goToHome} />} {/* 🔧 Corrigido aqui */}
      {screen === 'onboarding' && <Onboarding goToLogin={goToLogin} goToSignup={goToSignup} />}
      {screen === 'login' && <Login goBack={goBack} goToSignup={goToSignup} goToHome={goToHome} />}
      {screen === 'signup' && <Signup goBack={goBack} goToLogin={goToLogin} />}
      {screen === 'home' && (
        <Home
          goToHome={goToHome}
          goToProfile={goToProfile}
          goToHistory={goToHistory}
          goToDonate={goToDonate} // 🔧 importante passar isso pro Card
        />
      )}
      {screen === 'history' && (
        <History
          goToHome={goToHome}
          goToHistory={goToHistory}
          goToProfile={goToProfile}
        />
      )}
      {screen === 'profile' && (
        <Profile
          goToHome={goToHome}
          goToHistory={goToHistory}
          goToProfile={goToProfile}
        />
      )}
    </SafeAreaView>
  );
}

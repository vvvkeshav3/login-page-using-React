import React, { useState, useEffect } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AuthContext from './components/store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    if (storedLoginState === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // Check for email and password
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', '1');
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}
    >
      <MainHeader />
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
      {/* here we use onLogout we will not using context in Home because we are directly
      using it not passing it forward(passing forward to Button (UI) component is not 
      considered passing props forward */}
    </AuthContext.Provider>
  );
}

export default App;

import React, { useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // Check for email and password
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home />}
    </React.Fragment>
  );
}

export default App;

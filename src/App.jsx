import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import NavBar from './components/NavBar';
import VerifiedAccountPage from './pages/VerifiedAccountPage';


axios.defaults.baseURL = 'http://127.0.0.1:8000'

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
        <NavBar />
        <Box component="main" sx={{ flexGrow: 1, width: '100%', p: 3 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage setIsLogin={setIsLogin} />} />
            <Route path='/auth/verifiy' element={<VerifiedAccountPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
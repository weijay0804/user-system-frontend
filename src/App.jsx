import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import NavBar from './components/NavBar';
import VerifiedAccountPage from './pages/VerifiedAccountPage';
import UserMePage from './pages/UserMePage';

function App() {

  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
        <NavBar />
        <Box component="main" sx={{ flexGrow: 1, width: '100%', p: 3 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path='/auth/verifiy' element={<VerifiedAccountPage />} />
            <Route path='/me' element={<UserMePage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
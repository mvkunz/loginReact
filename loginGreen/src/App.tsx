import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={ <ForgotPassword /> } />
      <Route path="/welcome" element={ <Welcome /> } />
    </Routes>
  )
}

export default App;


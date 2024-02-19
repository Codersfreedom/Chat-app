import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import Home from './pages/Home';



function App() {
  const { authUser } = useAuthContext();


  return (
    <div>

      <Routes>

        <Route path="/" element={authUser ? <Home /> : <Navigate to={'/login'} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />

      </Routes>
      <Toaster />

    </div>
  )
}

export default App

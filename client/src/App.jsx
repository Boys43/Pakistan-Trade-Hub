import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserDashboard from './pages/UserDashboard'
import SellerDashboard from './pages/SellerDashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/userdashboard' element={<UserDashboard />}></Route>
        <Route path='/sellerdashboard' element={<SellerDashboard />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App


import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Add, Cards, Erorr, Home, Service } from './pages';
import { Login, Navbar, ProtectedRoute } from './components';
import Crads from './pages/Crads';


function App() {

  return (
    <>
    <Navbar />
   <Routes>
    <Route path='/' element= { <ProtectedRoute >  <Home/> </ProtectedRoute> }/>
    <Route path='/add' element={<ProtectedRoute >   <Add/>  </ProtectedRoute>}/>
    <Route path='/cards' element={<ProtectedRoute > <Cards

     /></ProtectedRoute>}/>
    <Route path='/service' element={  <ProtectedRoute >  <Service/> </ProtectedRoute> }/>
 <Route path='login' element={ <Login/> }/>
 <Route path='/crads' element={ <ProtectedRoute> <Crads/> </ProtectedRoute>}/>
    <Route path='*' element={ <Erorr/>}/>
   </Routes>
    </>
  )
}

export default App

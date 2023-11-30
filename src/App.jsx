
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Add from './pages/Add';
import Cards from './pages/Cards';
import Service from './pages/Service';
import Error from './pages/Erorr';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { Route, Routes } from 'react-router-dom'
import { useGlobalContext } from './contex';


function App() {

  const { } = useGlobalContext();
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
    <Route path='*' element={ <Error/>}/>
   </Routes>
    </>
  )
}

export default App

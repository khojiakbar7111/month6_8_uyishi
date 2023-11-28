import { useEffect, useState } from 'react'

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
import { getStore, getUser } from './utilis';
import { uid } from 'uid';


function App() {
   const [ name, setName] = useState('');
   const [ psw, setPsw] = useState('');
 const [ user, setUser] = useState(getUser('user'))
 const id = uid();

 const [pname, setPname] = useState('');
 const [ price, setPrice] = useState('');

   const[editID,setEditID] = useState(null);
    const[edit, setEdit] = useState(false );
    const [products, setProducts] = useState(getStore('products'));



 const login = () => {
  const newUser = {id:id, name:name, psw:psw};
  setUser(newUser)
 }

 const addProduct = () => {
      if(!pname && !price){
        console.log('error');
      } else if (pname && edit){
     setProducts(products.map((item) => {
      if(item.id === editID) {
        return{ ...item, name:pname , price:price}
      }
      return item
     }))
      } else{
         const newProduct = {id:id,  name: pname, price: price }
      setProducts([...products, newProduct])
      }

    }

    const deleteItem = (id) => {
     const newItem = products.filter((item) => item.id !== id)
     setProducts(newItem);
    }

    const ediItem = (id) => {
      const newItem = products.find((item) => item.id === id)
      setEdit(true);
      setEditID(id);
      setPname(newItem.name);
      setPrice(newItem.price)
    }


 useEffect(() => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('products' , JSON.stringify(products))
 },[user, products])





  return (
    <>
    <Navbar user={user}/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add' element={<ProtectedRoute user={user}> <Add edit={edit} setEdit={setEdit}  pname={pname} setPname={setPname} price={price} setPrice={setPrice} addProduct={ addProduct}/> </ProtectedRoute>}/>
    <Route path='/cards' element={<Cards  ediItem={ediItem} setEdit={setEdit} products={ products} deleteItem={deleteItem} />}/>
    <Route path='/service' element={<Service/>}/>
 <Route path='login' element={<Login login={login} name={name} setName={ setName} psw={psw} setPsw={setPsw}/>}/>
    <Route path='*' element={ <Error/>}/>
   </Routes>
    </>
  )
}

export default App

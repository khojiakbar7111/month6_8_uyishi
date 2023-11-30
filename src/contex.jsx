import { createContext, useContext, useEffect, useState } from "react";
import { getStore, getUser } from "./utilis";
import { uid } from "uid";



 const AppContext = createContext();

 const AppProvider = ({children}) => {

     const [ name, setName] = useState('');
     const [ psw, setPsw] = useState('');
     const [ user, setUser] = useState(getUser('user'))


 const [pname, setPname] = useState('');
 const [ price, setPrice] = useState('');

   const[editID,setEditID] = useState(null);
    const[edit, setEdit] = useState(false );
    const [products, setProducts] = useState(getStore('products'));

const id = uid();

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

     const ediItem = (id) => {
      const newItem = products.find((item) => item.id === id)
      setEdit(true);
      setEditID(id);
      setPname(newItem.name);
      setPrice(newItem.price)
    }
    const deleteItem = (id) => {
     const newItem = products.filter((item) => item.id !== id)
     setProducts(newItem);
    }

 useEffect(() => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('products' , JSON.stringify(products))
 },[user, products])



    return(
        <AppContext.Provider value={{name,
        setName,
        psw,
        setPsw,
         user,
          login,
           pname,setPname,
          price,setPrice,
          editID, setEditID,
          edit,setEdit,
          products,setProducts ,
          addProduct,
          ediItem, deleteItem, useEffect} } >
            {children}
        </AppContext.Provider>
    )
 }

 export const useGlobalContext = () =>{
    return useContext(AppContext);
 }
 export{AppContext, AppProvider};
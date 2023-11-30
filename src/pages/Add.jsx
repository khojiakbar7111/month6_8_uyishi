import React from 'react'
import { useGlobalContext } from '../contex'

export default function Add() {
  const {pname, setPname, price, setPrice, addProduct, edit, } = useGlobalContext();
  return (
    <div>
       <form className='add_box'>
            <input className='add_name1' type="text"  name="" id=''placeholder='mahsulot nomi'  value={pname} onChange={(e) => setPname(e.target.value) } />
            <br />
            <input className='add_name' type="text" name='' id=''   value={price} placeholder='mahsulot narxi'  onChange={(e) => setPrice(e.target.value)} />
            <br />
            <button className='add_btn' onClick={() => addProduct()}>
              {edit ? 'edit' : 'add'}
            </button>
        </form>
    </div>
  )
}

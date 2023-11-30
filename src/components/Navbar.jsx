import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../contex'

export default function Navbar() {
  const {user} = useGlobalContext();
  return (
    <div className='navbar'>
        <ul className='nav_list'>
            <li >
              <Link className='nav_link' to='/'>home</Link>
            </li>
            <li >
              <Link className='nav_link' to='/add'> { user && 'add'}</Link>
            </li>
            <li >
              <Link className='nav_link' to='/service'>service</Link>
            </li>
            <li >
              <Link className='nav_link' to='/cards'>Products</Link>
            </li>
 <Link className='nav_btn' to='/login'>
   <button className='nav_link_btn'>{ user ? user.name : ' login'}</button>
 </Link>

        </ul>
    </div>
  )
}

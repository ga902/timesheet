import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Mycontext from '../../context/UserState';
const Header = () => {
    const{isLoggedIn,userId}=useContext(Mycontext);
    useEffect(()=>{
        console.log(isLoggedIn);
        console.log(userId);

      })
  return (
    <ul>
            {isLoggedIn ? (
                <li>
                    <Link to='/'>Home</Link>
                </li>
            ) : (
                <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/registration">Registration</Link>
                    </li>
                </>
            )}
        </ul>
  )
}
export default Header;

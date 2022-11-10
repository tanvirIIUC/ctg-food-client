import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
  
  

  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
    
  }

  const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    {
      user?.email ?
        <>
          <li><Link to="/myReview">MyReview</Link></li>
          <li><Link to="/addfood">Add Food</Link></li>
          
        </>
        :
        <li></li>
    }

  </>
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <div className='flex'>
        <img className='w-10' src="favicon.ico" alt="" />
        <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold">CTG FOOD</Link>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
      {
      user?.email ?
        <>
         
          <Link className='me-2 btn' onClick={signOut}> Logout</Link>
        </>
        :
        <Link to="/login" className='me-2 btn'>Login</Link>
    }

        {/* <a className="btn">Get started</a> */}
      </div>
    </div>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import './styles.css';

const Navbar = () => {
  return <nav className='Navbar'>
    {routes.map(({ path, navText }) =>
      navText ? <Link key={path} className='Navbar_link' to={path}>{navText}</Link> : null
    )}
  </nav>;
};

export default Navbar;

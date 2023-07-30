import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="header-logo">
      <Link to={"/"}><span className="text-logo">Beauty Products</span></Link>
    </div>
  );
};

export default Logo;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 text-white bg-blue-600">
    <div className="container mx-auto flex justify-center items-center">
      <Link to="/" className="text-2xl font-semibold text-center">
        Signup/Login
      </Link>
    </div>
  </header>
  );
};

export default Header;

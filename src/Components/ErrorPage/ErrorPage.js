import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <h2>Oh no! The page you're looking for either moved or doesn't exist.</h2>
      <h3>Try going <Link to='/'>home.</Link></h3>
      <p>Error status: INSERT ERROR HERE</p>
    </>
  );
}

export default ErrorPage;
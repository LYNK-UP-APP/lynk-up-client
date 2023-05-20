import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <h2 data-cy='error-title'>Oh no! The page you're looking for either moved or doesn't exist.</h2>
      <h3>Try going <Link  data-cy='home-link' to='/'>home.</Link></h3>
      <p data-cy='error-status'>Error status: INSERT ERROR HERE</p>
    </>
  );
}

export default ErrorPage;
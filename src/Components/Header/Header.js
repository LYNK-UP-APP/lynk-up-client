import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
  const history = useHistory();

  const handleChange = e => {
    history.push(e.target.value);
  }

  return (
    <header>
      <img className='header-logo' src={logo} />
      <select className="nav-drop" onChange={handleChange}>
        <option value="/groups"> Groups </option>
        <option value="/friends"> Friends </option>
        <option value="/dashboard"> Dashboard </option>
      </select>
    </header>
  );
}

export default Header;
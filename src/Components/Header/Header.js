import React from 'react'
import { useHistory } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
  const history = useHistory();

  const handleChange = e => {
    history.push(e.target.value);
  }

  return (
    <header>
      <img data-cy='logo' className='header-logo' alt='Lynk Up Logo' src={logo} />
      <select data-cy='dropdown' className="nav-drop" onChange={handleChange}>
        <option value="/dashboard"> Dashboard </option>
        <option value="/groups"> Groups </option>
        <option value="/friends"> Friends </option>
        <option value="/new-event"> New Event </option>
      </select>
    </header>
  );
}

export default Header;
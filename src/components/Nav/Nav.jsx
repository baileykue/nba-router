import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Nav.css';

export default function Nav() {
  return (
    <header className={styles.nav}>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/episodes">Episodes</NavLink>
      <NavLink to="/storeNextDoor">Store Next Door</NavLink>
    </header>
  );
}

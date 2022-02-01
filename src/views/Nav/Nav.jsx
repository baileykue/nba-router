import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/episodes">Episodes</NavLink>
      <NavLink to="/storeNextDoor">Store Next Door</NavLink>
    </div>
  );
}

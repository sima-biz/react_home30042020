import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom"

// let s = {
//   'nav': 'Navbar_nav__1MHpG',
//   'item': 'Navbar_item__2kKbZ'
//   'active': 'Navbar_active__Mn6bg'  
// }

// let c1 = 'item';
// let c2 = 'active';
// let classes = c1 + " " + c2;
// let classesNew = `${c1} ${c2}`;

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="">Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
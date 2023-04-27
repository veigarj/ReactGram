import styles from './Navbar.module.css'

// Components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
       <nav className={styles.nav}>
      <Link to="/">
        <h2>ReactGram</h2>
      </Link>
      <form className={styles.search_form}>
        <BsSearch />
        <input
          type="text"
          placeholder="Pesquisar"
        />
      </form>
      <ul className={styles.nav_links}>
      <Link to="/">
        <BsHouseDoorFill />
      </Link>
      <NavLink to="/login">Entrar</NavLink>
      <NavLink to="/register">Cadastrar</NavLink>
      
      </ul>

      
    </nav>
  )
}

export default Navbar
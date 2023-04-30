import styles  from "./Auth.module.css";
// Components
import { Link } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className={styles.register}>
      <h2>ReactGram</h2>
      <p>Cadastre-se para ver as fotos  dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Nome"
          // onChange={(e) => setName(e.target.value)}
          // value={name}
        />
        <input
          type="email"
          placeholder="E-mail"
          // onChange={(e) => setEmail(e.target.value)}
          // value={email}
        />
        <input
          type="password"
          placeholder="Senha"
          // onChange={(e) => setPassword(e.target.value)}
          // value={password}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          // onChange={(e) => setConfirmPassword(e.target.value)}
          // value={confirmPassword}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui</Link>
      </p>
    </div>
  )
}

export default Register
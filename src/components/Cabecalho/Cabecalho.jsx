"use client";
import Link from "next/link";
import { useState } from "react";

export default function Cabecalho() {

  
  
  const handleLogout = ()=>{
    sessionStorage.removeItem("token-user");
    sessionStorage.removeItem("user-obj");
    window.location.href = "/";
  }

  if(sessionStorage.getItem("token-user")){
    const usuario = JSON.parse(sessionStorage.getItem("user-obj"));
  return (
    <header className="cabecalho">
      <div>
        <p> {usuario != null ? `Olá :${usuario.email}`: ""}</p>
      </div>
      <h2>MEUS PRODUTOS</h2>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/" onClick={handleLogout}>LOGOUT</Link>
        </li>
        <li>
          <Link href="/consumo/eletro-view">ELETRÔNICOS</Link>
        </li>
        <li>
          <Link href="/produtos/calca">CALÇA</Link>
        </li>
        <li>
          <Link href="/produtos/camisa">CAMISA</Link>
        </li>
        <li>
          <Link href="/produtos/meia">MEIA</Link>
        </li>
        <li>
          <Link href="/produtos/tenis">TÊNIS</Link>
        </li>
      </ul>
    </header>
  );
  }else{
    return (
      <header className="cabecalho">
        <h2>MEUS PRODUTOS</h2>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/login">LOGIN</Link>
          </li>
        </ul>
      </header>
    );
  }
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Cabecalho() {

  const pathAtual = usePathname();

  return (
    <header className="cabecalho">
      <h2>MEUS PRODUTOS</h2>
      <ul>
        <li>
          <Link href="/" className={pathAtual == "/" ? "active" : ""} >HOME</Link>
        </li>
        <li>
          <Link href="/consumo/eletro-view" className={pathAtual == "/consumo/eletro-view" ? "active" : ""}>ELETRÔNICOS</Link>
        </li>
        <li>
          <Link href="/produtos/calca" className={pathAtual == "/produtos/calca" ? "active" : ""}>CALÇA</Link>
        </li>
        <li>
          <Link href="/produtos/camisa" className={pathAtual == "/produtos/camisa" ? "active" : ""}>CAMISA</Link>
        </li>
        <li>
          <Link href="/produtos/meia" className={pathAtual == "/produtos/meia" ? "active" : ""}>MEIA</Link>
        </li>
        <li>
          <Link href="/produtos/tenis" className={pathAtual == "/produtos/tenis" ? "active" : ""}>TÊNIS</Link>
        </li>
      </ul>
    </header>
  );
}

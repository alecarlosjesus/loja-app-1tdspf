import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <h2>MEUS PRODUTOS</h2>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/usuarios-git">GIT-USERS</Link>
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
}

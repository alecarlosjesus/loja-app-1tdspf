import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>

      <div>


        <figure>
          <Image src="/img/black-640×360_1280.png" alt="Placa escura" width={640} height={360}/>
        </figure>

      </div>

    </>
    )
}

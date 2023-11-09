"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const navigate = useRouter();

  useEffect(() => {
    if(sessionStorage.getItem("token-user")){
   navigate.refresh();
  }
  }, [navigate])

  return (
    <>
      <h1>HOME</h1>

      <div>
 
        <figure>
          <Image src="/img/black-640×360_1280.png" alt="Placa escura" width={640} height={360}/>
        </figure>

      </div>

    </>
    );
}

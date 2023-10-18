"use client"
export default function FormMethods() {

    const handlePost = ()=>{
        fetch("http://localhost:3000/api/hello",{
            method:"POST",
            body:JSON.stringify({"nome":"maria","idade":30}),
        })
    }

    const handleGet = ()=>{
        fetch("http://localhost:3000/api/hello",{
            method:"GET"
        })
        .then(res => res.json())
    }

  return (
    <div>
        <div>
            <h1>REQUESTS</h1>
            <div>
                <div><button onClick={handlePost}>POST</button></div>
                <div><button onClick={handleGet}>GET</button></div>
            </div>
        </div>
    </div>
  )
}

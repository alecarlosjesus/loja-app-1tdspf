import { NextResponse } from "next/server";

export default function handler(req,res) {

    


    if(req.method === "POST"){
        const msg = {"METHOD":"POST"};
        return NextResponse.json(msg)
    }else{
        const msg = {"METHOD":"GET"};
        return NextResponse.json(msg)
    }

}


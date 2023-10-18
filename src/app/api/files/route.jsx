
import { join } from "path";
import { writeFile } from "fs/promises";

export default function handler(req,res) {
    
    if(req.method === "POST"){
        return res.console("POST");
    }else{
        return res.console("GET");
    }

}


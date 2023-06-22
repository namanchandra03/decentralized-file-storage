import { decrypt } from "../Crypto1";
import { useState } from "react";
import { database } from "../firebase";

export default function AllFav(){

    const [allFiles,setAllFiles] = useState([])

    database.favourites.onSnapshot(snapshot=>{

        const data = snapshot.docs.map(database.formattedDoc)
        
        setAllFiles(data)
        
    })

    const images = allFiles.map((file)=>(
           
        {
            ...file,
            hash:decrypt(file.hash)
        }
    ))

    

    return images;

} 
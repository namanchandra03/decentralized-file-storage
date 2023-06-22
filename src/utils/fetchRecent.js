import { useState } from "react";
import { database } from "../firebase";

export default function AllRecentFiles(){

    const [allFiles,setAllFiles] = useState([])

    database.files
    .orderBy("createdAt")
    .limit(10)
    .onSnapshot(snapshot=>{

        const data = snapshot.docs.map(database.formattedDoc)
        
        setAllFiles(data)
        
    })

    return allFiles;
} 
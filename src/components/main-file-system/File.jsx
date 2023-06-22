import React,{ useState } from "react";
import { decrypt } from "../../Crypto1";
import { database } from "../../firebase";
import "./Box.css"
import {  toast } from 'react-toastify';
import { AiOutlineDelete,AiOutlineStar } from "react-icons/ai";

export default function File ({file}){
     
    const url = decrypt(file.hash);
    const id = file.id;
    const [show, setShow] = useState(false);

    function handleFav(){

        database.favourites.add(file)
    }

    async function handleDelete(){

    
 try{
    await database.files.doc(id).delete();
    toast.success('Deleted Successfully', {
        position: toast.POSITION.TOP_CENTER
    });
 }catch(e){
    toast.error('Unable to delete', {
        position: toast.POSITION.TOP_CENTER
    });
 }
     
  }


    return (
       
    <div className="box" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>

               


                <img src={url} alt="" />
                <a className="link" href={url}>
                    <p>{file.name}</p>
                    </a>
                    <div className={`d-flex justify-content-between w-100  ${!show && "visually-hidden"}`}>


                <AiOutlineStar size={24 } style={{  position: "relative",marginLeft:"10px" }} onClick={handleFav}/>
                    <AiOutlineDelete size={24} style={{  position: "relative" ,marginRight:"10px"}} onClick={handleDelete} />


                </div>


            </div>
    
    )
}
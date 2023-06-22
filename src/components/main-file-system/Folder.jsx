import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import "./Box.css";
import {toast } from 'react-toastify';
import { useFolder } from "../../hooks/useFolder";
import { database } from "../../firebase";
import AllFav from "../../utils/fetchFav";

export default function Folder({ folder }) {
    const [show, setShow] = useState(false);
    const id = folder.id;

    AllFav();

    const { childFiles, childFolders } = useFolder(id);

    async function handleDelete() {



        if (childFiles.length !== 0 || childFolders.length !== 0) {
            toast.warning('This Folder is not empty', {
                position: toast.POSITION.TOP_CENTER
            });

        }

        else {
            try {
                await database.folders.doc(id).delete();
                toast.success('Deleted Successfully', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            catch (e) {
                toast.error('Unable to delete', {
                    position: toast.POSITION.TOP_CENTER
                });
            }

        }
    }
    return (
        <>


            <div className="box" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>

                <div className={`align-self-end  ${!show && "visually-hidden"}`}>


                    <AiOutlineDelete size={24} style={{ right: "10px", position: "relative" }} onClick={handleDelete} />


                </div>


                <img src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" alt="" />
                <Link className="link" to={`/folder/${folder.id}`}  >
                    <p>{folder.name}</p>
                </Link>


            </div>


        </>

    )
}
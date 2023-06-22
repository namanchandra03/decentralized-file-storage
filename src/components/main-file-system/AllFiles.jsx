import React from "react";
import {useFolder } from '../../hooks/useFolder'
import AddFolderButton from './AddFolderButton';
import Folder from './Folder';
import { useParams } from "react-router-dom";
import FolderBreadcrumb from "./FolderBreadcrumb";
import AddFileButton from "./AddFileButton";
import File from "./File";


export default function DrivePortion(){

    const {folderId} = useParams();

    const { folder, childFolders,childFiles} = useFolder(folderId);

    return (

        <div style={{margin:"15px", paddingLeft:"20px",position:"relative" }}>
            
            <div className="d-flex justify-content-space-between ">

            <FolderBreadcrumb currentFolder={folder}/>
               <div style={{width:"210px"}} className="d-flex justify-content-evenly">
                <AddFolderButton  currentFolder={folder} />
                <AddFileButton currentFolder={folder}/>
                
                </div>
                
                
               
            </div>

            {
                childFolders.length > 0
                    ?
                    <div className='d-flex flex-wrap pt-3'>
                        {
                            childFolders.map(childFolder => (

                                <div
                                    key={childFolder.id}
                                    style={{ maxWidth: "210px" }}
                                    
                                >
                                    <Folder folder={childFolder} />
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div></div>
            }

            {

                childFolders.length > 0 && childFiles.length > 0 && <hr></hr>
            }

{
                childFiles.length > 0
                    ?
                    <div className='d-flex flex-wrap'>
                        {
                            childFiles.map(childFile => (

                                <div
                                    key={childFile.id}
                                    style={{ maxWidth: "250px" }}
                                    className="p-2"
                                >
                                    <File file={childFile}/>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div></div>
            }

        </div>


    )
}
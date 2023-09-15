import React,{useState} from 'react';
import {Button,Modal,Form} from "react-bootstrap";
import { database } from '../../firebase';
import { ROOT_FOLDER } from '../../hooks/useFolder';


export default function AddFolderButton({currentFolder}){

   
    
    const [open,setOpen] = useState(false);

    const [name,setName] = useState("");

    if(currentFolder==null)return;

    const path = [...currentFolder.path]

    if(currentFolder!==ROOT_FOLDER){

        path.push({name:currentFolder.name,id:currentFolder.id})
    }

    function openAddFolderBox(){

        setOpen(true);

    } 

    function closeAddFolderBox(){
       
        setOpen(false);

    }

    function handleSubmit(e){

        e.preventDefault();

        database.folders.add({

            name,
            parentId:currentFolder.id,
            path:path,
            createdAt:database.getCurrentTimeStamp()
        })

        setName("");
        closeAddFolderBox();

    }
    
    return(
        <div >
        <Button onClick={openAddFolderBox} className='px-2 py-2' variant="primary" size='md'>
            Add Folder
        </Button>

        <Modal show={open} onHide={closeAddFolderBox}>

           <Form onSubmit={handleSubmit}>
           <Modal.Body>

            <Form.Group>

                <Form.Label>Add Folder</Form.Label>

                <Form.Control 
                 
                 type='text'
                 required
                 value={name}
                 onChange={e=>setName(e.target.value)}
                />
            
                
             </Form.Group>
                

                </Modal.Body>
    
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeAddFolderBox} >Close</Button>
                    <Button variant='success' type='submit'>Add Folder</Button>
                </Modal.Footer>
           </Form>

        </Modal>

        </div>
        
     )
}


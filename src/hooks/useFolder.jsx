import { useEffect, useReducer } from "react";
import { database } from "../firebase";

const ACTION_TYPE={

    SELECT_FOLDER:'select-folder',
    UPDATE_FOLDER:'update-folder',
    SET_CHILD_FOLDERS:'set-child-folders',
    SET_CHILD_FILES:'set-child-files'
}

export const ROOT_FOLDER ={

     id:null,
     name:"root",
     path:[]
}

function reducer(state,{type,payload}){

    switch(type){

        case ACTION_TYPE.SELECT_FOLDER:

        return {

             folderId:payload.folderId,
             folder:payload.folder,
             childFolders:[],
             childFiles:[]
        }

        case ACTION_TYPE.UPDATE_FOLDER:

        return {

            ...state,
            folder:payload.folder
        }

        case ACTION_TYPE.SET_CHILD_FOLDERS:

        return {

            ...state,
            childFolders:payload.childFolders
        }

        case ACTION_TYPE.SET_CHILD_FILES:

        return {

             ...state,

             childFiles:payload.childFiles
        }

        default:

        return state
    }
}

export function useFolder(folderId=null,folder=null){

    const [state,dispatch] = useReducer(reducer,{

        folderId,
        folder,
        childFolders:[],
        childFiles:[]
    })

    useEffect(()=>{

        dispatch({

            type:ACTION_TYPE.SELECT_FOLDER,

            payload:{

                folderId,
                folder
            }

        })

    },[folderId,folder])

    useEffect(()=>{

        if(folderId==null){

            return dispatch({

                type:ACTION_TYPE.UPDATE_FOLDER,
                payload:{

                    folder:ROOT_FOLDER
                }
            })
        }

        database.folders.doc(folderId).get()

        .then(doc=>{
            
            dispatch({

                type:ACTION_TYPE.UPDATE_FOLDER,
                payload:{

                    folder:database.formattedDoc(doc)
                }
            })

        })

        .catch(()=>{
                   
            return dispatch({

                type:ACTION_TYPE.UPDATE_FOLDER,
                payload:{

                    folder:ROOT_FOLDER
                }
            })
             
        })
    },[folderId]) 

    useEffect(()=>{

        return database.folders.where("parentId","==",folderId)
        .orderBy("createdAt")
        .onSnapshot(snapshot=>{

            dispatch({
                    
                type:ACTION_TYPE.SET_CHILD_FOLDERS,
                
                payload:{

                    childFolders:snapshot.docs.map(database.formattedDoc)
                }

                 
            })
        })
    },[folderId])

    useEffect(()=>{

        return database.files.where("folderId","==",folderId)
        .orderBy("createdAt")
        .onSnapshot(snapshot=>{

            dispatch({
                    
                type:ACTION_TYPE.SET_CHILD_FILES,
                
                payload:{

                    childFiles:snapshot.docs.map(database.formattedDoc)
                }

                 
            })
        })
    },[folderId])



    return state;
}
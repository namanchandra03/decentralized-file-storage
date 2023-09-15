import React from "react";
import axios from "axios";
import { database } from "../../firebase";
import { encrypt } from "../../Crypto1";

export default function AddFileButton({currentFolder}){
    const key = "6f9ca1e024a9f7731673"
    const secret = "24384d2481ff8a06f02fe3905e2afc5bb24ad57e32efb108d6c0ee8847631170"

   async function handleUpload(e){

    console.log(e.target.files[0])

        var file = e.target.files[0];
    //check for file extension
    try {
      //upload the file to IPFS
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        console.log("Uploaded image to Pinata: ", response.pinataURL);
        //setFileURL(response.pinataURL);
        const encryptedHash = encrypt(response.pinataURL)

        console.log(encryptedHash);
        database.files.add({

            folderId:currentFolder.id,
            name:file.name,
            type:file.type,
            fileSize:file.size,
            hash:encryptedHash,
            createdAt:database.getCurrentTimeStamp()

        })
        alert(response.pinataURL);
      }
    } catch (e) {
      console.log("Error during file upload", e);

    }
}
const uploadFileToIPFS = async(file) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    //making axios POST request to Pinata ⬇️
    
    let data = new FormData();
    data.append('file', file);

    const metadata = JSON.stringify({
        name: 'testname',
        keyvalues: {
            exampleKey: 'exampleValue'
        }
    });
    data.append('pinataMetadata', metadata);

    //pinataOptions are optional
    const pinataOptions = JSON.stringify({
        cidVersion: 0,
        customPinPolicy: {
            regions: [
                {
                    id: 'FRA1',
                    desiredReplicationCount: 1
                },
                {
                    id: 'NYC1',
                    desiredReplicationCount: 2
                }
            ]
        }
    });
    data.append('pinataOptions', pinataOptions);

    return axios 
        .post(url, data, {
            maxBodyLength: 'Infinity',
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {

            console.log(response)
            //console.log("image uploaded", response.data.IpfsHash)
            return {
               success: true,
               pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }

    });
};
    return(

       <label className="btn btn-primary  px-2 py-2 mr-2 ">
        Upload File
        <input
        type="file"
        onChange={handleUpload}
        style={{opacity:0,position:"absolute",left:"-9999px"}}
        />
       </label>
    )
}
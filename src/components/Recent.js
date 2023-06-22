import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import AllRecentFiles from "../utils/fetchRecent";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";


export default function Recent() {

  const images = AllRecentFiles();

  function getDate(timeStamp){

      const date = new Date(timeStamp*1000);

      console.log(date);

      return date;
  }

  return (
    <div className="tw-flex tw-h-screen ">
      <Sidebar />
      <div className="tw-overflow-y-auto tw-flex-1 tw-bg-gray-100">
        <Navbar />
        <Table
          striped
          bordered
          hover
          size="lg"
          className="text-center tw-cursor-pointer"
        >
          <thead>
            <tr>
              <th>File Name</th>
              <th>Created At</th>
              <th>Size</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {
              images.length > 0 &&
              images.map(image=>(
                <tr key={image.id}>
              <td>
                <Link to = {image.folderId ? `/folder/${image.folderId}` : "/"} >{image.name}</Link>
              </td>
              <td>{image.createdAt.seconds}</td>
              <td>{image.fileSize/1000}kb</td>
              <td>{image.type}</td>
            </tr>
              ))

            }
          </tbody>
        </Table>
      </div>
    </div>
  );
}

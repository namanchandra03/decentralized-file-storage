import React from "react";
import logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Login from "./Login";
import { Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Intro() {
const {currentUser} = useAuth();
  return (
    <div className="tw-px-32">
      <div className=" tw-h-20 tw-bg-white tw-w-full tw-flex tw-justify-between tw-items-center tw-text-black  tw-py-5">
        <img alt="" src={logo} className=" tw-h-16 tw-w-50" />
        <div className=" tw-flex tw-justify-evenly tw-items-center tw-h-16  tw-w-1/3 tw-text-lg">
          <span>Pricing</span>
          <span>Privacy</span>
          <span>Docs</span>
        </div>
        <div className="tw-flex tw-space-x-4">
          <a href="/login" className="link">
            <Button variant="outline-primary">Log in</Button>
          </a>
          <a href={currentUser?"/drive":"/login"} className="link tw-text-white">
            <Button variant="primary">Get Started</Button>
          </a>
        </div>
      </div>
      <div className=" tw-h-full tw-mt-36 tw-w-full tw-items-center tw-flex  ">
        <div className=" tw-text-sky-600  tw-w-2/5">
          <h1 className=" tw-text-5xl tw-mb-5">Say hi to privacy</h1>
          <h1 className=" tw-text-5xl">Switch to minecloud</h1>
          <div className=" tw-mt-10 tw-text-black tw-mb-10 tw-text-xl">
            Here at Minecloud, we've created a suite of services truly focused
            on you. Switch to Minecloud Drive, Blockchain and more.
          </div>
          <a href={currentUser?"/drive":"/login"} className="link tw-text-white">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </a>
        </div>
        <div>
          <img
            alt=""
            src="https://www.mirazon.com/wp-content/uploads/2016/02/office-365-immutableid.png"
            className=" tw-object-contain"
            style={{ width: "500px", height: "400px", marginLeft: "200px" }}
          />
        </div>
      </div>
      <div className="tw-h-full tw-mt-48 tw-w-ful tw-flex tw-flex-col tw-items-center tw-px-44 ">
        <h1 className=" tw-text-6xl">
          <span className=" tw-text-orange-400">Decentralized </span>
          Storage is here
        </h1>
        <div className=" tw-mt-10 tw-text-center">
          <h6>
            Minecloud combines with IPFS, a peer-to-peer distributed network
            protocol, to make a more efficient and secure web free from
            corporate control.
          </h6>
        </div>
        <h2 className=" tw-mt-20">Network Integration</h2>
        <div className=" tw-bg-gray-200 tw-px-10 tw-mt-7 tw-rounded-2xl">
          <img
            alt=""
            src="https://miro.medium.com/max/2560/1*o5Q3503plQP12FtVSn0nXQ.png"
            className=" tw-h-44 tw-w-44 tw-object-contain "
          />
        </div>
      </div>

      <div className=" tw-w-full tw-h-full tw-flex tw-justify-evenly tw-mt-36 tw-p-10">
        <div className=" tw-bg-gray-200 tw-w-64 tw-h-96 tw-px-8 tw-my-7 tw-py-8 tw-rounded-2xl">
          <div className=" tw-space-y-4">
            <img
              alt=""
              src="https://miro.medium.com/max/2560/1*o5Q3503plQP12FtVSn0nXQ.png"
              className=" tw-h-36 tw-w-full tw-object-contain "
            />
            <h5>Unparalleled security</h5>
            <p className=" tw-text-sm">
              Every file is encrypted, split into pieces, and stored on a global
              network of nodes, making data breaches and downtime a thing of the
              past.
            </p>
          </div>
        </div>
        <div className=" tw-bg-gray-200 tw-w-64 tw-h-96 tw-px-8 tw-my-7 tw-py-8 tw-rounded-2xl">
          <div className=" tw-space-y-4">
            <img
              alt=""
              src="https://miro.medium.com/max/2560/1*o5Q3503plQP12FtVSn0nXQ.png"
              className=" tw-h-36 tw-w-full tw-object-contain "
            />
            <h5>Provable security and authenticity</h5>
            <p className=" tw-text-sm">
              Content addressing and cryptographic storage proofs verify data is
              being stored correctly and securely over time.
            </p>
          </div>
        </div>
        <div className=" tw-bg-gray-200 tw-w-64 tw-h-96 tw-px-8 tw-my-7 tw-py-8 tw-rounded-2xl">
          <div className=" tw-space-y-4">
            <img
              alt=""
              src="https://miro.medium.com/max/2560/1*o5Q3503plQP12FtVSn0nXQ.png"
              className=" tw-h-36 tw-w-full tw-object-contain "
            />
            <h5>Flexibility and scale without compromise</h5>
            <p className=" tw-text-sm">
              The Filecoin network is made up of a large number of diverse
              storage providers and developers. This creates a robust and
              reliable service.
            </p>
          </div>
        </div>
      </div>
      <div className=" tw-w-full tw-h-full   tw-text-center  tw-p-10">
        <div className="tw-flex tw-flex-col tw-items-center tw-space-y-6">
          <h1>
            Secure and Permanent Storage with
            <span className=" tw-text-blue-900"> Blockchain</span>
          </h1>
          <p>
            Smart Contract guarantee your data remains available and unchanged
            over time
          </p>
        </div>
        <div className=" tw-w-full tw-h-full tw-flex tw-justify-evenly tw-mt-14">
          <div className=" tw-bg-gray-200 tw-w-64 tw-h-96 tw-px-8 tw-my-7 tw-py-8 tw-rounded-2xl">
            <div className=" tw-space-y-4">
              <img
                alt=""
                src="https://th.bing.com/th/id/OIP.upnPvcb4Zvyneul3UkSGkQHaDt?w=347&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                className=" tw-h-36 tw-w-full tw-object-contain "
              />
              <h5>Ethereum Blockchain</h5>
              <p className=" tw-text-sm">
                Every file is encrypted, split into pieces, and stored on a
                global network of nodes, making data breaches and downtime a
                thing of the past.
              </p>
            </div>
          </div>
          <div className=" tw-bg-gray-200 tw-w-64 tw-h-96 tw-px-8 tw-my-7 tw-py-8 tw-rounded-2xl">
            <div className=" tw-space-y-4">
              <img
                alt=""
                src="https://th.bing.com/th/id/OIP.bsc4cDw6QWBDrj3oLoeV3wHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                className=" tw-h-36 tw-w-full tw-object-contain "
              />
              <h5>Smart Cotracts</h5>
              <p className=" tw-text-sm">
                Content addressing and cryptographic storage proofs verify data
                is being stored correctly and securely over time.
              </p>
            </div>
          </div>
          <div className=" tw-bg-gray-200 tw-w-64 tw-h-96 tw-px-8 tw-my-7 tw-py-8 tw-rounded-2xl">
            <div className=" tw-space-y-4">
              <img
                alt=""
                src="https://miro.medium.com/max/2560/1*o5Q3503plQP12FtVSn0nXQ.png"
                className=" tw-h-36 tw-w-full tw-object-contain "
              />
              <h5>IPFS</h5>
              <p className=" tw-text-sm">
                The Filecoin network is made up of a large number of diverse
                storage providers and developers. This creates a robust and
                reliable service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

<Route path="/login" element={<Login />} />

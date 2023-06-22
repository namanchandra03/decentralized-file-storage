import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Drive from "./components/Drive";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./components/PrivateRoute";
import Blockchain from "./components/Blockchain";
import Stared from "./components/Stared";
import Recent from "./components/Recent";
import FileView from "./components/FileView";
import BlockchainUpload from "./components/BlockchainUpload";
import Intro from "./components/Intro";
import { useAuth } from "./contexts/AuthContext";


function App() {
  
  
  
  return (
    <Router>
      
      <AuthProvider>
      <ToastContainer />
        <Routes>
          <Route exact path="/drive" element={<PrivateRoute />}> 
            <Route exact path="/drive" element={ <Drive />} />
              
          </Route> 
          <Route exact path='/folder/:folderId' element={<Drive/>}/> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/blockchain/upload" element={<BlockchainUpload />} />
          <Route exact path="/recent" element={<Recent />} />
          <Route path="/stared" element={<Stared />} />
          <Route path="/" element={<Intro />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

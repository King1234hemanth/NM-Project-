import React from "react";
import Home from "./home/Home";

import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./component/Signup";
import Contacts from "./contact/Contacts";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider";
import Aboutus from "./about/Aboutus";


function App() {
  const [authUser, setAuthUser]=useAuth()
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/contact" element={<Contacts />}/>
          <Route path="/about" element={<Aboutus />}/>
          <Route path="/signup" element={<Signup />} />

        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

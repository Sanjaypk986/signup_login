import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SignupForm from "../components/signupForm";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center items-center p-4">
        <Outlet />
      </main>
      <Footer />
    </div>

  
  );
};

export default Root;

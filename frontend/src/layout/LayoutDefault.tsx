// src/layout/Layout.tsx

import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

type LayoutDefaultProps = {
  children: React.ReactNode;
};

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ children }) => {
  return (
    <>
      <NavBar isDarkText={true} />
      <div className="bg-white">
        <img src={`https://aha-airline.s3.ap-southeast-2.amazonaws.com/sunset4.jpg`} alt="Header" className="w-full h-[300px] object-cover object-center" />
        <Breadcrumbs />
      </div>

      <main className="min-h-screen py-4 bg-slate-50">{children}</main>

      <Breadcrumbs />
      <Footer isLandingPage={false} />
    </>
  );
};

export default LayoutDefault;

import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

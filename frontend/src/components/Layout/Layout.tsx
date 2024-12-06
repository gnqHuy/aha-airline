import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import image3 from "../../assets-test/Images/sunrise5.jpg";

type LayoutProps = {
  children: React.ReactNode;
  headerImage?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, headerImage = image3 }) => { 
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split('/').filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const segmentPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    return (
      <React.Fragment key={segment}>
        {!isLast ? (
          <Link to={segmentPath} className="text-golden no-underline capitalize">
            {segment}
          </Link>
        ) : (
          <span className="text-black capitalize">{segment.replace(/%20/g, " ")}</span> 
        )}
        {!isLast && <IoIosArrowForward className="mx-2" />} 
      </React.Fragment>
    );
  });

  return (
    <>
      <NavBar />
      <div className="bg-white">
        <img src={headerImage} alt="Header" className="w-full h-[300px] object-cover object-center" />

        <div className="flex items-center w-[1100px] mx-auto p-3 text-lg">
          <Link to="/" className="flex items-center text-golden no-underline">
            <FaHome className="mr-2" />
          </Link>
          <IoIosArrowForward className="mr-2" />
          {breadcrumbs}
        </div>
      </div>

      <main className="min-h-screen bg-slate-50">{children}</main>
      <div className="flex items-center w-[1100px] mx-auto p-3 text-lg">
          <Link to="/" className="flex items-center text-golden no-underline">
            <FaHome className="mr-2" />
          </Link>
          <IoIosArrowForward className="mr-2" />
          {breadcrumbs}
        </div>
      <Footer />
    </>
  );
};

export default Layout;

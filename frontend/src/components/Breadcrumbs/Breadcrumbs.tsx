import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const segmentPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    return (
      <React.Fragment key={segment}>
        {!isLast ? (
          <Link to={segmentPath} className="text-ahaAmber-2 no-underline capitalize">
            {segment}
          </Link>
        ) : (
          <span className="text-black capitalize">{decodeURIComponent(segment)}</span>
        )}
        {!isLast && <IoIosArrowForward className="mx-2" />}
      </React.Fragment>
    );
  });

  return (
    <div className="flex items-center w-[1100px] mx-auto p-3 text-lg">
      <Link to="/" className="flex items-center text-ahaAmber-2 no-underline">
        <FaHome className="mr-2" />
      </Link>
      {pathSegments.length > 0 && <IoIosArrowForward className="mr-2" />}
      {breadcrumbs}
    </div>
  );
};

export default Breadcrumbs;

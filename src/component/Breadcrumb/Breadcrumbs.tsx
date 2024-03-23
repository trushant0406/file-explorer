import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  // get the current location
  const location = useLocation();
  const { pathname } = location;

  // split the path into segments
  const segment = pathname.split("/");
  let url = "";

  // map each segment to create breadcrumb link
  const breadcrumbs = segment.map((segment, i) => {
    segment == "" ? (url += "") : (url += "/" + segment);

    return (
      <Link key={i} to={url} className="hover:text-black text-[#6B7280]">
        {segment && (
          <div className="flex items-center flex-row gap-4">
            <svg
              className="h-6 w-3 shrink-0 axm"
              viewBox="0 0 24 44"
              preserveAspectRatio="none"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
            </svg>
            {" " + segment.toUpperCase() + " "}
          </div>
        )}
      </Link>
    );
  });

  return breadcrumbs;
};
export default Breadcrumbs;

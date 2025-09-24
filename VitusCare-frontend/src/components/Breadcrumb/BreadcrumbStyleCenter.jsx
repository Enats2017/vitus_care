import React, { useEffect, useState } from 'react';
import Spacing from '../Spacing';
import { Link, useLocation } from 'react-router-dom';

export default function BreadcrumbStyleCenter({ centerName }) {
    console.log("center name in the breadcrumbs", centerName)
  const [urlSegments, setUrlSegments] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const pathSegments = pathname
      .split('/')
      .filter((segment) => segment !== '');
    setUrlSegments(pathSegments);
  }, [pathname]);

  return (
    <>
      <Spacing md="170" />
      <div className="cs_page_heading">
        <div className="container">
          <div className="cs_page_heading_in">
            <ol className="breadcrumb text-capitalize">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              {urlSegments.map((segment, index) => (
                <li key={index} className="breadcrumb-item">
                  {index < urlSegments.length - 1 ? (
                    <Link to={`/${urlSegments.slice(0, index + 1).join('/')}`}>
                      {segment.replace('-', ' ')}
                    </Link>
                  ) : (
                    // Display the center name at the end of the breadcrumb
                    <span>{centerName || segment.replace('-', ' ')}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

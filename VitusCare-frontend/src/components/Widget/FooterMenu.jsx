import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function FooterMenu({ data }) {
  const location = useLocation();

  return (
    <ul className="cs_menu_widget cs_mp0">
      {data?.map((item, index) => (
        <li key={index}>
          <Link
            to={item.href}
            className={location.pathname === item.href ? 'cs_active_link' : ''}
            aria-current={location.pathname === item.href ? 'page' : undefined}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
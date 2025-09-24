import React from 'react';
import { Link } from 'react-router-dom';

export default function IconBoxStyle12({ title, subTitle, iconUrl, href }) {
  return (
    <div className="cs_iconbox cs_style_12">
      <div className="cs_iconbox_info cs_radius_20">
        <span className="cs_iconbox_circle" style={{backgroundColor:'red'}}/>
        <h2 className="cs_iconbox_title cs_fs_32 cs_semibold blue_color">
          <Link to={href}>{title}</Link>
        </h2>
        <p className="cs_iconbox_subtitle mb-0 cs_heading_color">{subTitle}</p>
      </div>
      <Link to={href} className="cs_iconbox_icon cs_center" style={{backgroundColor:'#2C2F76'}}>
        <img src={iconUrl} alt="Icon" />
      </Link>
    </div>
  );
}

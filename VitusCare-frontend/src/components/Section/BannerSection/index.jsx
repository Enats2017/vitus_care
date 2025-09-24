import React from 'react';
import {Link} from 'react-router-dom'

export default function Banner({ bgUrl, imgUrl, title, subTitle , buttonUrl}) {
  return (
    <div className="container" >
      <div
        className="cs_banner cs_style_1 cs_bg_filed"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <img src={imgUrl} alt="Banner" className="cs_banner_img" style={{zIndex:'1'}} />
        <h2 className="red_color cs_banner_title cs_white_color cs_fs_72">{title}</h2>
        <p className="blue_color cs_banner_subtitle cs_heading_color cs_fs_20 cs_medium m-0">
          {subTitle}
        </p>
        <Link to="/gfr-calculator">
          <button className="cs_btn cs_style_1" style={{ marginTop: '20px' }}>
            <span>Go to GFR Calculator</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

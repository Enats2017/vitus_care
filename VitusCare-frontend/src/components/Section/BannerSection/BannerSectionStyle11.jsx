import React from 'react';
import parser from 'html-react-parser';

export default function BannerSectionStyle11({
  bgUrl,
  title,
  subTitle,
  center,
}) {
  return (
    <div className="container">
      <div
        className={`cs_banner cs_style_4 cs_bg_filed overflow-hidden ${
          center ? 'text-center' : ''
        }`}
        style={{
          backgroundImage: `url(${bgUrl})`,
          filter:'brightness(0.9)'
        }}
      >
         <p className="red_color cs_banner_subtitle cs_fs_20 m-0" style={{fontSize:'60px'}}>
          {parser(subTitle)}
        </p>
        <h2 className="blue_color cs_banner_title cs_fs_72">
          {parser(title)}
        </h2>
        {/* <hr style={{ marginTop:"50px",marginBottom:"50px",color: "red", height: "3px", border: "none", backgroundColor: "red" }} /> */}
       
        {/* <hr style={{ marginTop:"50px",color: "red", height: "3px", border: "none", backgroundColor: "red" }} /> */}
      </div>
    </div>
  );
}

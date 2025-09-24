import React from 'react';
import parser from 'html-react-parser';

export default function BannerSectionStyle4({
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
        <h2 className="blue_color cs_banner_title cs_fs_72">
          {parser(title)}
        </h2>
        <p className="red_color cs_banner_subtitle cs_fs_20 m-0">
          {parser(subTitle)}
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import parse from 'html-react-parser';
import Section from '..';

export default function BannerSectionStyle5({
  bgUrl,
  imgUrl,
  title,
  subTitle,
}) {
  return (
    <Section topMd={200}>
      <div className="container">
        <div className="cs_banner_text">
          <h2 className="blue_color cs_banner_title cs_fs_72">{parse(title)}</h2>
          <p className="blue_color cs_banner_subtitle cs_fs_20 mb-0 cs_heading_color">
            {parse(subTitle)}
          </p>
        </div>
      </div>
    </Section>
  );
}

import React from 'react';

export default function IconBoxStyle11({ title, subTitle, iconSrc }) {
  // Determine if the subtitle is a phone number or email
  const isPhoneNumber = subTitle.startsWith('98628') || subTitle.startsWith('+'); // Simple check to identify phone numbers
  const isEmail = subTitle.includes('@');

  return (
    <div className="cs_iconbox cs_style_11 cs_radius_25">
      <div className="cs_iconbox_icon">
        <img src={iconSrc} alt="Icon" />
      </div>
      <div className="cs_iconbox_right">
        <h3 className="cs_iconbox_title cs_fs_24 mb-0 red_color">{title}</h3>

        <p className="cs_iconbox_subtitle mb-0 cs_heading_color blue_color">
          {isPhoneNumber ? (
            <a href={`tel:${subTitle}`} className="blue_color">
              {subTitle}
            </a>
          ) : isEmail ? (
            <a href={`mailto:${subTitle}`} className="blue_color">
              {subTitle}
            </a>
          ) : (
            subTitle
          )}
        </p>
      </div>
    </div>
  );
}

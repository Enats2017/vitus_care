import React from 'react';
import Button from '../Button';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function DividedOptions({
  title,
  subTitle,
  price,
  period,
  featureList,
  btnText,
  btnUrl,
  popular,
}) {

  return (
    <div className="cs_pricing_card cs_style_1 cs_radius_20 overflow-hidden">
      <Link
        to={btnUrl}
        className="cs_pricing_card_head cs_accent_bg cs_white_color"
        style={{display:'flex', justifyContent:'center'}}
      >
        <h3 className="cs_white_color cs_fs_24 cs_semibold">
        
              <span className="cs_accent_bg">{title}</span>
        
        </h3>
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function CenterStyle({
  id, // Add a unique identifier prop
  imgUrl,
  name,
  address,
  phone,
  state,
  city,
  mapLocation,
  pinCode,
  distance, // New distance prop
}) {
  console.log("🖼️ Image received in CenterStyle:", imgUrl);
  return (
    <div className="cs_team cs_style_1 cs_type_2 cs_radius_20 overflow-hidden">
      <div className="cs_member_img">
        <div className="map-container">
          <iframe
            title="map"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={mapLocation}
          ></iframe>
        </div>
        {/* <div className="cs_label cs_white_color cs_accent_bg">{state}</div> */}
      </div>
      <div className="cs_team_meta cs_white_bg p-4">
        <h3 className="cs_member_name cs_fs_32">
          {/* Link added to the center name */}
          <Link to={`/centers/${id}`} style={{ textDecoration: 'none', color: '#2C2F76' }}>
            {name}
          </Link>
        </h3>
        <p className="cs_member_designation cs_heading_color cs_medium">
          City: {city}
        </p>
        <p className="cs_member_designation cs_heading_color cs_medium">
          State: {state}
        </p>
        <p className="cs_member_description">
          <span style={{ color: 'red' }}>Full Address</span>: {address}
        </p>
        {/* <p className="cs_member_description">
          <span style={{ color: 'red' }}>Pin Code</span>: {pinCode}
        </p> */}
        <p className="cs_member_phone">
          <Link to={`tel:${phone}`} style={{ textDecoration: 'none', color: '#2C2F76' }}>
            <span style={{ color: 'red' }}>Phone</span>: {phone ? "98628 98628" : "Phone number not available"}
          </Link>
        </p>
        {distance && !isNaN(parseFloat(distance.replace(/,/g, ''))) && (
          <p className="cs_member_distance">
            <span style={{ color: 'red' }}>Distance</span>: {parseFloat(distance.replace(/,/g, '')).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} km
          </p>
        )}

      </div>
    </div>
  );
}

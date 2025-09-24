import React from 'react';
import { Link } from 'react-router-dom';


export default function CenterStyle3({
  name_of_centre,
  address_of_centre,
  distance,
  latitude,
  longitude,
  map_location
}) {
  return (
    <div className="cs_doctor_profile cs_style_1">
      <div className="cs_doctor_img cs_radius_25">
        <img src="/images/default_hospital.png" alt={name_of_centre} className="cs_radius_25 general_visibility_hidden" />
      </div>
      <div className="cs_doctor_profile_right2">
        <div className="cs_doctor_info cs_radius_25 cs_white_bg overflow-hidden">
          <div
            className="cs_doctor_info_in"
            style={{
              display: 'flex',        // Use flexbox
              justifyContent: 'space-between', // Space between map and details
              alignItems: 'flex-start',  // Align content at the top
            }}
          >
            {/* Left Side: Center Details */}
            <div style={{ flex: 1, paddingRight: '20px' }}> {/* Adjust space between content and map */}
              <h2 className="cs_semibold" style={{ fontSize: '34px' }}>{name_of_centre}</h2>
              <p className="cs_fs_20 cs_heading_color mb-0">{address_of_centre}</p>
              <div className="cs_height_9" />
              <p className="mb-0">
                <strong>Distance:</strong> {distance?.toFixed(2)} km
              </p>
            </div>

            {/* Right Side: Map */}
            <div style={{ flex: 1 }}>
              <iframe
                id="map"
                title={`Map of ${name_of_centre}`}
                src={map_location}
                width="100%"
                height="300"
                style={{ borderRadius: '15px', boxShadow: "2px 2px 2px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Meta Information Below */}
          <div className="cs_doctor_meta cs_accent_bg">
            <div className="cs_doctor_meta_left cs_white_color">
              <div className="cs_height_28" />
              <Link
                to="/centers"  // The route you want to navigate to
                className="btn"
                style={{ marginTop: '10px', color: 'white' }}
              >
                View All Centres
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

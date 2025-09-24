import React from 'react';
import CenterSlider from '../CenterStryleSection/CenterSlider'; // Import the CenterSlider component

export default function CenterSectionStyle3({ sectionTitle, data }) {
  return (
    <div className="container">
      <div className="position-relative">
        
        <CenterSlider data={data} /> {/* Pass data to CenterSlider */}
      </div>
    </div>
  );
}

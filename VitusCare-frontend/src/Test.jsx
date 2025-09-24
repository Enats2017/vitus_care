import React, { useEffect, useState } from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import TeamSectionStyle2 from '../Section/TeamSection/TeamSectionStyle2'; // Reuse this for layout
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Centers() {
  pageTitle('Centers');
  
  // State to hold center data
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch centers from API
  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/centres`); // Replace with your API endpoint
        const data = await response.json();
        setCenters(data.centers || []); // Assuming API returns { centers: [] }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch centers');
        setLoading(false);
      }
    };

    fetchCenters();
  }, []);

  if (loading) {
    return <p>Loading centers...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Map center data to match the card design
  const centerData = centers.map((center) => ({
    imgUrl: '/images/centers/center_placeholder.png', // Placeholder image, you can update this dynamically if needed
    department: center.city, // You can replace it with relevant field
    name: center.name_of_centre, // Center name
    designation: `${center.city}, ${center.state}`, // City and state
    description: `${center.address_of_centre}, Pin Code: ${center.pin_code}`, // Full address
    href: `https://www.google.com/maps/search/?api=1&query=${center.latitude},${center.longitude}`, // Google Maps link
    social: [] // If you have social links or can leave empty
  }));

  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/centers/banner_bg.svg"
        imgUrl="/images/centers/banner_img.png"
        title="Our Locations"
        subTitle="Find all our centers spread across different cities"
      />

      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        {/* Use the TeamSectionStyle2 component to render center data in the same card format */}
        <TeamSectionStyle2 data={centerData} />
      </Section>

      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/centers/banner_bg_2.jpeg"
          title="Visit Our Nearest Center"
          subTitle="Schedule an appointment or visit one of our healthcare centers today!"
        />
      </Section>
    </>
  );
}

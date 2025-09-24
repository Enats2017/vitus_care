import React, { useEffect, useState } from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import TeamSectionStyle2 from '../Section/TeamSection/TeamSectionStyle2'; // Reuse this for layout
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';
import CenterListStyle from '../Section/centers/CenterListStryle';

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
        const response = await fetch(`${BASE_URL}/api/get-all-centres`); // Replace with your API endpoint
        const data = await response.json();
        console.log('data retrieved', data)
        setCenters(data.centres || []); // Assuming API returns { centres: [] }
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
  

  return (
    <>
      <BannerSectionStyle5
        title="Our Locations"
        subTitle="Find all our centers spread across different cities"
      />

      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <CenterListStyle data={centers} />
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

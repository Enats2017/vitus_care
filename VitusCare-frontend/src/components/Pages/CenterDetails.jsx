import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
import Section from '../Section';
import BannerSectionStyle9 from '../Section/BannerSection/BannerSectionStyle9';
import CenterDetailsSection from './CenterDetailsSection';
import AppointmentSectionStyle2 from '../Section/AppointmentSection/AppointmentSectionStyle2';
import { pageTitle } from '../../helpers/PageTitle';
import axios from 'axios';
import BreadcrumbStyleCenter from '../Breadcrumb/BreadcrumbStyleCenter';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function CenterDetails() {
  pageTitle('Center Details');

  const { id } = useParams(); 
  const [centerData, setCenterData] = useState(null); // State for fetched data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch center details by ID
  useEffect(() => {
    const fetchCenterDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/centers/${id}`);
        console.log("Response in the center details", response);
        setCenterData(response.data); // Update the state with fetched data
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error('Error fetching center details:', error);
        setLoading(false); // Even on error, stop the loading spinner
      }
    };

    fetchCenterDetails();
  }, [id]);

  if (loading) {
    return <div>Loading center details...</div>; // Display a loading state
  }

  if (!centerData) {
    return <div>Center details not found.</div>; // Handle no data
  }
  const nephrologistOpd =
  centerData.center.additional_details?.Nephrologist_OPD?.toLowerCase() === "yes"
    ? "Nephrologist OPD Available"
    : null;

  const opdSchedules  = centerData.center.additional_details?.OPDTIME || []; 
  const NephrologistTime  = centerData.center.additional_details?.NephrologistTime || []; 
    const doctorAvailable =
  centerData.center.additional_details?.Emergency_doctor?.toLowerCase() === "yes"
    ? "Emergency Doctor Available"
    : null;
  // Prepare schedules data from Timing_of_centre
  const schedules = centerData.center.additional_details?.Timing_of_centre || [];

  const nabhLevel =
  centerData.center.additional_details?.NABH_level
    ? `NABH ${centerData.center.additional_details.NABH_level} Accredited`
    : null;

    const empaneledWith = [
      centerData.center.additional_details?.CGHS?.toLowerCase() === "yes"
        ? "CGHS"
        : null,
      centerData.center.additional_details?.ESI?.toLowerCase() === "yes"
        ? "ESI"
        : null,
        centerData.center.additional_details?.RGHS?.toLowerCase() === "yes"
        ? "RGHS"
        : null,
    ]
      .filter(Boolean) // Remove falsy values
      .join(", "); // Join with ", " if both are truthy
    
    const empaneledTitle = `Empaneled with ${empaneledWith}${
      empaneledWith ? ", " : ""
    }All major TPA partners`; // Add "all major TPA partners" after dynamic values
    
    const multiSpecialtyIcu =
  centerData.center.additional_details?.multi_speciality_icu_facility?.toLowerCase() === "yes"
    ? "Multi - Specialty Hospital with ICU facility"
    : null;
    const experiences = [
      {
        title: nabhLevel,
      },
      {
        title: empaneledTitle,
      },
      {
        title: multiSpecialtyIcu,
      },
    ];
    const processedImages = centerData.center.pic?.map(
      (img) => `${BASE_URL}${img}`
    ) || ['/images/doctors/doctor_details.jpeg'];
    
    
    // Filter out invalid titles
    const filteredExperiences = experiences.filter((experience) => experience.title);
    
  return (
    <>
      <BreadcrumbStyleCenter centerName={centerData.center.name_of_centre} />
      <Section bottomMd={190} bottomLg={150} bottomXl={110}>
        <CenterDetailsSection
          bgUrl="/images/doctors/doctor_details_bg.svg"
          imgUrl={processedImages}

          slogan={"#SirfQualityDialysis"}
          name={centerData.center.city}
          department={centerData.center.name_of_centre}
          designation={centerData.center.name_of_centre}
          description={centerData.center.address_of_centre}
          landmark={centerData.center.landmark}
          social={[
            { icon: 'fa:map-marker', href: centerData.center.location },
          ]}
          Enquiry={[
            { iconUrl: '/images/icons/call.svg', title: centerData.center.phone?"98628 98628":"" },
            {
              iconUrl: '/images/icons/envlope.svg',
              title: 'support@vituscare.com',
            },
          ]}
          contactInfoHeading="Enquiry"
          schedules={schedules} 
          scheduleHeading="Timings"


          opdSchedules={opdSchedules}
          opdScheduleHeading="OPD Timings"


          NephrologistTime={NephrologistTime}
          NephrologistTimeHeading="Nephrologist Timings"
          degrees={[
            {
              title: 'Types Of Dialysis Available',
              subTitle: 'Single-use | Re-use | Emergency',
            },
            {
              title: '100% free dialysis',
              subTitle: [

                centerData.center.additional_details?.Ayushman?.toLowerCase() === "yes"
                  ? 'Ayushman'
                  : '',
                centerData.center.additional_details?.ESI?.toLowerCase() === 'yes'
                  ? 'ESI'
                  : '',
                centerData.center.additional_details?.TPA?.toLowerCase() === "yes"
                  ? 'TPA ( All major partners)'
                  : '',
                'Cash Option also available',
              ]
                .filter(Boolean) 
                .join(' | '), 
            },
            {
              subTitle: 'All types of dialysis ( Leading brands only)',
            },
            {
              subTitle: nephrologistOpd,
            },
            {
              subTitle: doctorAvailable,
            },
            {
              subTitle: [
                centerData.center.additional_details?.EPO? "EPO":"",
                centerData.center.additional_details?.supplements? "Supplements":""
              ].filter(Boolean).join(' | '),
            },
          ]}
          degreesHeading="Available At The Center"
          experiences={[
            ...filteredExperiences.map((experience) => ({
              title: experience.title,
            })), 
          ]}
          
          experiencesHeading="About the hospital"
        />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="/images/home_2/Appointment.png"
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
        />
      </Section>
    </>
  );
}

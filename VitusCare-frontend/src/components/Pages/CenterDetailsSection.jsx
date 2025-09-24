import React from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import List from '../List';
import ListStyle3 from '../List/ListStyle3';
import ListStyle4 from '../List/ListStyle4';
import ListStyle2 from '../List/ListStyle2';
import Spacing from '../Spacing';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CenterDetailsSection({
  bgUrl,
  imgUrl, // Array of image URLs passed as prop
  name,
  department,
  designation,
  description,
  landmark,
  social,
  Enquiry,
  contactInfoHeading,
  degrees,
  degreesHeading,
  experiences,
  experiencesHeading,
  schedules,
  opdSchedules,
  NephrologistTimeHeading,
  NephrologistTime,
  scheduleHeading,
  opdScheduleHeading,
  slogan
}) {
  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
console.log("images path", imgUrl)
  return (
    <div className="cs_doctor_details">
      <div
        className="cs_doctor_details_bg cs_bg_filed"
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      />
      <Spacing md="85" />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cs_single_doctor overflow-hidden cs_radius_20 position-relative">
              {/* Diagonal Ribbon */}
              <div
                style={{
                  position: 'absolute',
                  top: '180px',
                  right: '-25px',
                  backgroundColor: 'red',
                  color: 'white',
                  transform: 'rotate(45deg)',
                  transformOrigin: 'top right',
                  width: '300px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  zIndex: 2,
                }}
              >
                slots available Call Now !!
              </div>

              {/* Slick Carousel */}
              {imgUrl?.length > 0 ? (
                <Slider {...sliderSettings}>
                  {imgUrl.map((img, index) => (
                    <div key={index}>
                      <img src={img} alt={`Slide ${index + 1}`} className="w-100" />
                    </div>
                  ))}
                </Slider>
              ) : (
                <Slider {...sliderSettings}>
                  <div>
                    <img src="/images/doctors/doctor_details.jpeg" alt="Fallback" className="w-100" />
                  </div>
                </Slider>
              )}

              <h3 className="cs_white_color cs_accent_bg mb-0 text-center cs_semibold cs_fs_24">
                {department}
              </h3>
            </div>
            <Spacing md="94" lg="60" />
            <ListStyle2
              heading={contactInfoHeading}
              iconUrl="/images/icons/schedule.svg"
              data={Enquiry}
            />
            <Spacing md="66" lg="60" />
            <ListStyle3
              heading={scheduleHeading}
              iconUrl="/images/icons/schedule.svg"
              data={schedules}
            />
            {opdSchedules?.length > 0 && (
              <ListStyle4
                heading={opdScheduleHeading}
                iconUrl="/images/icons/schedule.svg"
                data={opdSchedules}
              />
            )}

            {NephrologistTime?.length > 0 && (
              <ListStyle4
                heading={NephrologistTimeHeading}
                iconUrl="/images/icons/schedule.svg"
                data={NephrologistTime}
              />
            )}
          </div>
          <div className="col-lg-6 offset-lg-1 position-relative">
            <Spacing md="55" />
            <h2 className="red_color cs_fs_48 mb-0 cs_semibold">{slogan}</h2>
            <Spacing md="55" />
            <h2 className="cs_fs_30 mb-0 cs_semibold">{'Now In ' + name}</h2>
            <Spacing md="12" />
            <h3 className="cs_semibold cs_fs_24 mb-0">{designation}</h3>
            <Spacing md="32" />
            <p className="mb-0 cs_heading_color">Address : {description}</p>
            {landmark?.trim() && (
              <p className="mb-0 cs_heading_color">Landmark : {landmark}</p>
            )}

            <div className="cs_social_links cs_accent_bg cs_radius_15">
              {social?.map((item, index) => (
                <Link to={item.href} key={index}>
                  <Icon icon={item.icon} />
                </Link>
              ))}
            </div>
            <Spacing md="200" xl="150" lg="80" />
            <Spacing md="35" lg="0" />
            <List
              heading={degreesHeading}
              iconUrl="/images/icons/hospital.svg"
              data={degrees}
            />
            <Spacing md="70" lg="50" />
            <List
              heading={experiencesHeading}
              iconUrl="/images/icons/experience.svg"
              data={experiences}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle1 from '../../IconBox/IconBoxStyle1';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export default function AwardSection({ sectionTitle, data }) {
  const settings = {
    arrows: false,
    dots: true, // Show dots below the carousel
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of items to show
    slidesToScroll: 1, // Number of items to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval to 3 seconds
    responsive: [
      {
        breakpoint: 1200, // For large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <SectionHeading title={sectionTitle} />
      <Spacing md="72" lg="50" />
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div key={index} style={{padding:'0 10px', boxSizing:'border-box'}}>
            <Link to={item.url}>
              <IconBoxStyle1 {...item} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

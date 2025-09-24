import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBox from '../../IconBox/IconBox'; // Import the new IconBox component

const gfrData = [
  {
    iconUrl: "/images/gfr_icons/icon_1.svg",
    title: "What is GFR Calculator?",
    description: "The GFR calculator is a tool used to estimate how well your kidneys are functioning. It calculates the rate at which your kidneys filter waste and excess fluids from the blood."
  },
  {
    iconUrl: "/images/gfr_icons/icon_2.svg",
    title: "Why is GFR Important?",
    description: "GFR is essential in diagnosing and monitoring chronic kidney disease (CKD). It helps detect kidney damage early and guides decisions regarding treatments and interventions."
  },
  {
    iconUrl: "/images/gfr_icons/icon_3.svg",
    title: "How to Calculate GFR?",
    description: "GFR is calculated using factors such as age, gender, serum creatinine levels, and sometimes race. The most common formula is the CKD-EPI equation, which estimates your kidney filtration rate."
  },
  {
    iconUrl: "/images/gfr_icons/icon_4.svg",
    title: "Interpreting GFR Results",
    description: "A GFR above 90 is normal, 60-89 is mild, 30-59 indicates moderate kidney damage, 15-29 suggests severe damage, and below 15 is kidney failure, requiring dialysis or transplant."
  },
  {
    iconUrl: "/images/gfr_icons/icon_5.svg",
    title: "Good and Dangerous Signs in GFR Test",
    description: "A GFR of 90+ is considered healthy, but values below 60 can indicate kidney disease. A GFR of 15 or lower is a sign of kidney failure and requires immediate medical attention."
  }
];

export default function Feature({ sectionTitle, imgUrl }) {
  return (
    <div className="cs_shape_wrap">
      <div className="cs_shape_1 cs_position_1" />
      <div className="container">
        <div className="row flex-xl-row flex-column-reverse">
          <div className="col-xl-5">
            <div className="cs_pr_95 text-center cs_img_filed">
              <img style={{height:'80%'}} src={imgUrl} alt={sectionTitle} className="cs_radius_30"  />
            </div>
          </div>
          <div className="col-xl-7">
            <SectionHeading title={sectionTitle} />
            <Spacing md="85" lg="70" xl="50" />
            <div className="row">
              {gfrData?.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <IconBox {...item} />
                  <Spacing md="85" lg="60" xl="35" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

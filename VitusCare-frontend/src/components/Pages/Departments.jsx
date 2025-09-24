import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import Section from '../Section';
import DepartmentSectionStyle6 from '../Section/DepartmentSection/DepartmentSectionStyle6';
import BannerSectionStyle6 from '../Section/BannerSection/BannerSectionStyle6';
import { pageTitle } from '../../helpers/PageTitle';
const departmentData = [
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'In-Center Dialysis',
    subTitle:
      'In-center dialysis is a treatment for kidney failure conducted at specialized facilities. Patients visit regularly, typically three times a week, for hemodialysis sessions supervised by healthcare professionals, ensuring safety, monitoring, and access to specialized support during treatments.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Home Dialysis',
    subTitle:
      'Home dialysis allows patients with kidney failure to perform treatment in the comfort of their own homes. It offers flexibility, independence, and improved quality of life, with options like peritoneal dialysis or home hemodialysis, supported by training and healthcare teams.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Nephrologist Consultation',
    subTitle:
      'A nephrologist consultation involves a specialized evaluation of kidney health. It focuses on diagnosing and managing conditions like chronic kidney disease, hypertension, electrolyte imbalances, and kidney stones. The nephrologist reviews medical history, performs tests, and designs a personalized treatment plan for optimal kidney function.',
    href: '/departments/department-details',
  }
];

export default function Departments() {
  pageTitle('Services');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/departments/banner_bg.svg"
        imgUrl="/images/departments/banner_img.png"
        title="Get to Know <br>VitusCare Services"
        subTitle="At VitusCare, we offer a wide range of medical and healthcare services that are designed to meet your individual needs and help you achieve optimal health."
      />
      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <DepartmentSectionStyle6 data={departmentData} />
      </Section>
      {/* <Section className="cs_footer_margin_0">
        <BannerSectionStyle6
          imgUrl="/images/departments/banner_img_2.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our <br />experienced medical professionals today!"
        />
      </Section> */}
    </>
  );
}

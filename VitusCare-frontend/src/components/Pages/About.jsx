import { React, useState } from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../Section/FunFactSection";
import TeamSection from "../Section/TeamSection";
import GallerySection from "../Section/GallerySection";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
export const serviceData = [
  {
    title: "Home - Dialysis",
    subTitle:
      "Blood tests, imaging studies, and other tests to diagnose health conditions",
    iconUrl: "/images/icons/home-dialysis.svg",
    href: "/departments/home-dialysis",
  },
  {
    title: "In - Centre Dialysis",
    subTitle:
      "Physical therapy, occupational therapy, and other services to help patients recover from injuries",
    iconUrl: "/images/icons/in-centre-dialysis.svg",
    href: "/departments/in-centre-dialysis",
  },
  {
    title: "Allied Servies",
    subTitle:
      "Annual checkups, immunizations, and health screenings care preventive",
    iconUrl: "/images/icons/allied-services.svg",
    href: "/departments/allied-services",
  },
  {
    title: "Nephrology",
    subTitle:
      "Medication management, disease management, and other treatments to improve health outcomes",
    iconUrl: "/images/icons/nephrology.svg",
    href: "/departments/nephrology",
  },
];

const featureListData = [
  {
    title: "Experienced Medical Professionals",
    subTitle:
      "At VitusCare, our team of experienced medical professionals is committed to providing the highest quality of care. Each specialist is highly trained in hemodialysis treatment, with years of expertise in managing complex renal conditions. Our staff is compassionate, ensuring personalized care for every patient in a comfortable and supportive environment.",
    iconUrl: "images/icons/professional.svg",
  },
  {
    title: "Comprehensive <br />Services",
    subTitle:
      "In addition to regular hemodialysis, VitusCare offers a wide range of services such as CRRT dialysis, SLED, Plasmapheresis, blood transfusion and access creation support to meet the unique needs of our patients. This allows us to provide holistic support for individuals with renal conditions. ",
    iconUrl: "images/icons/comprehensive.svg",
  },
  {
    title: "Patient-centered <br />Approach",
    subTitle:
      "At VitusCare, we put our patients at the heart of everything we do. Our patient-centered approach means we listen to your concerns, understand your specific needs, and provide tailored treatments. We prioritize your comfort, well-being, and overall quality of life, ensuring a supportive and empathetic environment throughout your treatment journey.",
    iconUrl: "images/icons/patient.svg",
  },
  {
    title: "State-of-the-art <br />Facilities",
    subTitle:
      "Our state-of-the-art dialysis facilities are equipped with the latest technology to ensure the highest standards of care. With advanced equipment for efficient and safe hemodialysis treatment, our clean and modern facilities provide a comfortable space for patients. At VitusCare, we are committed to delivering top-tier medical services in a cutting-edge, patient-friendly environment.",
    iconUrl: "images/icons/facilities.svg",
  },
];

const funFactData = [
  { number: "50+", title: "Years of experience" },
  { number: "95%", title: "Patient satisfaction rating" },
  { number: "5000+", title: "Patients served annually" },
  { number: "10+", title: "Healthcare providers on staff" },
  { number: "22+", title: "Convenient locations in the area" },
];
const managementTeamData = [
  {
    imgUrl: "/images/about/Mr.Saurabh.png",
    name: "Dr. Saurabh Pokhariyal",
    designation: "Founder and Chief Medical Officer",
    description: "",
    social: [
      {
        icon: "fa6-brands:linkedin-in",
        href: "https://www.linkedin.com/in/spokhariyal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    ],
  },
  {
    imgUrl: "/images/about/Prabhat.png",
    name: "Prabhat Shrivastava",
    designation: "Founder and CEO",
    description: "",
    social: [
      {
        icon: "fa6-brands:linkedin-in",
        href: "https://www.linkedin.com/in/prabhatkshrivastava?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    ],
  },
  {
    imgUrl: "/images/about/Pankaj-Tandon.png",
    name: "Pankaj Tandon",
    designation: "Founder and CFO",
    description: "",
    social: [
      {
        icon: "fa6-brands:linkedin-in",
        href: "https://www.linkedin.com/in/pankaj-tandon-06867214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    ],
  },
];
const boardOfDirectorsData = [
  {
    imgUrl: "/images/about/Prabhat.png",
    name: "John Doe",
    designation: "Chairman",
    description: "",
    social: [
      {
        icon: "fa6-brands:linkedin-in",
        href: "https://www.linkedin.com/in/john-doe",
      },
    ],
  },
  {
    imgUrl: "/images/about/Prabhat.png",
    name: "Jane Smith",
    designation: "Director",
    description: "",
    social: [
      {
        icon: "fa6-brands:linkedin-in",
        href: "https://www.linkedin.com/in/jane-smith",
      },
    ],
  },
  {
    imgUrl: "/images/about/Prabhat.png",
    name: "Jane Smith",
    designation: "Director",
    description: "",
    social: [
      {
        icon: "fa6-brands:linkedin-in",
        href: "https://www.linkedin.com/in/jane-smith",
      },
    ],
  },
  {
    imgUrl: "/images/about/Prabhat.png",
    name: "Jane Smith",
    designation: "Director",
    description: "",
    social: [
      {
        icon: "fa6-brands:linkedin-in",
        href: "https://www.linkedin.com/in/jane-smith",
      },
    ],
  },
  {
    imgUrl: "/images/about/Prabhat.png",
    name: "Jane Smith",
    designation: "Director",
    description: "",
    social: [
      {
        icon: "fa6-brands:linkedin-in",
        href: "https://www.linkedin.com/in/jane-smith",
      },
    ],
  },
  {
    imgUrl: "/images/about/Prabhat.png",
    name: "Jane Smith",
    designation: "Director",
    description: "",
    social: [
      {
        icon: "fa6-brands:linkedin-in",
        href: "https://www.linkedin.com/in/jane-smith",
      },
    ],
  },
];

const sections = [
  { id: "management", title: "Founders", data: managementTeamData },
  { id: "board", title: "Upper Mangement", data: boardOfDirectorsData },
];
const galleryData = [
  { imgUrl: "/images/about/Centre-01.png" },
  { imgUrl: "/images/about/center791-2.png" },
  { imgUrl: "/images/about/center.png" },
  { imgUrl: "/images/about/centre02.png" },
  { imgUrl: "/images/about/center-1581.png" },
];

export default function About() {
  pageTitle("About");
  const [activeSection, setActiveSection] = useState("management");

  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/about/iStock-1298800629.jpg"
        title="Welcome to <br />VitusCare Medlife"
        subTitle="We Make Quality Dialysis Accessible"
      />
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl="images/about/Why choose us.png"
          data={featureListData}
        />
      </Section>
      {/* <Section topMd={190} topLg={145} topXl={105}>
      <div className="tabs" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <h3>MEET OUR</h3>
      </div>
      </Section>
      <Section className="team-sections">
        <div className="tabs" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginLeft: '80px' }}>
          {sections.map((section) => (
            <h4
              key={section.id}
              className={`tab ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </h4>
          ))}
        </div>
        {sections.map((section) => (
          <div key={section.id} className={`section-content ${activeSection === section.id ? 'active' : ''}`}>
            {activeSection === section.id && (
              <TeamSection
                sectionTitleUp={section.titleUp}
                data={section.data}
              />
            )}
          </div>
        ))}
      </Section> */}


      <Section topMd={190} topLg={145} topXl={105} bottomMd={100}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <h3>Watch Our Introduction Video</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/KZ4NJok8-vY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Section>


      <Section topMd={170} topLg={120} topXl={80} bottomMd={100}>
        <GallerySection
          sectionTitle="Our Facilities"
          sectionTitleUp=""
          data={galleryData}
        />
      </Section>
      {/* <Section className="cs_footer_margin_0" topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <BannerSectionStyle4 
          bgUrl="images/about/banner-multiple-people.png"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          center
        />
      </Section> */}
    </>
  );
}

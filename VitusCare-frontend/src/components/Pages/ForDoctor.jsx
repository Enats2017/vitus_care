import React from "react";
import Section from "../Section";
import AboutSectionStyle4 from "../Section/AboutSection/AboutSectionStyle4";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import WorkingProcess from "../Section/WorkingProcess";
import { pageTitle } from "../../helpers/PageTitle";
import DoctorPartnership from "../../../src/components/AppointmentForm/DoctorPartnership";
// import DialysisUnitForm from '../../AppointmentForm/DialysisUnitForm'

const workingProcessData = [
  {
    title: "Achieve Better Clinical Outcomes",
    subTitle: `At VitusCare, patient well-being is our top priority. Our advanced protocols, data analytics , and evidence-based practices ensure improved clinical outcomes for dialysis patients. Gain regular access to patient KPI data sets, analysis on sero conversion and other relevant and essential clinical parameters to keep a better track of your patients' healths.`,
    iconUrl: "/images/home_2/wording_process_icon_1.svg",
    number: "01",
  },
  {
    title: "Expand Your Patient Reach",
    subTitle:
      "We connect you with a broader patient base, increasing your reach and impact in the renal community. By joining VitusCare’s extensive network, you gain access to more patients who need reliable and high-quality dialysis care, helping you grow your practice and make a greater difference.",
    iconUrl: "/images/home_2/wording_process_icon_2.svg",
    number: "02",
  },
  {
    title: "Leverage VitusCare’s Expertise",
    subTitle:
      "We take the hassle out of managing dialysis services by streamlining operations, optimizing workflows, and ensuring compliance with the highest standards. Partnering with VitusCare allows you to focus on patient care while we handle the complexities of facility management, staffing, and technology upgrades.",
    iconUrl: "/images/home_2/wording_process_icon_4.svg",
    number: "03",
  },
  {
    title: "Commitment to Quality of Treatment",
    subTitle: `Quality is the cornerstone of VitusCare's philosophy. From cutting-edge equipment to personalized patient care plans, we uphold rigorous standards in every aspect of dialysis treatment. By choosing VitusCare, you join a network committed to delivering excellence and improving patient lives.`,
    iconUrl: "/images/home_2/wording_process_icon_5.svg",
    number: "04",
  },
];

function ForDoctor() {
  pageTitle("For Doctors");
  return (
    <>
      <Section topMd={145} topLg={100} topXl={100}>
        <AboutSectionStyle4
          imgUrl="/images/home_3/BannerImage.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          titleUp="ABOUT US"
          title="Partner with VitusCare: Elevate Dialysis Care in India"
          subTitle="We are transforming dialysis care across India by delivering exceptional services and fostering collaborations that drive better outcomes for patients and doctors alike. By partnering with us, you can enhance your practice, expand your reach, and provide unparalleled care to those who need it the most."
        />
      </Section>
      <Section topMd={145} topLg={100} topXl={100}>
        <WorkingProcess
          sectionTitle="Why VitusCare is the ideal <br /> partner for you"
          sectionTitleUp=""
          sectionTitleDown=""
          sectionSubTitle=""
          data={workingProcessData}
        />
      </Section>
      <Section
        topMd={145}
        topLg={100}
        topXl={100}
        bottomMd={100}
        className="cs_footer_margin_0"
      >
        <BannerSectionStyle4
          bgUrl="/images/about/banner-multiple-people.png"
          title="Partner with us today!"
          subTitle="Together, Let us re-define dialysis care and create a brighter future for all kidney patients!"
          center
        />
      </Section>
      <Section topMd={100} topLg={120} topXl={100}>
        <div
          className="out_side_form"
          style={{ margin: "0 auto", padding: "4px" }}
        >
          <h2 className="red_color cs_fs_40 cs_medium mb-0">Reach Out To Us</h2>
          <div className="cs_height_42 cs_height_xl_25" />
          <DoctorPartnership />
        </div>
      </Section>
    </>
  );
}

export default ForDoctor;

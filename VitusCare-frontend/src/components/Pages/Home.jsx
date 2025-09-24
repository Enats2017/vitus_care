import React from 'react';
import Hero from '../Hero';
import AboutSection from '../Section/AboutSection';
import BrandsSection from '../Section/BrandsSection';
import Banner from '../Section/BannerSection';
import Section from '../Section';
import FeaturesSection from '../Section/FeaturesSection/FeaturesSectionStyle4';
// import TestimonialSection from '../Section/TestimonialSection';
import TestimonialSectionStyle2 from '../Section/TestimonialSection/TestimonialSectionStyle2'
// import BlogSection from '../Section/BlogSection';
// import AppointmentSection from '../Section/AppointmentSection';
import FaqSection from '../Section/FaqSection';
import AwardSection from '../Section/AwardSection';
import DepartmentSection from '../Section/DepartmentSection';
import { pageTitle } from '../../helpers/PageTitle';
import { Link } from 'react-router-dom';


// the subtitle to be set with in 50 words 
const featureListData = [
  {
    iconSrc: '/images/home_1/compassion.svg',
    title: 'Best Infrastructure',
    subTitle:
      `Best-in-class dialysis machines and consumables to deliver precision care. RO TDS as per WHO guidelines to ensure optimal safety.`,
  },
  {
    iconSrc: '/images/home_1/excellence.svg',
    title: 'Skilled Team',
    subTitle:
      'Highly-skilled work force recruited with stringent standards, upheld via regular audits.',
  },
  {
    iconSrc: '/images/home_1/integrity.svg',
    title: 'Clinical Excellence',
    subTitle: `Designed by top nephrologists, adhering to global standards. Every session audited to ensure reliable, adequate, and effective dialysis care.
`,
  },
  {
    iconSrc: '/images/home_1/teamwork.svg',
    title: 'Patient Safety',
    subTitle:
      'Strict infection control protocols ensured via dedicated machines, staff, and consumables for positive patients.',
  },
];
const brandData = [
  { imgUrl: 'images/brand_1.png', imgAlt: 'Haryana Govt' },
  { imgUrl: 'images/brand_2.png', imgAlt: 'Aayushman' },
  { imgUrl: 'images/brand_3.png', imgAlt: 'ESIC' },
  { imgUrl: 'images/brand_4.png', imgAlt: 'CGHS' },
  { imgUrl: 'images/brand_5.png', imgAlt: 'Star Health' },
  { imgUrl: 'images/brand_6.png', imgAlt: 'TATA AIG' },
  { imgUrl: 'images/brand_7.png', imgAlt: 'National Insurance' },
  { imgUrl: 'images/brand_8.png', imgAlt: 'Brand' },
];
const faqData = [
  {
    title: 'What services does VitusCare offer?',
    content:
      'VitusCare offers comprehensive renal care services across India, including in-center and home dialysis options. Our team of senior technicians and expert nephrologists provides personalized care and support, empowering patients to effectively manage their kidney health and improve their quality of life.',
  },
  {
    title: 'How do I schedule an appointment with VitusCare?',
    content: (
      <>
        Dail For Dialysis:
        <Link style={{ color: 'red' }} to="tel:+919862898628"> 98628 98628</Link>.
        To find VitusCare centers nearest to you please <Link style={{ color: 'red' }} to='/find-our-centers'>Click here</Link>.
      </>
    ),
  },
  {
    title: 'Can I avail dialysis under government schemes such as Ayushman Bharat, ECHS, CGHS?'
    ,
    content: (
      <>
        Yes, you can avail dialysis under various health schemes with us such as Ayushman Bharat, ECHS, CGHS, NHA, SGHS, Ministry of Health and Family Welfare, NFHS and Pradhan Mantri National Dialysis Programme.
        Find more about applicable schemes at your nearest VitusCare center by{' '}
        <Link style={{ color: "red" }} to="/find-our-centers" target="_blank" rel="noopener noreferrer">
          clicking here
        </Link>.
      </>
    ),
  },
  {
    title: 'Do you offer SLED dialysis?'
    ,
    content: (
      <>
        Yes, we offer SLED dialysis at most of our centres. To find VitusCare centers nearest to you please{' '}
        <Link style={{ color: "red" }} to="/find-our-centers" target="_blank" rel="noopener noreferrer">
          click here
        </Link>.
      </>
    ),
  },
  {
    title: 'Do you accept insurance?',
    content: (
      <>
        Yes, we offer dialysis services under various TPAs (Third Party Administrators) at most of our centers.
        To find VitusCare centers nearest to you please{' '}
        <Link style={{ color: "red" }} to="/find-our-centers" target="_blank" rel="noopener noreferrer">
          click here
        </Link>.
      </>
    )
  },
  {
    title: 'Can I receive dialysis at home?',
    content: (
      <>
        Yes, we provide Home Hemodialysis Facility. Kindly contact us at{' '}
        <Link style={{ color: "red" }} to="tel:+919862898628">98628 98628</Link> to know more.
      </>
    ),
  },
  {
    title: 'How long does each dialysis session take?',
    content: (
      <>
        On an average a dialysis session takes around 4.5 - 5 hours to be completed including all the pre and post dialysis formalities.
        To find VitusCare centers nearest to you please{' '}
        <Link style={{ color: "red" }} to="/find-our-centers" target="_blank" rel="noopener noreferrer">
          click here
        </Link>.
      </>
    )
  }
];
const blogData = [
  {
    title: 'The Benefits of Mindfulness Meditation for Stress and Anxiety',
    thumbUrl: 'images/home_1/post_1.jpeg',
    date: 'May 1, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'Healthy Eating on a Budget: Tips and Strategies',
    thumbUrl: 'images/home_1/post_2.jpeg',
    date: 'May 4, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'The Importance of Regular Cancer Screenings and Early Detection',
    thumbUrl: 'images/home_1/post_3.jpeg',
    date: 'May 1, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
];
const awardData = [
  {
    title: 'Changing Dialysis Care & Making It More Easily Available',
    subTitle:
      '',
    iconUrl: 'images/news/betterIndia.svg',
    url: 'https://thebetterindia.com/373563/vitus-care-renal-care-dialysis-tier-2-cities-chronic-kidney-disease-prabhat-shrivastava/'
  },
  {
    title: 'Tomorrow Capital Invests In Kidney Start Up VitusCare',
    subTitle:
      '',
    iconUrl: 'images/news/toi.png',
    url: 'https://timesofindia.indiatimes.com/business/india-business/tomorrow-capital-invests-in-kidney-start-up-vituscare/articleshow/109354003.cms'
  },
  {
    title: 'Top 3 ways to improve kidney health',
    subTitle:
      '',
    iconUrl: 'images/news/zeeNews.avif',
    url: 'https://zeenews.india.com/hindi/health/how-to-managing-diabetes-to-prevent-kidney-disease-doctor-told-steps-for-a-healthier-lifestyle/2514635'
  },
  {
    title: ' Available, accessible, affordable: VitusCare is focusing on the 3 As of kidney care',
    subTitle:
      '',
    iconUrl: 'images/news/yourStory.svg',
    url: "https://yourstory.com/2022/09/accessible-affordable-dialysis-therapy-vituscare-kidney-care-india"
  },
  {
    title: 'ESRD rising at alarming rate, particularly among adults aged 25-55',
    subTitle:
      '',
    iconUrl: 'images/news/et-now.svg',
    url: "https://health.economictimes.indiatimes.com/news/industry/esrd-rising-at-alarming-rate-particularly-among-adults-aged-25-55/113941095"
  },
  {
    title: 'VitusCare on track to achieve Rs 100 Cr ARR by 2026',
    subTitle:
      '',
    iconUrl: 'images/news/yourStory.svg',
    url: "https://yourstory.com/2024/12/vituscare-track-achieve-rs-100cr-arr-2026"
  },
  {
    title: 'Tomorrow Capital-Backed Dialysis Firm VitusCare On Road To Raise Fresh Funds',
    subTitle:
      '',
    iconUrl: 'images/news/VCC-logo.svg',
    url: "https://www.vccircle.com/tomorrowcapital-backed-dialysis-firm-vituscare-on-road-to-raise-fresh-funds"
  },
  ,
  {
    title: 'Health in 2024: The Top Trends That Shaped Preventive Care in India',
    subTitle:
      '',
    iconUrl: 'images/news/news18.png',
    url: "https://www.news18.com/lifestyle/health-and-fitness-health-in-2024-the-top-trends-that-shaped-preventive-care-in-india-9159413.html"
  },
];
const departmentData = [
  {
    title: 'Home Dialysis',
    iconUrl: 'images/home_1/hemo-dialysis.svg',
    href: '#',
  },
  {
    title: 'In-centre Dialysis',
    iconUrl: 'images/home_1/in-centre-dialysis.svg',
    href: '#',
  },
  {
    title: 'Nephrologist Consultation',
    iconUrl: 'images/home_1/nephrology.svg',
    href: '#',
  },


];

const testimonialData = [
  {
    text: 'I like that they have flexible timings for sessions. It helps me to come when I am free.',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_1/Youtube-Shorts-Symbol.jpg',
    avatarName: 'Ankit',
    avatarDesignation: 'Dialysis Patient',
    centre: "Oscar Hospital, Panipat",
    youtubeLink:"https://youtube.com/shorts/oj9YbvOyCRg?feature=share"
  },
  {
    text: 'The technicians are very good. They know how to do everything right, and I feel safe.',
    ratingNumber: '4.5',
    avatarImgUrl: '/images/home_1/Youtube-Shorts-Symbol.jpg',
    avatarName: 'Baljinder',
    avatarDesignation: 'Dialysis Patient',
    centre: "Indrani Hospital, Bathinda",
    youtubeLink:"https://youtube.com/shorts/eDX6yX9g_Jw?feature=share"
  },
  {
    text: 'They explain everything to me. I always know what is happening.',
    ratingNumber: '4',
    avatarImgUrl: '/images/home_1/Youtube-Shorts-Symbol.jpg',
    avatarName: 'Harish Chandra',
    avatarDesignation: 'Dialysis Patient',
    centre: "Fortune Hospital, kanpur",
    youtubeLink:"https://youtube.com/shorts/9bXn-eOKVpM?feature=share"
  },
  {
    text: `The machines are good. They don’t make noise and I never have problems.`,
    ratingNumber: '4.5',
    avatarImgUrl: '/images/home_1/Youtube-Shorts-Symbol.jpg',
    avatarName: 'Satyabhawna',
    avatarDesignation: 'Dialysis Patient',
    centre: "Fortune Hospital, kanpur",
    youtubeLink:"https://youtube.com/shorts/_MnEen3ZErU?feature=share"
  },
  {
    text: `The centre is always very clean. Everything looks neat and tidy.`,
    ratingNumber: '5',
    avatarImgUrl: '/images/home_1/Youtube-Shorts-Symbol.jpg',
    avatarName: 'Samreen',
    avatarDesignation: 'Dialysis Patient',
    centre: "Lotus Hospital, Agra",
    youtubeLink:"https://youtube.com/shorts/ilUrt8C0Lnc?feature=share"
  },
  {
    text: `मुझे कभी वेट करना नहीं पड़ता, डायलिसिस टाइम पे शुरू हो जाता है। वो मुझे बहुत सुविधाजनक लगता है।`,
    ratingNumber: '4',
    avatarImgUrl: '/images/home_1/Youtube-Shorts-Symbol.jpg',
    avatarName: 'Sakshi',
    avatarDesignation: `Patient's Attendent`,
    centre: "Vatsalya Hospital, Allahabad",
    youtubeLink:"https://youtube.com/shorts/QfxSyjJCORw?feature=share"
  },
  {
    text: `यहां पर परिवार को इलाज के दौरान साथ रहने की सुविधा मिलती है, जो मुझे बहुत अच्छा लगता है।`,
    ratingNumber: '4.5',
    avatarImgUrl: '/images/home_1/Youtube-Shorts-Symbol.jpg',
    avatarName: 'Rashmi Soni',
    avatarDesignation: 'Dialysis Patient',
    centre: "Lotus Hospital, Agra",
    youtubeLink:"https://youtube.com/shorts/OtPUApTjSP8?feature=share"
  },
  {
    text: `डॉक्टर्स बहुत अनुभवी हैं और वे मेरी बीमारी के बारे में पूरी जानकारी देते हैं।`,
    ratingNumber: '5',
    avatarImgUrl: '/images/home_1/Youtube-Shorts-Symbol.jpg',
    avatarName: 'Monika Jain',
    avatarDesignation: 'Dialysis Patient',
    centre: "jai Clinic, Beawar",
    youtubeLink:"https://youtube.com/shorts/XRKNOg4hdmQ?feature=share"
  },
  {
    text: `अस्पताल का वातावरण शांत और आरामदायक होता है, जिससे मुझे तनाव कम होता है।`,
    ratingNumber: '4.5',
    avatarImgUrl: '/images/home_1/Youtube-Shorts-Symbol.jpg',
    avatarName: 'Pragya',
    avatarDesignation: 'Dialysis Patient',
    centre: "Jai Clinic, Beawar",
    youtubeLink:"https://youtube.com/shorts/LSWEpjJybsQ?feature=share"
  }
];

export default function Home() {
  pageTitle('Home');
  return (
    <>
      <Hero
        title="Your Partner in Health and Wellness"
        subTitle="We are committed to providing you with the best medical and healthcare services to help you live healthier and happier."
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="/images/home_1/hero_img_1.png"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/A8frKbB-9jw"
        infoList={[
          {
            title: 'Hotline',
            subTitle: '123-456-7890',
            iconUrl: '/images/contact/icon_1.svg',
          },
          {
            title: 'Ambulance',
            subTitle: '876-256-876',
            iconUrl: '/images/icons/ambulance.svg',
          },
          {
            title: 'Location',
            subTitle: 'New York, US',
            iconUrl: '/images/icons/pin.svg',
          },
        ]}
        btnText="Book Now"
        btnUrl="/appointments"
      />
      {/* Start Feature Section */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
        className="customised_section_bd"
        style={{ backgroundImage: `url(/images/home_1/department_bg.svg)` }}
      >
        <FeaturesSection sectionTitle="Our Values" data={featureListData} />
      </Section>
      {/* End Feature Section */}
      {/* Start About Section */}
      <Section>
        <AboutSection
          imgUrl="/images/tier-2-ladies-with-logo-entrance.png"
          spiningImgUrl="#"
          title="About Us"
          subTitle=""
          featureList={[
            {
              featureListTitle:
                '',
              featureListSubTitle:
                ` `,
            },
          ]}
        />
      </Section>
      {/* End About Section */}
      {/* Start Departments Section */}
      <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="Services"
          bgUrl="images/home_1/department_bg.svg"
          data={departmentData}
        />
      </Section>

      {/* End Departments Section */}
      {/* Start Award Section */}
      <Section topMd={185} topLg={140} topXl={100}>
        <AwardSection sectionTitle="VitusCare In News" data={awardData} />
      </Section>
      {/* End Award Section */}
      {/* Start Testimonial */}
      {/* not using testimonial index file */}
      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: `url(/images/home_2/testimonial_bg.svg)`, marginTop: "35px" }}
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSectionStyle2
          sectionTitle="What Our Patients Say"
          sectionTitleUp="TESTIMONIALS"
          data={testimonialData}
        />
      </Section>
      {/* End Testimonial */}
      {/* Start Banner Section */}
      <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/GFR.png"
          title="Find About Your Kidney Health Now !"
          subTitle=""
          buttonUrl="/grf-calculator"
        />
      </Section>
      {/* End Banner Section */}
      {/* Start Blog Section */}
      {/* <Section topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          data={blogData}
        />
      </Section> */}
      {/* End Blog Section */}
      {/* Start Appointment Section */}
      {/* <Section topMd={190} topLg={145} topXl={105} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.jpeg"
        />
      </Section> */}
      {/* End Appointment Section */}
      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Frequently Asked Questions"
          sectionTitleUp=""
        />
      </Section>
      {/* End FAQ Section */}
      {/* Start Brand Section */}
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection sectionTitle={'Empanelments Supported'} data={brandData} />
      </Section>
      {/* End Brand Section */}
    </>
  );
}

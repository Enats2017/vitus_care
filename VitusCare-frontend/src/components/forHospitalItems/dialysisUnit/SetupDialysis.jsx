import React, { useState } from 'react';
import Section from '../../Section';
import { Icon } from '@iconify/react';
import DepartmentSectionStyle6 from '../../Section/DepartmentSection/DepartmentSectionStyle6';
import FeaturesSectionStyle3 from '../../Section/FeaturesSection/FeaturesSectionStyle3';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "reactstrap";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import AboutSectionStyle5 from '../../Section/AboutSection/AboutSectionStyle5'
import NewUnitForm from '../../AppointmentForm/NewUnitForm';

const SetupDialysis = () => {

    const [open, setOpen] = useState("0");

    const accordionData = [
        {
            header: "CAPEX & OPEX",
            body: "Starting and managing a dialysis unit requires a significant investment.",
        },
        {
            header: "OPERATIONAL COMPLEXITY",
            body: "Managing a dialysis unit involves significant operational challenges, including inventory management, employee/technician management, and equipment maintenance.",
        },
        {
            header: "COST MANAGEMENT",
            body: "Cost towards operations and consumables become effective only beyond a certain scale.",
        },
        {
            header: "PATIENT AWARENESS",
            body: "Reaching dialysis patients requires a focused approach vs a multi-specialty way of marketing.",
        },
        {
            header: "NEPHROLOGIST TIE-UP / TECHNICIAN TRAINING & UPSKILLING",
            body: "On boarding a nephrologist for regular OPD consultation & positioning as a leading renal service provider in the area. Specialist dialysis players better equipped in hiring skilled technicians, continuous training, daily management & retention.",
        },
    ];
    // Sample data for the WorkingProcess component
    const workingProcessData = [
        {
            title: 'CAPEX INVESTMENT',
            subTitle: `Upto 1 crore depending on scale of operations and potential to invest further with growth.`,
            iconUrl: '/images/home_2/streamline--investment-selection.svg',
            number: '01',
        },
        {
            title: 'COMPLETE SOURCING',
            subTitle: `Equipment & consumables (25+ unique consumables required for every session) Hence, several treatment combinations are required while administering the therapy.`,
            iconUrl: '/images/home_2/wording_process_icon_2.svg',
            number: '02',
        },
        {
            title: 'INVENTORY CONTROL',
            subTitle: `No single supplier of all consumables, requires managing 25 different vendors each with a different MOQ, payment terms and delivery timelines
`,
            iconUrl: '/images/home_2/ic--outline-inventory.svg',
            number: '03',
        },
        {
            title: 'HUMAN RESOURCE',
            subTitle: `Onboarding, skilling and regular refresher training of technicians and nurses, apart from interventions by Clinical & Biomedical specialists (high attrition roles managed efficiently by our hub & spoke approach)
`,
            iconUrl: '/images/home_2/healthicons--i-training-class-outline.svg',
            number: '04',
        },
        {
            title: 'CLINICAL & BEHAVIORAL TRAINING',
            subTitle:
                `Continuous clinical and behavioral training by leading industry experts to enable high quality patient care and retention
`,
            iconUrl: '/images/home_2/wording_process_icon_5.svg',
            number: '05',
        },
        // {
        //     title: 'MARKETING',
        //     subTitle:
        //         'Co-branded marketing initiatives across multiple channels to onboard patients',
        //     iconUrl: '/images/home_2/wording_process_icon_6.svg',
        //     number: '06',
        // },
        {
            title: 'EQUIPMENT MAINTENANCE',
            subTitle:
                'Rigorous preventive maintenance schedule and dedicated teams for reactive maintenance to ensure longevity and quality of equipment',
            iconUrl: '/images/home_2/pajamas--issue-type-maintenance.svg',
            number: '07',
        },
        {
            title: 'HOLISTIC SOLUTION',
            subTitle:
                'Billing support and management + Nephrologist tie-up',
            iconUrl: '/images/home_2/wording_process_icon_8.svg',
            number: '08',
        },
    ];

    // Feature data with random icons
    const featureData = [
        {
            icon: 'mdi:clipboard-text-outline', // Represents making a record
            title: '45L',
            description: 'ESRD* Cases recorded',
            color: 'text-primary',
        },
        {
            icon: 'mdi:checkbox-marked-circle-outline', // Represents choosing something
            title: '4%',
            description: 'ESRD* cases opt for dialysis',
            color: 'text-success',
        },
        {
            icon: 'mdi:chart-line', // Represents an increasing graph
            title: '2.2L',
            description: 'New ESRD* cases every year',
            color: 'text-danger',
        },
        {
            icon: 'healthicons:kidneys-outline', // Represents a kidney
            title: '~11k',
            description: 'Kidney transplants per year',
            color: 'text-warning',
        },
        {
            icon: 'mdi:heart-pulse', // Represents a life line
            title: '~3%',
            description: 'of deaths in India due to CKD*',
            color: 'text-info',
        },
        {
            icon: 'fa:globe', // Represents global
            title: '2-3 yrs',
            description: 'Life expectancy with dialysis',
            color: 'text-secondary',
        },
    ];

    const smallDivData = [
        {
            icon: 'material-symbols:check-circle-outline', // Valid
            content: 'India has only ~ 6,000 dialysis centres, with 90% located in Tier 1 & 2 cities. lack of access leads to low frequency of treatment.',
        },
        {
            icon: 'mdi:stethoscope', // Valid
            content: 'Currently ~1.8L patients undergo dialysis and every year ~2.2L patients are added doubling of capacity is required.',
        },
        {
            icon: 'mdi:shield-check-outline', // Valid
            content: 'Shortage of skilled and trained technicians.',
        },
        {
            icon: 'mdi:heart-outline', // Valid
            content: 'Patient infection rates are the high in poorly run centers; thereby affecting life expectancy even after dialysis.',
        },
    ];

    const carouselItems = [
        { text: "DIALYSIS REVENUE SHARE" },
        // { text: "WORD OF MOUTH" },
        { text: "OPD REVENUES" },
        { text: "ICU/IPD REVENUES" },
        { text: "PHARMACY REVENUES" },
        { text: "LAB REVENUES" },
        { text: "PROCEDURES" },
    ];

    const toggle = (id) => {
        if (open === id) {
            setOpen(""); // Close the currently open accordion item
        } else {
            setOpen(id); // Open the clicked accordion item
        }
    };

    // const imageBoxData = [
    //     {
    //         imgSrc: "/images/capex.png",
    //         title: "CAPEX",
    //         subtitle: "Cutting-edge technology to ensure the best care for patients.",
    //     },
    //     {
    //         imgSrc: "/images/opex.png",
    //         title: "OPEX",
    //         subtitle: "Unlock multiple revenue streams with our tailored approach.",
    //     },
    //     {
    //         imgSrc: "/images/operational-involvement.png",
    //         title: "ZERO OPERATIONAL COST",
    //         subtitle: "Experienced professionals to assist you every step of the way.",
    //     },
    // ];

    const imageBoxData2 = [
        {
            imgSrc: "/images/c-banner-3.jpg",
            title: "Best-in-Class Clinical Protocols",
            subtitle: "Dedicated central team with experience from top institutions Medanta, Fortis, Tata Memorial, Max ensuring protocol compliance. Real-time checks withh periodic and surprises audits",
        },
        {
            imgSrc: "/images/c-banner-3.jpg",
            title: "Win-Win Partnership",
            subtitle: "Tailored commercial propositions for hospital, nephrologist and VitusCare. Transparent paperwork, streamlined billing, and comprehensive reviews Patient-focused partnership: VitusCare manages all operations and challenges",
        },
        {
            imgSrc: "/images/c-banner-3.jpg",
            title: "Market Expertise",
            subtitle: "Deep understanding of marketing assessment and pricing strategies. Rapid 'go to market' and launch approach driving utilization proven track record in patient acquisition and retention",
        },
    ];

    const sirfQuality = [
        {
            title: 'Vaccinations Department',
            subTitle:
                'India has only ~ 6,000 dialysis centres, with 90% located in Tier 1 & 2 cities. lack of access leads to low frequency of treatment.',
            iconUrl: '/images/departments/icon_9.svg',
        },
        {
            title: 'Management of acute illnesses',
            subTitle:
                'Currently ~1.8L patients undergo dialysis and every year ~2.2L patients are added doubling of capacity is required.',
            iconUrl: '/images/departments/icon_10.svg',
        },
        {
            title: 'Treatment of chronic conditions',
            subTitle:
                'Shortage of skilled and trained technicians.',
            iconUrl: '/images/departments/icon_11.svg',
        },
        {
            title: 'Developmental screenings',
            subTitle:
                'Patient infection rates are the high in poorly run centers; thereby affecting life expectancy even after dialysis.',
            iconUrl: '/images/departments/icon_12.svg',
        },
    ];

    return (
        <>
            {/* <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <CustomBanner
                    bgUrl="/images/web-banner.png"
                    title="New Banner"
                    subTitle="Test banner"
                />
            </Section> */}
            {/* mid section */}
            <Section topMd={175} topLg={125} topXl={165} bottomMd={100} bottomLg={110} style={{ backgroundColor: "#f9f9f9" }}>
                <Container>
                    <Row className="align-items-center">
                        {/* Left Column: Text Section */}
                        <Col md={6} className="text-start">
                            <h1
                                className="fw-bold"
                                style={{ color: "#002060", fontSize: "56px", lineHeight: "1.5" }}
                            >
                                BOOST YOUR BOTTOM LINE WITH{" "}
                                <span style={{ color: "#ff0000" }}>VitusCare</span>!
                            </h1>

                            <p
                                className="mt-2"
                                style={{
                                    color: "#002060",
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    borderTop: "2px solid red",
                                    paddingTop: "10px",
                                }}
                            >

                            </p>

                            <p
                                className="fw-medium mt-4"
                                style={{ color: "#002060", fontSize: "20px", fontWeight: "500" }}
                            >
                                Unlock <span style={{ color: 'red' }}>MULTIPLE</span> Revenue streams
                            </p>

                        </Col>

                        {/* Right Column: Carousel Section */}
                        <Col md={6} className="text-center">
                            <Carousel
                                indicators={false}
                                controls={true}
                                className="carousel-circle"
                                interval={1000}
                            >
                                {carouselItems.map((item, index) => (
                                    <Carousel.Item key={index} className="text-center">
                                        <div
                                            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "320px",
                                                height: "320px",
                                                backgroundColor: "#002060", // Set the background to red
                                                fontSize: "24px",
                                                fontWeight: "bold",
                                                color: "white", // Text color set to white
                                            }}
                                        >
                                            {item.text}
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>

                    </Row>
                </Container>
            </Section>

            {/* accordian */}

            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h1 className="fw-bold blue_color">Why Choose VitusCare?</h1>
                    </div>
                    <div className="row align-items-center">
                        {/* Content Side */}
                        <div className="col-md-6">
                            <div style={{ fontSize: "44px", fontWeight: "bold", lineHeight: "1.5" }}>
                                <p className='blue_color'><span className='red_color'>STARTING</span> AND <span className='red_color'>MANAGING</span>  A DIALYSIS CENTER REMAINS CHALLENGING FOR <span className='red_color'>  &gt; 73%</span> OF PRIVATE HOSPITALS OF <span className='red_color'>INDIA</span></p>
                            </div>
                        </div>

                        {/* Accordion Side */}
                        <div className="col-md-6">
                            <Accordion open={open} toggle={toggle}>
                                {accordionData.map((item, index) => (
                                    <AccordionItem key={index}>
                                        <AccordionHeader
                                            className="blue_color"
                                            style={{ fontSize: "30px" }} // Set the font size
                                            targetId={`${index}`}
                                        >
                                            {item.header}
                                        </AccordionHeader>
                                        <AccordionBody accordionId={`${index}`}>
                                            {item.body}
                                        </AccordionBody>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                    </div>
                </div>
            </Section>

            {/* why  choose us */}

         




            {/* Working Process Section */}
            <Section topMd={105} bottomMd={105}>
                <DepartmentSectionStyle6
                    sectionTitle="Hassle Free END-TO-END"
                    sectionTitleUp="How Do We Do It?"
                    sectionTitleDown="SPENDS & MANAGEMENT OF THE CENTER"
                    sectionSubTitle="How VitusCare ensures a seamless dialysis unit setup"
                    data={workingProcessData}
                />
            </Section>
            <Section topMd={100} topLg={120} topXl={100}>
                <div className="out_side_form" style={{  margin: '0 auto', padding: '4px' }}>
                    <h2 className="red_color cs_fs_40 cs_medium mb-0">Reach Out To Us</h2>
                    <div className="cs_height_42 cs_height_xl_25" />
                    <NewUnitForm />
                </div>
            </Section>

        </>
    );
};

export default SetupDialysis;

import React, { useState } from 'react';
import Section from '../../Section';
import { Icon } from '@iconify/react';
import WorkingProcess from '../../Section/WorkingProcess';
import CustomBanner from '../../Section/BannerSection/BannerSectionStyle4';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "reactstrap";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import DialysisUnitForm from '../../AppointmentForm/DialysisUnitForm'

const OutsourceUnit = () => {

    const [open, setOpen] = useState("0");

    const accordionData = [
        {
            header: "CAPEX & OPEX",
            body: "Starting and managing a dialysis unit requires significant capital both in form of capex and working capital",
        },
        {
            header: "OPERATIONAL COMPLEXITY",
            body: "Managing a dialysis unit involves a significant operational challenges, including inventory management, employee/technician management, and equipment maintenance",
        },
        {
            header: "COST MANAGEMENT",
            body: "Cost towards operations and consumables become effective only beyond a certain scale",
        },
        {
            header: "REACHING PATIENTS IN CAPS",
            body: "Reaching out to dialysis patients requires a focused approach vs a multi-specialty way of marketing",
        },
        {
            header: "NEPHROLOGIST TIE-UP / TECHNICIAN TRAINING & UPSKILLING",
            body: "On boarding a nephrologist for regular OPD consultation & positioning as a leading renal service provider in the area. Specialist dialysis players better equipped in hiring skilled technicians, continuous training, daily management & retention.",
        },
    ];
    // Sample data for the WorkingProcess component
    const workingProcessData = [
        {
            title: 'Replacement of CAPEX',
            subTitle:
                'Replace your old infrastructure with new state of the art Dialysis infrastructure',
            iconUrl: '/images/home_2/wording_process_icon_1.svg',
            number: '01',
        },
        {
            title: 'COMPLETE SOURCING',
            subTitle:
                'Equipment and consumables',
            iconUrl: '/images/home_2/wording_process_icon_2.svg',
            number: '02',
        },
        {
            title: 'INVENTORY CONTROL',
            subTitle:
                'Management of a complex supply chain and different vendors',
            iconUrl: '/images/home_2/wording_process_icon_3.svg',
            number: '03',
        },
        {
            title: 'HUMAN RESOURCE',
            subTitle:
                'Onboarding, skills and regular refresher <br/> training of technicians and nurses',
            iconUrl: '/images/home_2/wording_process_icon_4.svg',
            number: '04',
        },
        {
            title: 'CLINICAL & BEHAVIORAL TRAINING',
            subTitle:
                'Continuous clinical and behavioural training by <br/> leading industry experts to enable high quality patient <br/> care and retention',
            iconUrl: '/images/home_2/wording_process_icon_5.svg',
            number: '05',
        },
        {
            title: 'MARKETING',
            subTitle:
                'CO-branded marketing initiatives across <br/> multiple channels to each patints',
            iconUrl: '/images/home_2/wording_process_icon_6.svg',
            number: '06',
        },
        {
            title: 'EQUIPMENT MAINTENANCE',
            subTitle:
                'Rigorous preventive maintenance schedule <br/> and dedicated terms for reactive maintenance',
            iconUrl: '/images/home_2/wording_process_icon_7.svg',
            number: '07',
        }
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

    const imageBoxData = [
        {
            imgSrc: "/images/2.png",
            title: "Advanced Dialysis Solutions",
            subtitle: "Cutting-edge technology to ensure the best care for patients.",
        },
        {
            imgSrc: "/images/c-banner-3.jpg",
            title: "Comprehensive Revenue Model",
            subtitle: "Unlock multiple revenue streams with our tailored approach.",
        },
        {
            imgSrc: "/images/c-banner-3.jpg",
            title: "Expert Guidance",
            subtitle: "Experienced professionals to assist you every step of the way.",
        },
    ];

    const imageBoxData2 = [
        {
            imgSrc: "/images/clinical-protocols.png",
            title: "Best-in-Class Clinical Protocols",
            subtitle: "Dedicated central team with experience from top institutions Medanta, Fortis, Tata Memorial, Max ensuring protocol compliance. Real-time checks withh periodic and surprises audits",
        },
        {
            imgSrc: "/images/partnership.png",
            title: "Win-Win Partnership",
            subtitle: "Tailored commercial propositions for hospital, nephrologist and VitusCare. Transparent paperwork, streamlined billing, and comprehensive reviews Patient-focused partnership: VitusCare manages all operations and challenges",
        },
        {
            imgSrc: "/images/market-expertise.png",
            title: "Market Expertise",
            subtitle: "Deep understanding of marketing assessment and pricing strategies. Rapid 'go to market' and launch approach driving utilization proven track record in patient acquisition and retention",
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
            <Section topMd={175} topLg={125} topXl={145} bottomMd={100} bottomLg={110}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h1 className="fw-bold blue_color">Why Choose VitusCare?</h1>
                    </div>
                    <div className="row align-items-center">
                        {/* Content Side */}
                        <div className="col-md-6">
                            <div style={{ fontSize: "44px", fontWeight: "bold", lineHeight: "1.5" }}>
                                <p className='blue_color'><span className='red_color'>STARTING</span> AND <span className='red_color'>MANAGING</span>  A DIALYSIS CENTER REMAINS CHALLENGING FOR <span className='red_color'>73%</span> OF PRIVATE HOSPITALS OF <span className='red_color'>INDIA</span></p>
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
             {/* mid section */}
            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110} style={{ backgroundColor: "#f9f9f9" }}>
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
                                <span style={{ color: 'red' }}>Enhance</span> Your Revenue streams
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
            {/* Working Process Section */}
            <Section topMd={105} bottomMd={105}>
                <WorkingProcess
                    sectionTitle="Hassle Free END-TO-END"
                    sectionTitleUp="How Do We Do It?"
                    sectionTitleDown="SPENDS & MANAGEMENT OF THE CENTER"
                    sectionSubTitle="How VitusCare ensures a seamless dialysis unit setup"
                    data={workingProcessData}
                />
            </Section>

            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <Container>
                    {/* Section Title */}
                    <div className="text-center mb-4">
                        <h2 className="fw-bold" style={{ fontSize: "46px", color: "#002060" }}>
                            What Do We Offer?
                        </h2>

                    </div>

                    {/* Image Boxes */}
                    <Row>
                        {imageBoxData2.map((item, index) => (
                            <Col md={4} className="mb-4" key={index}>
                                <div
                                    className="image-box"
                                    style={{
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "#fff",
                                        height: "600px",
                                    }}
                                >
                                    {/* Image */}
                                    <img
                                        src={item.imgSrc}
                                        alt={item.title}
                                        style={{
                                            width: "100%",
                                            height: "350px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    {/* Title and Subtitle */}
                                    <div className="p-3 text-center">
                                        <h5
                                            className="fw-bold"
                                            style={{ fontSize: "30px", color: "#002060" }}
                                        >
                                            {item.title}
                                        </h5>
                                        <p className="text-muted" style={{ fontSize: "14px" }}>
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Section>

            <Section topMd={100} topLg={120} topXl={100}>
                <div className="out_side_form" style={{margin:'0 auto', padding:'4px'}}>
                    <h2 className="red_color cs_fs_40 cs_medium mb-0">Reach Out To Us</h2>
                    <div className="cs_height_42 cs_height_xl_25" />
                    <DialysisUnitForm />
                </div>
            </Section>
        </>
    );
};

export default OutsourceUnit;

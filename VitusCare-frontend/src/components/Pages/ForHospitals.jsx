import React from 'react';
import Section from '../Section';
import DividedOptionSection from '../forHospitalItems/DividedOptionSection';
import { pageTitle } from '../../helpers/PageTitle';

const hospitalData = [
  {
    title: 'Setup A New Dialysis Unit',
    subTitle:
      'Partner with VitusCare to set up a cutting-edge dialysis unit at your hospital. Deliver exceptional patient care with advanced technology, expert guidance, and tailored solutions for seamless integration and improved outcomes.',
    featureList: ['Zero Apex', 'Zero Opex', 'Zero operational involvement','Cost management','Patient Aquisition'],
    btnText: 'View Benefits',
    btnUrl: '/partner-with-us/hospitals/new-dialysis-unit',
    popular: false,
  },
  {
    title: 'Outsource An Existing Dialysis Unit',
    subTitle:
      'Already have a dialysis unit? Outsource to VitusCare for expert management, advanced technology, and streamlined operations. Elevate patient care while optimizing costs with our trusted renal care solutions tailored for your hospital.',
    featureList: [
      'Equipment Mantenance',
      'Clinical & Behavioural Training',
      'Inventory Control',
      'Capex Investment',
      'Complete Sourcing',
    ],
    btnText: 'View Benefits',
    btnUrl: '/partner-with-us/hospitals/outsource-vituscare',
    popular: false,
  },
];

const ForHospitals = () => {
  pageTitle("For Hospital")
  return (
    <>
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <DividedOptionSection
          sectionTitle="Choose the right dialysis unit solution for your hospital"
          data={hospitalData}
        />
      </Section>
    </>
  );
};

export default ForHospitals;

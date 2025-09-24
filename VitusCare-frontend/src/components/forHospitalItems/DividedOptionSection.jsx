import React from 'react';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import DividedOptions from './DividedOptions';

export default function DividedOptionSection({ sectionTitle, data }) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} center />
      <Spacing md="72" lg="50" />
      <div className="row cs_gap_y_50 justify-content-center">
        {data?.map((item, index) => (
          <div className="col-xl-6" key={index}>
            <DividedOptions {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

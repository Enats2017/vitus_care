import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle12 from '../../IconBox/IconBoxStyle12';

export default function DepartmentSectionStyle6({
  sectionTitle,
  sectionTitleUp,
  sectionTitleDown,
  data,
}) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} titleDown={sectionTitleDown} center />
      <Spacing md="72" lg="50" />
      <div className="cs_iconbox_12_wrap">
        {data?.map((item, index) => (
          <div key={index}>
            <IconBoxStyle12 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

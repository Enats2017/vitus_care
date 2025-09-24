import React from 'react';

export default function AboutSectionStyle5({
  imgUrl,
  titleUp,
  title,
  subTitle,
  supportTitle,
  supportSubTitle,
}) {
  return (
    <div className="cs_gray_bg_1 cs_half_bg">
      <div className="container">
        <div className="cs_about cs_style_3 cs_radius_20 overflow-hidden" style={{backgroundColor:'#2C2F76'}}>
          <div className="row flex-xl-row flex-column-reverse">
            <div className="col-xl-7 position-relative">
              <div className="cs_about_text d-flex  align-items-center">
                <div className="cs_section_heading cs_style_1">
                  <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold m-0 cs_accent_color cs_fs_32">
                    {titleUp}
                  </h3>
                  <div className="cs_height_5" />
                  <h2 className="cs_section_title cs_fs_72 m-0 " style={{color:'white'}}>WE ARE REVOLUTIONIZING QUALITY DIALYSIS IN <span style={{color:'red'}}>INDIA !</span></h2>
                  <div className="cs_height_85 cs_height_xl_40 cs_height_lg_30" />
                  <p className="cs_section_minititle m-0 cs_heading_color cs_fs_20" style={{color:'white'}}>
                  <span style={{color:'red',fontSize:'38px'}}>50 +</span> Hospital Partners 
                  <p style={{marginTop:'20px'}}>
                  <span style={{color:'red',fontSize:'38px'}}>25,000+</span> Patients Served
                  </p>
                  </p>
                </div>
              </div>
              <div className="cs_support_card">
                <div className="cs_support_card_icon">
                  <img src="/images/home_4/support_icon.svg" alt="Icon" />
                </div>
                <div className="cs_support_card_right">
                  <h3 className="cs_fs_24 cs_semibold mb-0">{supportTitle}</h3>
                  <p className="cs_heading_color mb-0">{supportSubTitle}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="cs_about_img">
                <img src={imgUrl} alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

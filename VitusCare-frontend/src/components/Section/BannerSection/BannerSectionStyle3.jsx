import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Button from '../../Button';
import Spacing from '../../Spacing';

function TypingEffect({ text, speed = 70, pause = 1000 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting((prev) => !prev);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, pause]);

  return (
    <p className="cs_banner_subtitle cs_fs_20 mb-0 cs_heading_color red_color">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </p>
  );
}


export default function BannerSectionStyle3({
  bgUrl,
  imgUrl,
  title,
  subTitle,
  btnText,
  btnUrl,
}) {
  const parsedSubTitle = parse(subTitle); // still JSX
  const textOnly = typeof parsedSubTitle === 'string' ? parsedSubTitle : parsedSubTitle?.props?.children || '';
  return (
    <section
      className="cs_banner cs_style_3 cs_bg_filed"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="cs_banner_img" style={{ paddingBottom: '15px' }}>
        <img src={imgUrl} alt="Banner" className="cs_main_banner_img" />
      </div>
      <div className="container">
        <div className="cs_banner_text">
          <h2 className="cs_banner_title cs_fs_72 blue_color">{parse(title)}</h2>
          <TypingEffect text={textOnly} />
          {btnText && (
            <>
              <Spacing md="25" lg="25" xl="25" />
              <Button btnUrl={btnUrl} btnText={btnText} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

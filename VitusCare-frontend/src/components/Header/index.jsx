import React, { useEffect, useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import DropDown from './DropDown';
import SocialWidget from '../Widget/SocialWidget';
// import Newsletter from '../Widget/Newsletter';
import IconBoxStyle11 from '../IconBox/IconBoxStyle11';
import Spacing from '../Spacing';

export default function Header({ logoSrc, variant }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  // const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${mobileToggle ? 'cs_mobile_toggle_active' : ''} ${variant} ${isSticky ? 'cs_active_sticky' : ''}`}
      >
        {/* <nav className="blue_color cs_nav" style={{ justifyContent: "center", backgroundColor: "#e6e9ff", width: "100vw" }}>
          
          <ul className={`${mobileToggle ? 'cs_nav_list cs_active' : 'cs_nav_list'}`}>


            <button style={{ backgroundColor: "#2C2F76", border: "none", borderRadius: "20px", color: "white", padding: "10px 15px" }}>
              <Link to="find-our-centers">Find a center</Link>
            </button>
            <button className='responsive-button'>
                      <Link to="tel:+919862898628">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#f00" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={64} strokeDashoffset={64} d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate><animateTransform id="lineMdPhoneCallLoop0" fill="freeze" attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform></path><path strokeDasharray={4} strokeDashoffset={4} d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4"></animate></path><path strokeDasharray={6} strokeDashoffset={6} d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0.2s" dur="2.7s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6"></animate></path></g></svg>   98628 98628
                      </Link>
                    </button>
          </ul>
        </nav> */}

        <div className="cs_main_header" style={{backgroundColor:'white'}}>
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/">
                  <img src={logoSrc} alt="Logo" width={210} />
                </Link>
              </div>
              <div className="cs_main_header_center">
              <nav className="blue_color cs_nav">
                  <ul className={`${mobileToggle ? 'cs_nav_list cs_active' : 'cs_nav_list'}`}>
                    <li className="cs_nav"><Link className={currentPath === '/' ? 'active-link' : ''} to="/">Home</Link></li>
                    <li className="cs_nav"><Link className={currentPath === '/about' ? 'active-link' : ''} to="/about">About</Link></li>
                    {/* <li><Link to="/blog">Kidney Knowledge Center</Link></li> */}
                    <li><Link className={currentPath === '/career' ? 'active-link' : ''} to="/career">Careers</Link></li>
                    <li className="menu-item-has-children justify-end">
                      <Link to="#">Partner with us</Link>
                      <DropDown>
                        <ul>
                          <li><Link className={currentPath === '/partner-with-us/doctors' ? 'active-link' : ''} to="/partner-with-us/doctors">For Doctors</Link>
                          </li>
                          <li><Link className={currentPath === '/partner-with-us/hospitals' ? 'active-link' : ''} to="/partner-with-us/hospitals">For Hospitals</Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    {/* <li><Link to="/feedback">Feedback</Link></li> */}

                    {/* Mobile-only links */}
                    {/* <li className="your-class"><Link to="/career">Careers</Link></li>
                    <li className="menu-item-has-children your-class">
                      <Link to="/partner-with-us">Partner with us</Link>
                      <DropDown>
                        <ul>
                          <li><Link to="/partner-with-us/doctors">For Doctors</Link></li>
                          <li><Link to="/partner-with-us/hospitals">For Hospitals</Link></li>
                        </ul>
                      </DropDown>
                    </li>
                    <button className="your-class" style={{ backgroundColor: "#2C2F76", border: "none", borderRadius: "20px", color: "white", padding: "0 15px" }}>
                      <Link to="find-our-centers">Find a center</Link>
                    </button> */}
                    <div className='button_section'>
                    <button className='responsive-button'>
                      <Link to="tel:+919862898628">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#f00" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={64} strokeDashoffset={64} d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate><animateTransform id="lineMdPhoneCallLoop0" fill="freeze" attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform></path><path strokeDasharray={4} strokeDashoffset={4} d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4"></animate></path><path strokeDasharray={6} strokeDashoffset={6} d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0.2s" dur="2.7s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6"></animate></path></g></svg>   98628 98628
                      </Link>
                    </button>
                    <Link to="find-our-centers" className="neon-button" style={{ marginLeft: '10px' }}>
                      <svg
                        className="neon-svg"
                        viewBox="0 0 300 80"
                        width="300"
                        height="80"
                        preserveAspectRatio="none"
                      >
                        <rect
                          className="neon-line neon-line--outer"
                          x="4"
                          y="4"
                          rx="36"
                          width="292"
                          height="72"
                          fill="none"
                          // stroke="#fff"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        <rect
                          className="neon-line neon-line--inner"
                          x="4"
                          y="4"
                          rx="36"
                          width="292"
                          height="72"
                          fill="none"
                          stroke="rgba(0, 0, 218, 1)"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="neon-content">Find a center</span>
                    </Link>
                    </div>

                  </ul>
                  <span className={mobileToggle ? 'cs_menu_toggle cs_toggle_active' : 'cs_menu_toggle'} onClick={() => setMobileToggle(!mobileToggle)}>
                    <span></span>
                  </span>
                </nav>
              </div>

              {/* Sidebar button */}
              <div className="cs_main_header_right">
                <div className="cs_toolbox">
                  <button
                    className="cs_toolbox_btn cs_sidebar_toggle_btn blue_color"
                    type="button"
                    onClick={() => setSideNav(!sideNav)}
                  >
                    <svg
                      width={35}
                      height={30}
                      viewBox="0 0 35 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.483887 2.46544C0.483887 1.10383 1.14618 0 1.96315 0H33.5208C34.3377 0 35 1.10383 35 2.46544C35 3.82708 34.3377 4.93088 33.5208 4.93088H1.96315C1.14618 4.93088 0.483887 3.82708 0.483887 2.46544Z"
                        fill="#2C2F76"
                      />
                      <path
                        d="M0.483887 14.6694C0.483887 13.3074 1.14618 12.2039 1.96315 12.2039H33.5208C34.3377 12.2039 35 13.3074 35 14.6694C35 16.0309 34.3377 17.1348 33.5208 17.1348H1.96315C1.14618 17.1348 0.483887 16.0309 0.483887 14.6694Z"
                        fill="#2C2F76"
                      />
                      <path
                        d="M0.483887 26.6267C0.483887 25.2648 1.14618 24.1613 1.96315 24.1613H33.5208C34.3377 24.1613 35 25.2648 35 26.6267C35 27.9883 34.3377 29.0922 33.5208 29.0922H1.96315C1.14618 29.0922 0.483887 27.9883 0.483887 26.6267Z"
                        fill="#2C2F76"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Component */}
      <div className={`cs_sidenav ${sideNav ? 'active' : ''}`}>
        <div
          className="cs_sidenav_overlay"
          onClick={() => setSideNav(!sideNav)}
        />
        <div className="cs_sidenav_in">
          <button
            className="cs_close"
            type="button"
            onClick={() => setSideNav(!sideNav)}
          >
            <img src="/images/icons/close.svg" alt="Close" />
          </button>
          <div className="cs_logo_box">
            <img src="/images/vitusCare.png" alt="Logo" />
            <Spacing md="15" />
          </div>
          <Spacing md="35" lg="50" />
          <hr />
          <Spacing md="35" lg="50" />
          <IconBoxStyle11
            title="Phone"
            subTitle="98628 98628"
            iconSrc="/images/contact/icon_1.svg"
          />
          <Spacing md="30" lg="30" />
          <IconBoxStyle11
            title="Email"
            subTitle="info@vituscare.com"
            iconSrc="/images/contact/icon_2.svg"
          />
          <Spacing md="70" lg="50" />
          <hr />
          <Spacing md="70" lg="50" />
          <SocialWidget />
        </div>
      </div>
    </>
  );
}

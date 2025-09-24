import React,{useState, useEffect} from "react";
import DropDown from "./DropDown";
import {Link} from 'react-router-dom'

const UpperHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return <>
        <div className="cs_main_header">
            <div className="container">
                <div className="cs_main_header_in">

                <nav className="blue_color cs_nav" style={{ justifyContent: "end", marginLeft:"80px", backgroundColor:"#e6e9ff", width:"80.5vw" }}>
              <ul
                className={`${mobileToggle ? 'cs_nav_list cs_active' : 'cs_nav_list'
                  }`}
              >
                <li>
                  <Link to="/appointments">Careers</Link>
                </li>
                <li className="menu-item-has-children justify-end">
                  <Link to="/partner-with-us">Partner with us</Link>
                  <DropDown>
                    <ul>
                      <li>
                        <Link to="/partner-with-us/doctors">For Doctors</Link>
                      </li>
                      <li>
                        <Link to="/partner-with-us/hospitals">For Hospitals</Link>
                      </li>
                    </ul>
                  </DropDown>
                </li>
                <button style={{backgroundColor:"#2C2F76", border:"none", borderRadius:"20px", color:"white", padding:"0 15px"}}>
                  <Link to="/dial-for-dialysis">Find a center</Link>
                </button>
              </ul>
              <span
                className={
                  mobileToggle
                    ? 'cs_menu_toggle cs_teggle_active'
                    : 'cs_menu_toggle'
                }
                onClick={() => setMobileToggle(!mobileToggle)}
              >
                <span></span>
              </span>
            </nav>
                </div>
            </div>
        </div>
    </>;
};

export default UpperHeader;

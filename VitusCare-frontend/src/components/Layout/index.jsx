import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer2 from '../Footer/FooterStyle2';
import Header from '../Header';
import Appointment from '../AppointmentForm/index';

export default function Layout() {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  // Toggle modal visibility
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const navItems = [
    {
      label: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="#2c2f76"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
          />
        </svg>
      ),
      link: '/',
    },
    {
      label: 'Call Us',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2C2F76" d="m7.057 2.418l1.167-.351a2.75 2.75 0 0 1 3.302 1.505l.902 2.006a2.75 2.75 0 0 1-.633 3.139L10.3 10.11a.25.25 0 0 0-.078.155c-.044.397.225 1.17.846 2.245c.45.781.859 1.33 1.206 1.637c.243.215.376.261.433.245l2.01-.615a2.75 2.75 0 0 1 3.034 1.02l1.28 1.776a2.75 2.75 0 0 1-.338 3.605l-.887.84a3.75 3.75 0 0 1-3.587.889c-2.754-.769-5.223-3.093-7.435-6.924C4.57 11.147 3.792 7.843 4.51 5.07a3.75 3.75 0 0 1 2.548-2.652m.433 1.437a2.25 2.25 0 0 0-1.53 1.59c-.602 2.332.087 5.261 2.123 8.788c2.034 3.522 4.223 5.583 6.54 6.23a2.25 2.25 0 0 0 2.152-.534l.886-.84a1.25 1.25 0 0 0 .154-1.639l-1.28-1.775a1.25 1.25 0 0 0-1.38-.464l-2.015.617c-1.17.348-2.231-.593-3.371-2.568c-.77-1.33-1.128-2.36-1.038-3.161c.046-.416.24-.8.545-1.086l1.495-1.393a1.25 1.25 0 0 0 .287-1.427l-.901-2.006a1.25 1.25 0 0 0-1.501-.684z" /></svg>
      ),
      link: '/careers',
    },
    {
      label: 'Appointment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15">
          <path
            fill="none"
            stroke="#2c2f76"
            d="M3.5 0v5m8-5v5M3 7.5h3m6 0H9m-6 3h3m3 0h3m-10.5-8h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z"
          />
        </svg>
      ),
      onClick: handleOpenModal,
    },
    {
      label: 'Find center',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#2C2F76" d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" /></g></svg>
      ),
      link: '/find-our-centers',
    },
  ];

  // Check if the screen size is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <Header logoSrc="/images/vitusCare.png" variant="cs_heading_color" />
      <Outlet />
      <Footer2 />
      <div className="whatsapp-icon">
        <a
          href="https://wa.me/+919971832008"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="256" height="258" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#1faf38" /><stop offset="100%" stopColor="#60d669" /></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#f9f9f9" /><stop offset="100%" stopColor="#fff" /></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004" /><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z" /><path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64" /></svg>
        </a>
      </div>

      {/* Fixed "Book an Appointment" Div for PC View */}
      {!isMobile && (location.pathname !== '/thank-you' && location.pathname !== '/career' && location.pathname !== '/feedback') && (
        <div
          style={{
            position: 'fixed',
            // top: '580px',
            bottom: '20px',   // <-- instead of top: 580px
            // right: '0px',
            zIndex: 1000,
            width: '120px',
            height: '130px',
            backgroundColor: '#fff',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transform: 'rotate(90deg)',
            transformOrigin: 'center',
          }}
          onClick={handleOpenModal}
        >
          <div
            style={{
              transform: 'rotate(-90deg)',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: '0', color: '#2c2f76', fontWeight: 'bold', paddingTop: '10px' }}>I Need <br />Dialysis</p>
            <div
              style={{
                // marginTop: '7px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                padding: '8px',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 24 24">
                <rect width="14" height="0" x="5" y="5" fill="#2C2F76">
                  <animate fill="freeze" attributeName="height" dur="3.7s" values="0;3;3" keyTimes="0;0.73;1" repeatCount="indefinite" />
                </rect>
                <g fill="none" stroke="#2C2F76" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path stroke-dasharray="64" stroke-dashoffset="64" d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="3.7s" values="64;0;0" keyTimes="0;0.73;1" repeatCount="indefinite" />
                  </path>
                  <path stroke-dasharray="4" stroke-dashoffset="4" d="M7 4v-2M17 4v-2">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="3.7s" values="4;0;0" keyTimes="0;0.73;1" repeatCount="indefinite" />
                  </path>
                  <path stroke-dasharray="12" stroke-dashoffset="12" d="M7 11h10">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="3.7s" values="12;0;0" keyTimes="0;0.73;1" repeatCount="indefinite" />
                  </path>
                  <path stroke-dasharray="8" stroke-dashoffset="8" d="M7 15h7">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="3.7s" values="8;0;0" keyTimes="0;0.73;1" repeatCount="indefinite" />
                  </path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Bar */}
      {isMobile  && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '60px',
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          {navItems.map((item, index) => (
            <Link
              to={item.link || '#'}
              key={index}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '12px',
                cursor: 'pointer',
              }}
              onClick={item.onClick}
            >
              <span>{item.icon}</span>
              <p style={{ margin: '5px 0 0', color: '#2c2f76', fontWeight: 'bold' }}>{item.label}</p>
            </Link>
          ))}
        </div>
      )}

      {/* Modal for Appointment Form */}
      {showModal && (location.pathname !== '/thank-you' && location.pathname !== '/career' && location.pathname !== '/feedback') && (
        <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2000,
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "10px",
            maxWidth: "800px",
            width: "90%",
            position: "relative",
          }}
        >
          
          <button
            onClick={handleCloseModal}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "18px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
          <Appointment onSuccess={handleCloseModal} />
        </div>
      </div>
      )}
    </>
  );
}

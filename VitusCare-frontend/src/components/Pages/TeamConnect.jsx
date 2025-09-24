import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Section from '../Section';
import Lottie from 'lottie-react';

const TeamConnect = () => {
  const [animationData, setAnimationData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch('/images/success.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading animation:', error));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Get the previous route from location.state, default to '/' if not available
      const previousPath = location.state?.from || '/';
      navigate(previousPath);
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
    <Section topMd={170} topLg={120} topXl={80} bottomMd={100}>
      <div style={{ textAlign: 'center', justifySelf: 'center' }}>
        {animationData ? (
          <Lottie animationData={animationData} loop={true} style={{ height: 300 }} />
        ) : (
          <p>Loading animation...</p>
        )}
        <h1 style={{ marginTop: '20px', color: '#2C2F76' }}>Thank You!</h1>
        <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
          We have received your request, our team will get back to you.
        </p>
      </div>
    </Section>
  );
};

export default TeamConnect;
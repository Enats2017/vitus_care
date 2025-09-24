import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from '../Section';
import FeedbackForm from '../AppointmentForm/FeedbackForm';


function Feedback() {
  

  return (
    <>
{/* 
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <div className="container text-center my-5">
          <div className="row justify-content-center">
            <div className="col-12 mb-4">
              <img src="/images/VITUSVEER.jpg" alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
            </div>
            <div className="col-12 my-4">
              {animationData ? (
                <Lottie options={lottieOptions} height={300} width={300} />
              ) : (
                <p>Loading animation...</p>
              )}
            </div>

          </div>
        </div>
      </Section> */}
      <Section
            topMd={185}
            topLg={140}
            topXl={100}
            bottomMd={185}
            bottomLg={140}
            bottomXl={100}
          >

            <FeedbackForm/>
          </Section>
    </>



  );
}

export default Feedback;

import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function FeedbackForm({ onSuccess }) {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    mrId: '',   // ✅ Added MR Identification Number
    ratings: {},
    suggestions: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      ratings: { ...prev.ratings, [question]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.mrId.trim()) {
      toast.error('MR Identification Number is required.');
      return;
    }

    const toastId = toast.loading('Submitting your feedback.');
    try {
      const response = await fetch(`${BASE_URL}/api/feedback-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // ✅ MR ID included here
      });

      let result = await response.json();

      if (response.ok) {
        toast.success('Submitting your feedback!', { id: toastId });
        if (onSuccess) onSuccess();

        navigate('/Success', { state: { from: location.pathname } });

        // Reset the form after submission
        setFormData({
          name: '',
          contactNumber: '',
          email: '',
          mrId: '',   // ✅ reset MR field
          ratings: {},
          suggestions: '',
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to submit feedback. Please try again.', { id: toastId });
    }
  };

  return (
    <form action="#" className="row custom" onSubmit={handleSubmit}>
      {/* Name */}
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">Name</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Enter Your Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      {/* Contact Number */}
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">Contact Number</label>
        <input
          type="tel"
          className="cs_form_field"
          placeholder="Enter Contact Number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
        />
      </div>

      {/* Email */}
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">Email</label>
        <input
          type="email"
          className="cs_form_field"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      {/* MR Identification Number ✅ */}
      <div className="col-lg-6" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">MR Identification Number</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Enter MR ID"
          name="mrId"
          value={formData.mrId}
          onChange={handleInputChange}
        />
      </div>

      {/* Rating Questions */}
      <div className="col-lg-12" style={{ marginBottom: '20px' }}>
        <h4 className="cs_heading_color">Rate Your Experience (1 to 5)</h4>
        {[
          'How satisfied were you with our dialysis staff?',
          'How accessible did you find the dialysis centre?',
          'How would you rate your overall experience at the dialysis centre?',
        ].map((question, index) => (
          <div key={index} className="cs_rating_question" style={{ marginBottom: '15px' }}>
            <label className="cs_input_label">{question}</label>
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              {['1 1', '2 2', '3 3', '4 4', '5 5'].map((rating) => {
                const ratingNumber = rating.split(' ')[0];
                const ratingEmoji = rating.split(' ')[1];
                const isSelected = formData.ratings[question] === ratingNumber;
                return (
                  <div
                    key={rating}
                    onClick={() => handleRatingChange(question, ratingNumber)}
                    style={{
                      cursor: 'pointer',
                      padding: '10px 15px',
                      borderRadius: '8px',
                      border: '1px solid #ccc',
                      backgroundColor: isSelected ? '#4CAF50' : '#f9f9f9',
                      color: isSelected ? '#fff' : '#333',
                      fontSize: '18px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {ratingEmoji}
                  </div>
                );
              })}
            </div>

            {/* Stars below emojis */}
            <div style={{ marginTop: '8px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    color: star <= formData.ratings[question] ? '#FFD700' : '#ccc',
                    fontSize: '20px',
                    marginRight: '2px',
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Suggestions */}
      <div className="col-lg-12" style={{ marginBottom: '20px' }}>
        <label className="cs_input_label cs_heading_color">
          Suggestions for Improvement
        </label>
        <textarea
          className="cs_form_field"
          placeholder="Your suggestions..."
          name="suggestions"
          value={formData.suggestions}
          onChange={handleInputChange}
        />
      </div>

      {/* Submit Button */}
      <div className="col-lg-12">
        <button className="cs_btn cs_style_1" type="submit">
          <span>Submit</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>
    </form>
  );
}

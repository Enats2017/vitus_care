import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function AppointmentForm({ onSuccess }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      appointmentDate: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (
      !formData.name.trim() ||
      !formData.phone.trim()
      
    ) {
      toast.error('Please fill in all required fields!');
      return;
    }
  
    // Show loading toast
    const toastId = toast.loading('Submitting your appointment...');
    const payload = {
      name: formData.name,
      phoneNumber: formData.phone, 
      city: formData.city,
      email: formData.email,
    };
  
    try {
      const response = await fetch(`${BASE_URL}/api/appointment-booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        toast.success('Request sent successfully!', { id: toastId });
  
        if (onSuccess) {
          onSuccess();
        }
        
        navigate('/thank-you');
        
        setFormData({
          name: '',
          city: '',
          phone: '',
          email: '',
        });
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`, { id: toastId });
      }
    } catch (error) {
      toast.error('Failed to book the appointment. Please try again.', { id: toastId });
    }
  };
  
  

  return (
    <form action="#" className="row" onSubmit={handleSubmit}>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Name</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Enter Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Email</label>
        <input
          type="email"
          className="cs_form_field"
          placeholder="Enter Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Phone Number</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Enter Your Phone No"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">City/location</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Enter Your City/location"
          name="city"
          value={formData.city}
          onChange={handleChange}
          
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      {/* <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Age</label>
        <input
          type="number"
          className="cs_form_field"
          placeholder="30"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div> */}
      {/* <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Appointment Date</label>
        <div className="cs_with_icon_input">
          <DatePicker
            selected={formData.appointmentDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
            placeholderText="dd/mm/yyyy"
          />
          <i>
            <Icon icon="fa6-solid:calendar-days" />
          </i>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div> */}

      {/* <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Service</label>
        <div className="cs_select_wrap">
          <select
            className="cs_form_field"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="in-centre-dialysis">In-centre Dialysis</option>
            <option value="homeodialysis">Home Dialysis</option>
            <option value="nephrologist-consultation">Nephrologist Consultation</option>
          </select>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div> */}

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

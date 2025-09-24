import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Section from '../Section';
import { useNavigate,useLocation } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function CareerForm({ onSuccess }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        cv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, cv: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.cv) {
            toast.error("Please upload your CV.");
            return;
        }

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("department", formData.department);
        data.append("cv", formData.cv);

        try {
            const res = await fetch(`${BASE_URL}/api/apply`, {
                method: "POST",
                body: data,
            });

            if (res.ok) {
                toast.success("Form successfully submitted!");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    department: '',
                    cv: '',
                });
                navigate('/TeamConnect', { state: { from: location.pathname } });

                if (onSuccess) {
                    onSuccess();
                }
            } else {
                toast.error("Something went wrong!");
            }
        } catch (err) {
            console.error(err);
            toast.error("Server error!");
        }
    };


    return (
        <>
            
          <section className='section_carrer'>
                <form action="#" className="row" onSubmit={handleSubmit}>
                    {/* Your Name */}
                    <div className="col-lg-6">
                        <label className="cs_input_label cs_heading_color">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            className="cs_form_field"
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <div className="cs_height_42 cs_height_xl_25" />
                    </div>

                    {/* Your Email */}
                    <div className="col-lg-6">
                        <label className="cs_input_label cs_heading_color">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            className="cs_form_field"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className="cs_height_42 cs_height_xl_25" />
                    </div>

                    {/* Your Phone Number */}
                    <div className="col-lg-6">
                        <label className="cs_input_label cs_heading_color">Your Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            className="cs_form_field"
                            placeholder="Enter Your Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <div className="cs_height_42 cs_height_xl_25" />
                    </div>

                    {/* Choose Department */}
                    <div className="col-lg-6">
                        <label className="cs_input_label cs_heading_color">Select Role</label>
                        <select
                            name="department"
                            className="cs_form_field"
                            value={formData.department}
                            onChange={handleChange}
                        >
                            <option value="">Select Role</option>
                            <option value="Clinical Technician">Clinical Technician</option>
                            <option value="Biomedical Engineer">Biomedical Engineer</option>
                            <option value="RO Engineer">RO Engineer</option>
                            <option value="Customer Support">Customer Support</option>
                            <option value="Accounts/Finance">Accounts/Finance</option>
                            <option value="Procurement/Supply Chain">Procurement/Supply Chain</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="Data Analytics">Data Analytics</option>
                            <option value="Sales/Hospital Partnerships">Sales/Hospital Partnerships</option>
                            <option value="Other">Other</option>

                        </select>
                        <div className="cs_height_42 cs_height_xl_25" />
                    </div>

                    {/* Upload CV */}
                    <div className="col-lg-6">
                        <label className="cs_input_label cs_heading_color">Upload CV</label>
                        <div className="cs_file_input_wrapper" style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '15px', padding: '10px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{ marginRight: '10px' }}>
                                <g fill="none" stroke="#f00" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2"></path>
                                    <path d="M11 12.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0m2-4.5l1.5 6l1.5-6"></path>
                                </g>
                            </svg>
                            <input
                                type="file"
                                name="cv"
                                className="cs_form_field"
                                onChange={handleFileChange}
                                style={{ border: 'none', outline: 'none' }}
                            />
                        </div>
                        <div className="cs_height_42 cs_height_xl_25" />
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
            </section>
        </>
    );
}

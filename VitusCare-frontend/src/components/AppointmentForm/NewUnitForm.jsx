import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate,useLocation} from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function NewUnitForm({ onSuccess }) {
    const navigate = useNavigate()
    const location = useLocation();
        
    const [formData, setFormData] = useState({
        state: '',
        city: '',
        hospital: '',
        name: '',
        phone: '',
        email: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.state.trim() ||
            !formData.city.trim() ||
            !formData.hospital.trim() ||
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim() ||
            !formData.description.trim()
        ) {
            toast.error('Please fill in all required fields!');
            return;
        }

        const toastId = toast.loading('Submitting your inquiry...');
        try {
            const response = await fetch(`${BASE_URL}/api/green-field-enquiry`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(formData),
            })

            if (response.ok) {
                toast.success('Inquiry submitted successfully !', { id: toastId })
                if (onSuccess) {
                    onSuccess();
                };

                navigate('/Success', { state: { from: location.pathname } });
        
                setFormData({
                    state: '',
                    city: '',
                    hospital: '',
                    name: '',
                    phone: '',
                    email: '',
                    description: ''
                });
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.message}`, { id: toastId });
            }
        } catch (error) {
            toast.error('Failed to book the appointment. Please try again.', { id: toastId });
        }

    }

    return (
        <form action="#" className="row" onSubmit={handleSubmit}>
            {/* Hospital Name Input */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Hospital Name<span style={{ color: "red" }}>*</span></label>
                <input
                    type="text"
                    name="hospital"
                    className="cs_form_field"
                    placeholder="Enter Hospital Name"
                    value={formData.hospital}
                    onChange={handleChange}
                />
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Select State */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Enter State<span style={{ color: "red" }}>*</span></label>
                <input
                    type="text"
                    name="state"
                    className="cs_form_field"
                    placeholder="Enter State"
                    value={formData.state}
                    onChange={handleChange}
                />
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Select City */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Enter City<span style={{ color: "red" }}>*</span></label>
                <input
                    type="text"
                    name="city"
                    className="cs_form_field"
                    placeholder="Enter City"
                    value={formData.city}
                    onChange={handleChange}
                />
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Your Name */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Your Name<span style={{ color: "red" }}>*</span></label>
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

            {/* Your Phone Number */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Your Phone Number<span style={{ color: "red" }}>*</span></label>
                <input
                    type="tel"
                    name="phone"
                    className="cs_form_field"
                    placeholder="Enter Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Your Email */}
            <div className="col-lg-6">
                <label className="cs_input_label cs_heading_color">Your Email<span style={{ color: "red" }}>*</span></label>
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

            {/* Description */}
            <div className="col-lg-12">
                <label className="cs_input_label cs_heading_color">Description<span style={{ color: "red" }}>*</span></label>
                <textarea
                    name="description"
                    className="cs_form_field"
                    placeholder="Enter Description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
                <div className="cs_height_42 cs_height_xl_25" />
            </div>

            {/* Submit Button */}
            <div className="col-lg-12">
            <button
                className="cs_btn cs_style_1"
                type="submit"
                style={{ marginBottom: '30px' }} // <-- inline CSS here
            >
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

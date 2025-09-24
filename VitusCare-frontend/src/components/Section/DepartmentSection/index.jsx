import React, { useState } from "react";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";
import DepartmentCarousel from "../../Slider/DepartmentCarousel";
import Appointment from "../../AppointmentForm";

export default function DepartmentSection({ sectionTitle, bgUrl, data }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div className="container">
      <div className="cs_departments cs_style_1">
        <div
          className="cs_departments_bg cs_radius_25"
          style={{
            backgroundImage: `url(${bgUrl})`,
          }}
        />
        <SectionHeading title={sectionTitle} center />
        <Spacing md="72" lg="50" />

        {/* Department Carousel */}
        <div className="cs_department_list">
          {/* Pass click handler down */}
          <DepartmentCarousel data={data} onItemClick={handleOpen} />
        </div>
      </div>

      {/* Appointment Modal */}
      {openModal && (
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
              onClick={handleClose}
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

            <Appointment onSuccess={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
}

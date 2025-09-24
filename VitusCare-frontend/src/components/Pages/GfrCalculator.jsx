import React, { useState } from "react";
import toast from "react-hot-toast";
import { pageTitle } from "../../helpers/PageTitle";
import Section from "../Section";
import Feature from "../Section/FeaturesSection/Feature";

export default function GFRCalculator() {
  const [age, setAge] = useState("");
  const [creatinine, setCreatinine] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [gfr, setGFR] = useState(null);
  const [gfrColor, setGfrColor] = useState("");
  const [diseaseStage, setDiseaseStage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!age || !creatinine || !gender || !weight) {
      toast.error("Please fill all fields");
      return;
    }

    const gfrResult = calculateGFR(age, creatinine, gender, weight);
    setGFR(gfrResult);
    setResultColorAndStage(gfrResult);

    toast.success("GFR Calculated!");
  };

    const setResultColorAndStage = (value) => {
    if (value < 15) {
        setGfrColor("#FF0000");
        setDiseaseStage("may mean kindey failure");
    } else if (value >= 15 && value <= 59) {
        setGfrColor("#FF8C00");
        setDiseaseStage("may mean kidney disease");
    } else if (value >= 60 && value <= 89) {
        setGfrColor("#32CD32");
        setDiseaseStage("may mean early kidney disease");
    } else if (value >= 90) {
        setGfrColor("#008000");
        setDiseaseStage("or higher is in the normal range ");
    }
    };



  const calculateGFR = (age, creatinine, gender, weight) => {
    let gfrValue = ((140 - age) * weight) / (72 * creatinine);
    if (gender === "female") {
      gfrValue *= 0.85;
    }

    // Round to two decimal places based on the custom rule
    let roundedGFR = Math.floor(gfrValue * 100) / 100;
    if ((gfrValue * 100) % 1 >= 0.5) {
      roundedGFR = Math.ceil(gfrValue * 100) / 100;
    }

    return roundedGFR.toFixed(2);
  };

  pageTitle("GFR-Calculator");

  return (
    <>
      <Section topMd={200} topLg={150} topXl={110}>
        <div
          className="container"
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="cs_fs_40 cs_medium mb-0 text-center">GFR Calculator</h2>
              <div className="cs_height_42 cs_height_xl_25" />

              {/* GFR Calculator Form */}
              <form className="row"   onSubmit={handleSubmit}>
                <div className="col-lg-6">
                  <label className="cs_input_label cs_heading_color">Age</label>
                  <input
                    type="number"
                    className="cs_form_field"
                    placeholder="Enter Your Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <div className="cs_height_42 cs_height_xl_25" />
                </div>

                <div className="col-lg-6">
                  <label className="cs_input_label cs_heading_color">
                    Serum Creatinine (mg/dL)
                  </label>
                  <input
                    type="number"
                    className="cs_form_field"
                    placeholder="Enter Creatinine Level"
                    value={creatinine}
                    onChange={(e) => setCreatinine(e.target.value)}
                  />
                  <div className="cs_height_42 cs_height_xl_25" />
                </div>

                <div className="col-lg-6">
                  <label className="cs_input_label cs_heading_color">
                    Gender
                  </label>
                  <div className="cs_select_wrap">
                    <select
                      className="cs_form_field"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="cs_height_42 cs_height_xl_25" />
                </div>

                <div className="col-lg-6">
                  <label className="cs_input_label cs_heading_color">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    className="cs_form_field"
                    placeholder="Enter Your Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <div className="cs_height_42 cs_height_xl_25" />
                </div>

                <div className="col-lg-12">
                  <button className="cs_btn cs_style_1" type="submit">
                    <span>Calculate GFR</span>
                  </button>
                </div>
                {gfr && ( <div className="col-lg-12" style={{ marginTop: '20px', textAlign: 'center' }}> <hr /> <h1>Result is:</h1> <span style={{ color: gfrColor, fontSize: '30px', fontWeight: 'bold' }}> {gfr}</span> <strong style={{ fontSize: "25px" }}> milliliters per minute</strong> <p style={{ fontSize: "22px", color: gfrColor, marginTop: "10px" }}> {diseaseStage}</p> <hr /> </div> )}
              </form>
            </div>
          </div>
        </div>
      </Section>
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <Feature
          sectionTitle="What Is GFR Calculator"
          imgUrl="images/about/GFR-banner.png"
        />
      </Section>
    </>
  );
}

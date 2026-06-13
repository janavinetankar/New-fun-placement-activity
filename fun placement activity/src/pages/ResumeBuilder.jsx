import { useState } from "react";
import "../style/ResumeBuilder.css";

function ResumeBuilder() {
  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
  });

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="resume-container">
      <h1 className="resume-title">📄 Resume Builder</h1>

      <div className="resume-layout">
        {/* Form Section */}
        <div className="form-section">
          <h2>Enter Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={resume.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={resume.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={resume.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="skills"
            placeholder="Enter Skills"
            value={resume.skills}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="education"
            placeholder="Enter Education Details"
            value={resume.education}
            onChange={handleChange}
          />
        </div>

        {/* Preview Section */}
        <div className="preview-section">
          <h2>Resume Preview</h2>

          <p><strong>Name:</strong> {resume.name}</p>
          <p><strong>Email:</strong> {resume.email}</p>
          <p><strong>Phone:</strong> {resume.phone}</p>
          <p><strong>Skills:</strong> {resume.skills}</p>
          <p><strong>Education:</strong> {resume.education}</p>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
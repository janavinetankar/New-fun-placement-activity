import { useState } from "react";

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
    <div style={{ padding: "30px" }}>
      <h1>📄 Resume Builder</h1>

      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={resume.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={resume.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={resume.phone}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="skills"
          placeholder="Enter Skills"
          value={resume.skills}
          onChange={handleChange}
        />
        <br /><br />

        <textarea
          name="education"
          placeholder="Enter Education Details"
          value={resume.education}
          onChange={handleChange}
        />
      </div>

      <hr />

      <h2>Resume Preview</h2>

      <p><strong>Name:</strong> {resume.name}</p>
      <p><strong>Email:</strong> {resume.email}</p>
      <p><strong>Phone:</strong> {resume.phone}</p>
      <p><strong>Skills:</strong> {resume.skills}</p>
      <p><strong>Education:</strong> {resume.education}</p>
    </div>
  );
}

export default ResumeBuilder;
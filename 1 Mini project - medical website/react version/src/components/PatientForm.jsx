import React, { useState } from "react";

const PatientForm = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    department: "",
    doctor: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container ">
      <h2>Patient Details</h2>

      <input name="name" placeholder="Patient Name" onChange={handleChange}className="border rounded" />
      <input name="age" placeholder="Age" onChange={handleChange} className="border rounded"/>
      
      <select name="gender" onChange={handleChange} className="border rounded">
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input name="department" placeholder="Department" onChange={handleChange} className="border rounded"/>
      <input name="doctor" placeholder="Doctor Name" onChange={handleChange} className="border rounded"/>

      <textarea
        name="notes"
        placeholder="Symptoms / Notes"
        onChange={handleChange}
        className="border rounded"
      />

      <button onClick={() => onGenerate(formData)} className="border rounded">
        Generate Letterpad PDF
      </button>
    </div>
  );
};

export default PatientForm;

import React, { useRef, useState } from "react";
import PatientForm from "./components/PatientForm";
import Letterpad from "./components/LetterPad";
import generatePDF from "./utils/generatePDF";

function App() {
  const letterpadRef = useRef();
  const [data, setData] = useState(null);

  const handleGenerate = (formData) => {
    setData(formData);
    setTimeout(() => generatePDF(letterpadRef.current), 500);
  };

  return (
    <div className="app w-full h-screen flex">
      
      <PatientForm onGenerate={handleGenerate} />
      {data && <Letterpad ref={letterpadRef} data={data} />}
    </div>
  );
}

export default App;
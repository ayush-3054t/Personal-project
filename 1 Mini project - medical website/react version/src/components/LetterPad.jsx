import React from "react";

const Letterpad = React.forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} className="letterpad">
      <header>
        <h1>Sanjeevani Multispecialty Hospital</h1>
        <p className="mb-4">Health • Care • Trust</p>
        <hr  />
      </header>

      <section  className="mt-4 flex gap-4">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>Department:</strong> {data.department}</p>
        <p><strong>Doctor:</strong> Dr. {data.doctor}</p>
        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
      </section>

      <section>
        <h3> <strong> Clinical Notes</strong></h3>
        <p>{data.notes}</p>
      </section>

      <footer className="mt-160">
        <hr />
        <p >Authorized Medical Letterpad</p>
      </footer>
    </div>
  );
});

export default Letterpad;

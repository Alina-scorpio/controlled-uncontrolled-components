import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const nameRef = useRef();
  const acceptTermsRef = useRef();
  const genderRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      acceptTerms: acceptTermsRef.current.checked,
      gender: genderRef.current.value,
    };
    console.log('Uncontrolled Form Data:', formData);
  };

  return (
    <>
          <h2>Uncontrolled components</h2>
<form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <label>
        Accept Terms:
        <input type="checkbox" ref={acceptTermsRef} />
      </label>
      <label>
        Gender:
        <select ref={genderRef}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
    
  );
};

export default UncontrolledForm;

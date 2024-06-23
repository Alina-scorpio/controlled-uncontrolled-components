import React, { useState } from 'react';

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    acceptTerms: false,
    gender: 'male',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Controlled Form Data:', formData);
  };

  return (
    <>
    <h2>Controlled Components</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Ім'я:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
      Принять условия:
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
        />
      </label>
      <label>
      Пол:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Чоловічий</option>
          <option value="female">Жіночий</option>
        </select>
      </label>
      <button type="submit">Надіслати</button>
    </form>
    </>
    
  );
};

export default ControlledForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', formData);
      console.log(response.data);
      navigate('/add-product');
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-form">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        
        <div>
          <span><label>E-MAIL</label></span>
          <span><input type="text" name="email" value={formData.email} onChange={handleChange} /></span>
        </div>
        
        <div>
          <span><label>PASSWORD</label></span>
          <span><input type="text" name="password" value={formData.password} onChange={handleChange} /></span>
        </div>
        
        <div>
          <span><input type="submit" value="Submit" /></span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

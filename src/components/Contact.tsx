import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import axios from 'axios';
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { sendEmail } from '../utils/sendEmail';


interface FormDataType {
  name: string;
  email: string;
  phoneNumber: string;
  queryTitle: string;
  query: string;
}

// Initialize your form data state with the initial values
const initialFormData: FormDataType = {
  name: '',
  email: '',
  phoneNumber: '',
  queryTitle: '',
  query: ''
};

function App() {
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const form = useRef();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // console.log('handleSubmit',);
      // sendEmail(formData as unknown as HTMLFormElement); Email is not responding properly
    } catch (error) {
      console.error('Error:', error); // Handle error if the request fails
    }
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:dynamics101mma@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=919940064226';
  };

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/nishanthfernando04/';
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
      <div style={{ width: '90%', maxWidth: '1000px', padding: '20px', border: '2px solid #f59e0b', marginTop: '20px', marginBottom: '20px', borderRadius: '40px' }}>
        <h1 className="text-yellow-300 font-blackOpsOne text-3xl uppercase mb-4 text-center" style={{ marginBottom: '10px' }}>CONTACT US</h1>
        <hr style={{ border: '1px solid #f59e0b', marginBottom: '15px', width: '100%' }} />
        <form ref={form.current}  onSubmit={handleSubmit}>
          <div style={{ marginBottom: '40px' }}>
            <label htmlFor="name" style={{ color: '#FFFFFF' }}>Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '5px' }} required />
          </div>
          <div style={{ marginBottom: '40px' }}>
            <label htmlFor="email" style={{ color: '#FFFFFF' }}>Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '5px' }} required />
          </div>
          <div style={{ marginBottom: '40px' }}>
            <label htmlFor="phone" style={{ color: '#FFFFFF' }}>Phone Number</label>
            <input type="tel" id="phone" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '5px' }} required />
          </div>
          <div style={{ marginBottom: '40px' }}>
            <label htmlFor="queryTitle" style={{ color: '#FFFFFF' }}>Query Title</label>
            <select id="queryTitle" name="queryTitle" value={formData.queryTitle} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '5px' }}>
              <option value="option1">Classes/Package Enquiry</option>
              <option value="option2">Tournament Registration</option>
              <option value="option3">Job Opportunities</option>
            </select>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <label htmlFor="query" style={{ color: '#FFFFFF' }}>Query</label>
            <textarea id="query" name="query" value={formData.query} onChange={handleChange} rows={4} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '5px' }} required />
          </div>
          <button value="Send" type="submit" className="bg-red-600 text-white border-none py-2 px-4 text-base font-bold rounded-md mx-auto" style={{ display: 'block' }}>
            Submit
          </button>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <IconButton style={{ color: '#DB4437' }} aria-label="gmail" onClick={handleEmailClick}>
            <GmailIcon />
          </IconButton>
          <IconButton style={{ color: '#E1306C' }} aria-label="instagram" onClick={handleInstagramClick}>
            <InstagramIcon />
          </IconButton>
          <IconButton style={{ color: '#25D366' }} aria-label="whatsapp" onClick={handleWhatsAppClick}>
            <WhatsAppIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default App;

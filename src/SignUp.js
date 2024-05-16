// import React, { useState } from 'react';
// import './SignUp.css';

// const SignUp = () => {
//   const [patientName, setPatientName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [email, setEmail] = useState('');
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [aadhar, setAadhar] = useState('');
//   const [emergencyContactName, setEmergencyContactName] = useState('');
//   const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
//   const [morningTimings, setMorningTimings] = useState('');
//   const [eveningTimings, setEveningTimings] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add form submission logic here
//   };

//   const handleNameChange = (event) => {
//     const value = event.target.value;
//     if (/^[a-zA-Z\s]*$/.test(value)) {
//       setPatientName(value);
//     } else {
//       alert('Please enter only alphabets for patient name');
//     }
//   };

//   const handlePhoneChange = (event) => {
//     let value = event.target.value;
  
    
//     value = value.replace(/\D/g, '');
  

//     value = value.slice(0, 10);
  
  
//     if (/^[6-9]\d*$/.test(value)) {
//       setPhone(value);
//     }
//     else{
//       alert('enter after 6')
//     }
  
    
//     if (value === '') {
//       setPhone('');
//     }
//   };
  
  
  

//   const handleAgeChange = (event) => {
//     const value = event.target.value;
//     if (/^\d*$/.test(value)) {
//       setAge(value);
//     } else {
//       alert('Please enter only numbers for age');
//     }
//   };

//   const handleEmailChange = (event) => {
//     const value = event.target.value;

//     if (/^\S+@\S+\.\S+$/.test(value)) {
//       setEmail(value);
//     } else {
//       alert('Please enter a valid email address');
//     }
//   };

  

//   const handleEmergencyContactPhoneChange = (event) => {
//     const value = event.target.value;
//     if (/^6\d*$/.test(value)) {
//       setEmergencyContactPhone(value);
//     } else {
//       alert('Please enter a phone number starting with 6 and containing only numbers.');
//     }
//   };

//   return (
//     <div className="appointment-form">
//       <h2>Appointment Booking Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <div className="half">
//             <label htmlFor="patientName">Patient Name <span>*</span></label>
//             <input type="text" id="patientName" value={patientName} onChange={handleNameChange} required />
//           </div>
//           <div className="half">
//             <label htmlFor="phone">Mobile Number <span>*</span></label>
//             <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} required />
//           </div>
//         </div>
//         <div className="form-row">
//           <div className="half">
//             <label htmlFor="address">Address</label>
//             <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
//           </div>
//           <div className="half">
//             <label htmlFor="age">Age <span>*</span></label>
//             <input type="number" id="age" value={age} onChange={handleAgeChange} required />
//           </div>
//         </div>
//         <div className="form-row">
//           <div className="half">
//             <label htmlFor="gender">Gender <span>*</span></label>
//             <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className="half">
//             <label htmlFor="email">Email Address <span>*</span></label>
//             <input type="email" id="email" value={email} onChange={handleEmailChange} required />
//           </div>
//         </div>
//         <div className="form-row">
//           <div className="half">
//             <label htmlFor="bloodGroup">Blood Group <span>*</span></label>
//             <select id="bloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required>
//               <option value="">Select Blood Group</option>
//               <option value="A+">A+</option>
//               <option value="A-">A-</option>
//               <option value="B+">B+</option>
//               <option value="B-">B-</option>
//               <option value="AB+">AB+</option>
//               <option value="AB-">AB-</option>
//               <option value="O+">O+</option>
//               <option value="O-">O-</option>
//             </select>
//           </div>
//           <div className="half">
//             <label htmlFor="aadhar">Aadhar Number<span>*</span></label>
//             <input type="text" id="aadhar" value={aadhar}  required />
//           </div>
//         </div>
//         <div className="form-row">
//           <div className="half">
//             <label htmlFor="emergencyContactName">Emergency Contact Name<span>*</span></label>
//             <input type="text" id="emergencyContactName" value={emergencyContactName} onChange={(e) => setEmergencyContactName(e.target.value)} required />
//           </div>
//           <div className="half">
//             <label htmlFor="emergencyContactPhone">Emergency Contact Phone<span>*</span></label>
//             <input type="tel" id="emergencyContactPhone" value={emergencyContactPhone} onChange={handleEmergencyContactPhoneChange} required />
//           </div>
//         </div>
//         <div className="form-row">
//           <div className="half">
//             <label htmlFor="morningTimings">Morning Timings</label>
//             <select id="morningTimings" value={morningTimings} onChange={(e) => setMorningTimings(e.target.value)} required>
//               <option value="">Select Morning Timings</option>
//               <option value="8AM - 10AM">8AM - 10AM</option>
//               <option value="10AM - 12PM">10AM - 12PM</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//           <div className="half">
//             <label htmlFor="eveningTimings">Evening Timings</label>
//             <select id="eveningTimings" value={eveningTimings} onChange={(e) => setEveningTimings(e.target.value)} required>
//               <option value="">Select Evening Timings</option>
//               <option value="4PM - 6PM">4PM - 6PM</option>
//               <option value="6PM - 8PM">6PM - 8PM</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;





import React, { useState } from 'react';
// import './SignUp.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    appointid: '',
    pname: '',
    mobile: '',
    address: '',
    age: '',
    gender: '',
    email: '',
    bloodGroup: '',
    aadhar: '',
    emergencycontactname: '',
    emergencycontact: '',
    mngtimings: '',
    evetimings: '',
    status:''
  });
  const [errors, setErrors] = useState({});
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.appointid.trim()) {
      newErrors.appointid = 'Appointment ID is required';
    }

    if (!formData.pname.trim()) {
      newErrors.pname = 'Full name is required';
    } else if (!/^[a-zA-Z ]{1,35}$/.test(formData.pname.trim())) {
      newErrors.pname = 'Full name should contain only alphabets and be maximum 35 characters long';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com|in)$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email';
    }

    // Add validation for other fields

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Handle form submission
      console.log('Form data:', formData);
      // You can uncomment and integrate the axios call here
      // submitData(formData);
    } else {
      console.log('Form contains errors. Please fix them.');
    }
  };

  // Sample function to submit form data using axios
  // const submitData = async (data) => {
  //   try {
  //     const response = await axios.post('your_api_url', data);
  //     console.log('Response:', response.data);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  return (
    <div className="container doctor-registration-body">
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Appointment ID</label>
            <input
              type="text"
              name="appointid"
              value={formData.appointid}
              onChange={handleChange}
            />
            {errors.appointid && <small className="text-danger">{errors.appointid}</small>}
          </div>

          <div>
            <label>Patient Name</label>
            <input
              type="text"
              name="pname"
              value={formData.pname}
              onChange={handleChange}
            />
            {errors.pname && <small className="text-danger">{errors.pname}</small>}
          </div>

          {/* Add similar blocks for other fields */}

          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          {/* Add all other fields similarly */}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

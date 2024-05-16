
// import React, { useState } from 'react';
// import './App.css';

// export default function Patient() {
//   const [formData, setFormData] = useState({
//     appointid: '',
//     pname: '',
//     mobile: '',
//     address: '',
//     age: '',
//     gender: '',
//     email: '',
//     bloodGroup: '',
//     aadhar: '',
//     emergencycontactname: '',
//     emergencycontact: '',
//     mngtimings: '',
//     evetimings: '',
//     status: ''
//   });
  
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.pname.trim()) {
//       newErrors.pname = 'Full name is required';
//     } else if (!/^[a-zA-Z ]{1,35}$/.test(formData.pname.trim())) {
//       newErrors.pname = 'Full name should contain only alphabets and be maximum 35 characters long';
//     }

//     if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
//       newErrors.mobile = "Mobile number must be a 10-digit number starting with 6 to 9";
//     }
  
//     if (!/^[6-9]\d{9}$/.test(formData.emergencycontact.trim())) {
//       newErrors.emergencycontact = "Emergency contact number must be a 10-digit number starting with 6 to 9";
//     }

//     if (!formData.emergencycontactname.trim()) {
//       newErrors.emergencycontactname = 'Full name is required';
//     } else if (!/^[a-zA-Z ]{1,35}$/.test(formData.emergencycontactname.trim())) {
//       newErrors.emergencycontactname = 'Full name should contain only alphabets and be maximum 35 characters long';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com|in)$/.test(formData.email.trim())) {
//       newErrors.email = 'Please enter a valid email';
//     }

//     if (!formData.bloodGroup.trim()) {
//       newErrors.bloodGroup = 'Blood group is required';
//     }

//     if (!formData.aadhar.trim() || !/^\d{12}$/.test(formData.aadhar.trim())) {
//       newErrors.aadhar = 'Aadhar number must be a 12-digit number';
//     }

//     if (!formData.appointid.trim()) {
//       newErrors.appointid = 'Appointid is required';
//     }

//     if (!formData.address.trim()) {
//       newErrors.address = 'Address is required';
//     } else if (!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(formData.address.trim())) {
//       newErrors.address = 'Address should contain only alphanumeric characters, spaces, commas, periods, apostrophes, and hyphens';
//     }

//     if (!formData.gender.trim()) {
//       newErrors.gender = "Gender is required";
//     } else if (!['Male', 'Female', 'Other'].includes(formData.gender.trim())) {
//       newErrors.gender = "Gender should be Male, Female, or Other";
//     }

//     if (!formData.status.trim()) {
//       newErrors.status = "Status is required";
//     } else if (!['Pending', 'Confirmed', 'Cancelled'].includes(formData.status.trim())) {
//       newErrors.status = "Status should be one of Pending, Confirmed, or Cancelled";
//     }

//     if (!formData.mngtimings.trim()) {
//       newErrors.mngtimings = "Morning timings are required";
//     }

//     if (!formData.evetimings.trim()) {
//       newErrors.evetimings = "Evening timings are required";
//     }

//     if (isNaN(parseInt(formData.age)) || parseInt(formData.age) <= 0 || parseInt(formData.age) > 150) {
//       newErrors.age = "Please enter a valid age";
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length === 0) {
//       // Form is valid, proceed with submission
//       // You can use axios or any other method here to submit the form data
//       console.log("Form is valid. Submitting data:", formData);
//       // Reset form after submission
//       setFormData({
//         appointid: '',
//         pname: '',
//         mobile: '',
//         address: '',
//         age: '',
//         gender: '',
//         email: '',
//         bloodGroup: '',
//         aadhar: '',
//         emergencycontactname: '',
//         emergencycontact: '',
//         mngtimings: '',
//         evetimings: '',
//         status: ''
//       });
      
//       setErrors({});
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <div className="container doctor-registration-body">
//     <div className="d-flex justify-content-center">
//       <form onSubmit={handleSubmit}>
//         <div className="card-op doctor-registration-card">
//           <div style={{ textAlign: 'center', color: 'black' }}>
//             <h2>Appointment Booking</h2>
//           </div>

//           <div className="row">
//              <div className="col-lg-6">
//                <div>
//                  <label>Patient Name <span className="text-danger">*</span></label>
//                  <input
//                   type="text"
//                   name="pname"
//                   value={formData.pname}
//                   onChange={handleChange}
//                   className="AS-TL form-control"
//                   required
//                 />
//                 {errors.pname && <small className="text-danger">{errors.pname}</small>}
//               </div>
//             </div>

//             <div className=" col-lg-6">
//               <div>
//                 <label>Mobile No <span className="text-danger">*</span></label>
//                 <input
//                   type="text"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   className="AS-TL form-control"
//                   required
//                 />
//                 {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
//               </div>
//             </div>
//           </div>

//           <div className="row">
//              <div className="col-lg-6">
//                <div>
//                  <label>Aadhar <span className="text-danger">*</span></label>
//                  <input
//                   type="text"
//                   name="aadhar"
//                   value={formData.aadhar}
//                   onChange={handleChange}
//                   className="AS-TL form-control"
//                   required
//                 />
//                 {errors.aadhar && <small className="text-danger">{errors.aadhar}</small>}
//               </div>
//             </div>

//             <div className=" col-lg-6">
//               <div>
//                 <label>address <span className="text-danger">*</span></label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="AS-TL form-control"
//                   required
//                 />
//                 {errors.address && <small className="text-danger">{errors.address}</small>}
//               </div>
//             </div>
//           </div>

//           <div className="row">
//              <div className="col-lg-6">
//                <div>
//                  <label>age <span className="text-danger">*</span></label>
//                  <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   className="AS-TL form-control"
//                   required
//                 />
//                 {errors.age && <small className="text-danger">{errors.age}</small>}
//               </div>
//             </div>

//             <div className=" col-lg-6">
//               <div>
//                 <label>gender <span className="text-danger">*</span></label>
//                 <input
//                   type="text"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="AS-TL form-control"
//                   required
//                 />
                
//                 {errors.gender && <small className="text-danger">{errors.gender}</small>}
//               </div>
//             </div>
//           </div>

//           <div className="row">
//              <div className="col-lg-6">
//                <div>
//                  <label>emergencycontactname <span className="text-danger">*</span></label>
//                  <input
//                   type="text"
//                   name="emergencycontactname"
//                   value={formData.emergencycontactname}
//                   onChange={handleChange}
//                   className="AS-TL form-control"
//                   required
//                 />
//                 {errors.emergencycontactname && <small className="text-danger">{errors.emergencycontactname}</small>}
//               </div>
//             </div>

//             <div className=" col-lg-6">
//               <div>
//                 <label>emergencycontact <span className="text-danger">*</span></label>
//                 <input
//                   type="text"
//                   name="emergencycontact"
//                   value={formData.emergencycontact}
//                   onChange={handleChange}
//                   className="AS-TL form-control"
//                   required
//                 />
//                 {errors.emergencycontact && <small className="text-danger">{errors.emergencycontact}</small>}
//               </div>
//             </div>
//           </div>

//           <div className="row">
//              <div className="col-lg-6">
//                <div>
//                  <label>mngtimings <span className="text-danger">*</span></label>
//                  <input
//                   type="text"
//                   name="mngtimings"
//                   value={formData.mngtimings}
//                   onChange={handleChange}
//                   className="AS-TL form-control"
//                   required
//                 />
//                 {errors.mngtimings && <small className="text-danger">{errors.mngtimings}</small>}
//               </div>
//             </div>

//             <div className=" col-lg-6">
//               <div>
//                 <label>evetimings <span className="text-danger">*</span></label>
//                 <input
//                   type="text"
//                   name="evetimings"
//                   value={formData.evetimings}
//                   onChange={handleChange}
//                   className="AS-TL form-control"
//                   required
//                 />
//                 {errors.evetimings && <small className="text-danger">{errors.evetimings}</small>}
//               </div>
//             </div>
//           </div>

//           <div className="row">
//              <div className="col-lg-6">
//                <div>
//                  <label>bloodGroup <span className="text-danger">*</span></label>
//                  <input
//                   type="text"
//                   name="bloodGroup"
//                   value={formData.bloodGroup}
//                   onChange={handleChange}
//                   className="AS-TL form-control"
//                   required
//                 />
//                 {errors.bloodGroup && <small className="text-danger">{errors.bloodGroup}</small>}
//               </div>
//             </div>

//             <div className=" col-lg-6">
//               <div>
//                 <label>email <span className="text-danger">*</span></label>
//                 <input
//                   type="text"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="AS-TL form-control"
//                   required
//                 />
//                 {errors.email && <small className="text-danger">{errors.email}</small>}
//               </div>
//             </div>
//           </div>



          
          
        
//           <div className="row mt-3">
//             <div className="col-lg-12">
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
//   );
// }



import React, { useState } from 'react';
import './Patient.css';

export default function Patient() {
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
    status: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.pname.trim()) {
      newErrors.pname = 'Full name is required';
    } else if (!/^[a-zA-Z ]{1,35}$/.test(formData.pname.trim())) {
      newErrors.pname = 'Full name should contain only alphabets and be maximum 35 characters long';
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Mobile number must be a 10-digit number starting with 6 to 9";
    }
  
    if (!/^[6-9]\d{9}$/.test(formData.emergencycontact.trim())) {
      newErrors.emergencycontact = "Emergency contact number must be a 10-digit number starting with 6 to 9";
    }

    if (!formData.emergencycontactname.trim()) {
      newErrors.emergencycontactname = 'Full name is required';
    } else if (!/^[a-zA-Z ]{1,35}$/.test(formData.emergencycontactname.trim())) {
      newErrors.emergencycontactname = 'Full name should contain only alphabets and be maximum 35 characters long';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com|in)$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.bloodGroup.trim()) {
      newErrors.bloodGroup = 'Blood group is required';
    }

    if (!formData.aadhar.trim() || !/^\d{12}$/.test(formData.aadhar.trim())) {
      newErrors.aadhar = 'Aadhar number must be a 12-digit number';
    }

    if (!formData.appointid.trim()) {
      newErrors.appointid = 'Appointid is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    } else if (!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(formData.address.trim())) {
      newErrors.address = 'Address should contain only alphanumeric characters, spaces, commas, periods, apostrophes, and hyphens';
    }

    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.status.trim()) {
      newErrors.status = "Status is required";
    } else if (!['Pending', 'Confirmed', 'Cancelled'].includes(formData.status.trim())) {
      newErrors.status = "Status should be one of Pending, Confirmed, or Cancelled";
    }

    if (!formData.mngtimings.trim()) {
      newErrors.mngtimings = "Morning timings are required";
    }

    if (!formData.evetimings.trim()) {
      newErrors.evetimings = "Evening timings are required";
    }

    if (isNaN(parseInt(formData.age)) || parseInt(formData.age) <= 0 || parseInt(formData.age) > 150) {
      newErrors.age = "Please enter a valid age";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      
      console.log("Form is valid. Submitting data:", formData);
    
      setFormData({
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
        status: ''
      });
      
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container doctor-registration-body">
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <div className="card-op doctor-registration-card">
          <div style={{ textAlign: 'center', color: 'black' }}>
            <h2>Appointment Booking</h2>
          </div>

          <div className="row">
             <div className="col-lg-6">
               <div>
                 <label>Patient Name <span className="text-danger">*</span></label>
                 <input
                  type="text"
                  name="pname"
                  value={formData.pname}
                  onChange={handleChange}
                  className="AS-TL form-control"
                  required
                />
                {errors.pname && <small className="text-danger">{errors.pname}</small>}
              </div>
            </div>

            <div className=" col-lg-6">
              <div>
                <label>Mobile No <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="AS-TL form-control"
                  required
                />
                {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
              </div>
            </div>
          </div>

          <div className="row">
             <div className="col-lg-6">
               <div>
                 <label>Aadhar Number<span className="text-danger">*</span></label>
                 <input
                  type="text"
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={handleChange}
                  className="AS-TL form-control"
                  required
                />
                {errors.aadhar && <small className="text-danger">{errors.aadhar}</small>}
              </div>
            </div>

            <div className=" col-lg-6">
              <div>
                <label>Address <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="AS-TL form-control"
                  required
                />
                {errors.address && <small className="text-danger">{errors.address}</small>}
              </div>
            </div>
          </div>

          <div className="row">
             <div className="col-lg-6">
               <div>
                 <label>Age <span className="text-danger">*</span></label>
                 <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="AS-TL form-control"
                  required
                />
                {errors.age && <small className="text-danger">{errors.age}</small>}
              </div>
            </div>

            <div className=" col-lg-6">
              <div>
                <label>Gender <span className="text-danger">*</span></label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="AS-TL form-control"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <small className="text-danger">{errors.gender}</small>}
              </div>
            </div>
          </div>

          <div className="row">
             <div className="col-lg-6">
               <div>
                 <label>Emergency Contact Name <span className="text-danger">*</span></label>
                 <input
                  type="text"
                  name="emergencycontactname"
                  value={formData.emergencycontactname}
                  onChange={handleChange}
                  className="AS-TL form-control"
                  required
                />
                {errors.emergencycontactname && <small className="text-danger">{errors.emergencycontactname}</small>}
              </div>
            </div>

            <div className=" col-lg-6">
              <div>
                <label>Emergency Contact <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="emergencycontact"
                  value={formData.emergencycontact}
                  onChange={handleChange}
                  className="AS-TL form-control"
                  required
                />
                {errors.emergencycontact && <small className="text-danger">{errors.emergencycontact}</small>}
              </div>
            </div>
          </div>

          <div className="row">
             <div className="col-lg-6">
               <div>
                 <label>Morning Timings <span className="text-danger">*</span></label>
                 <select
                  name="mngtimings"
                  value={formData.mngtimings}
                  onChange={handleChange}
                  className="AS-TL form-control"
                  required
                >
                  <option value="">Select Timings</option>
                  <option value="9 AM - 10 AM">9 AM - 10 AM</option>
                  <option value="10 AM - 11 AM">10 AM - 11 AM</option>
                  <option value="11 AM - 12 PM">11 AM - 12 PM</option>
                </select>
                {errors.mngtimings && <small className="text-danger">{errors.mngtimings}</small>}
              </div>
            </div>

            <div className=" col-lg-6">
              <div>
                <label>Evening Timings <span className="text-danger">*</span></label>
                <select
                  name="evetimings"
                  value={formData.evetimings}
                  onChange={handleChange}
                  className="AS-TL form-control"
                  required
                >
                  <option value="">Select Timings</option>
                  <option value="2 PM - 3 PM">2 PM - 3 PM</option>
                  <option value="3 PM - 4 PM">3 PM - 4 PM</option>
                  <option value="4 PM - 5 PM">4 PM - 5 PM</option>
                  <option value="5 PM - 6 PM">5 PM - 6 PM</option>
                </select>
                {errors.evetimings && <small className="text-danger">{errors.evetimings}</small>}
              </div>
            </div>
          </div>

          <div className="row">
             <div className="col-lg-6">
               <div>
                 <label>Blood Group <span className="text-danger">*</span></label>
                 <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="AS-TL form-control"
                  required
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+ve">A+ve</option>
                  <option value="A-ve">A-ve</option>
                  <option value="B+ve">B+ve</option>
                  <option value="B-ve">B-ve</option>
                  <option value="O+ve">O+ve</option>
                  <option value="O-ve">O-ve</option>
                  <option value="AB+ve">AB+ve</option>
                  <option value="AB-ve">AB-ve</option>
                </select>
                {errors.bloodGroup && <small className="text-danger">{errors.bloodGroup}</small>}
              </div>
            </div>

            <div className=" col-lg-6">
              <div>
                <label>Email <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="AS-TL form-control"
                  required
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
            </div>
          </div>



          
          
        
          <div className="row mt-3">
            <div className="col-lg-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}


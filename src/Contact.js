

// import React, { useState } from 'react';
// import './Contact.css';

// const doctorsData = [
//   {
//     name: 'Dr. Mallesh Yadav', specialty: 'Cardiology', qualification: 'MD, Cardiology', care: 'heart',exp:'20 years of experiance', img: require('./images/doctor.png') 
//   },
//   {
//     name: 'Dr. Hussen', specialty: 'Gynecologist', qualification: 'MD, Gynecologist', care: 'gynic',exp:'21 years of experiance', img: require('./images/doctor1.png')
//   },
//   {
//     name: 'Dr. David', specialty: 'Dermatologist', qualification: 'Mbbs, Dermatologist', care: 'skin',exp:'23 years of experiance', img: require('./images/woman-doctor1.png')
//   },
//   {
//     name: 'Dr. Pavan', specialty: 'Orthopedics', qualification: 'MD, Orthopedics', care: 'bones',exp:'40 years of experiance', img: require('./images/doctor3.png')
//   },
//   {
//     name: 'Dr. Mounika', specialty: 'Neurologist', qualification: 'MD, Neurologist', care: 'nuro,brain',exp:'27 years of experiance', img: require('./images/doctor4.png')
//   },
//   {
//     name: 'Dr. Vijay', specialty: 'Nephrologist', qualification: 'MD, Nephrologist', care: 'kidney',exp:'49 years of experiance', img: require('./images/doctor5.png')
//   },
//   {
//     name: 'Dr. Divya', specialty: 'Anesthesia', qualification: 'MD, Anesthesia', care: 'general',exp:'32 years of experiance', img: require('./images/doctor6.png')
//   },
//   {
//     name: 'Dr. Praveen', specialty: 'ENT', qualification: 'MBBS, ENT', care: 'nose,ears',exp:'34 years of experiance', img: require('./images/woman-doctor1.png')
//   },
//   {
//     name: 'Dr. Sowmya', specialty: 'Gastroentrologist', qualification: 'MD, Gastroentrologist', care: 'gastro',exp:'19 years of experiance', img: require('./images/woman-doctor2.png')
//   },
//   {
//     name: 'Dr. Dhanoj Kumar', specialty: 'Osteologist', qualification: 'MBBS, Osteologist', care: 'bones',exp:'18 years of experiance', img: require('./images/doctor1.png')
//   },
//   {
//     name: 'Dr. Jeswanth ', specialty: 'Heptaologist', qualification: 'MBBS, Heptaologist', care: 'liver',exp:'24 years of experiance', img: require('./images/doctor6.png')
//   },
//   {
//     name: 'Dr. Yasmitha ', specialty: 'Radiologist', qualification: 'MBBS, Radiologist', care: 'xray',exp:'20 years of experiance', img: require('./images/doctor3.png')
//   },
//   {
//     name: 'Dr. Vinay ', specialty: 'Osteologist', qualification: 'MBBS, Osteologist', care: 'bones',exp:'36 years of experiance', img: require('./images/doctor1.png')
//   },
//   {
//     name: 'Dr. Vijay ', specialty: 'Pathologist', qualification: 'MBBS, Pathologist', care: '',exp:'32 years of experiance', img: require('./images/doctor5.png')
//   },
//   {
//     name: 'Dr. Hussen ', specialty: 'Haematologist', qualification: 'MBBS, Haematologist', care: 'bload',exp:'54 years of experiance', img: require('./images/doctor6.png')
//   },
//   {
//     name: 'Dr. Mallesh Bollam ', specialty: 'Paediatrician', qualification: 'MBBS, Paediatrician', care: 'DEF Hospital',exp:'43 years of experiance', img: require('./images/doctor3.png')
//   },
//   {
//     name: 'Dr. Sai Kumar ', specialty: 'Audiologist', qualification: 'MBBS, Audiologist', care: 'ears',exp:'23 years of experiance', img: require('./images/doctor6.png')
//   },
//   {
//     name: 'Dr. Mounika Yadav ', specialty: 'Pulmonologist', qualification: 'MBBS, Pulmonologist', care: 'bp',exp:'32 years of experiance', img: require('./images/doctor1.png')
//   },
//   {
//     name: 'Dr. Divya  ', specialty: 'Reumethologist', qualification: 'MBBS, Reumethologist', care: 'DEF Hospital',exp:'46 years of experiance', img: require('./images/woman-doctor1.png')
//   },
//   {
//     name: 'Dr. Pavan  ', specialty: 'Opthalmologist', qualification: 'MBBS, Opthalmologist', care: 'DEF Hospital',exp:'20 years of experiance', img: require('./images/doctor.png')
//   },
//   {
//     name: 'Dr. Mallesh  ', specialty: 'Psych', qualification: 'MBBS, Psych', care: 'Psych',exp:'33 years of experiance', img: require('./images/doctor.png')
//   },
//   {
//     name: 'Dr. Mallesh  ', specialty: 'Psych', qualification: 'MBBS, Psych', care: 'Psych',exp:'33 years of experiance', img: require('./images/doctor.png')
//   }


// ];

// const Contact = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

//   const handleSearch = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);
//     const filtered = doctorsData.filter(doctor =>
//       doctor.name.toLowerCase().includes(query.toLowerCase()) ||
//       doctor.specialty.toLowerCase().includes(query.toLowerCase()) ||
//       doctor.care.toLowerCase().includes(query.toLowerCase())
    

//     );
//     setFilteredDoctors(filtered);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Find The Doctor"
//         value={searchQuery}
//         className='search-input'
//         onChange={handleSearch}
//       />
//       <div className="doctor2-list">
//         {filteredDoctors.map((doctor, index) => (
//           <div className="doctor2-card" key={index}>
//             {/* <img src='https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png' alt="Doctor"></img> */}
//             <img src={doctor.img} alt="Doctor" />
//             <h6>{doctor.name}</h6>
//             <p><strong>Specialty:</strong> <div className='specialty'>{doctor.specialty}</div></p>
//             <p><strong>Qualification:</strong> <div>{doctor.qualification}</div></p>
//             <p><strong>Care:</strong> <div className='care'>{doctor.care}</div></p>
//             <p><strong>Experiance:</strong> <div>{doctor.exp}</div></p>

//             <button>BOOK APPOINTMENT</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Contact;







// import React, { useState, useEffect } from 'react';
// import './Contact.css'; 

// function Contact() {
//   const [data, setData] = useState([]);
//   const [searchName, setSearchName] = useState('');
//   const [searchSpecialization, setSearchSpecialization] = useState('');
//   const [searchQualification, setSearchQualification] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:8081/getall');
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleSearch = () => {
    
//     const filteredData = data.filter(item => {
//       const nameMatch = item.docname.toLowerCase().includes(searchName.toLowerCase());
//       const specializationMatch = item.specialization.toLowerCase().includes(searchSpecialization.toLowerCase());
//       const qualificationMatch = item.qualification.toLowerCase().includes(searchQualification.toLowerCase());
//       return nameMatch && specializationMatch && qualificationMatch;
//     });
//     return filteredData;
//   };

//   const filteredData = handleSearch();

//   return (
//     <div className="container">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search by Name"
//           value={searchName}
//           onChange={e => setSearchName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Search by Specialization"
//           value={searchSpecialization}
//           onChange={e => setSearchSpecialization(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Search by Qualification"
//           value={searchQualification}
//           onChange={e => setSearchQualification(e.target.value)}
//         />
//       </div>
//       <div className="card-container">
//         {filteredData.map((item, index) => (
//           <div className="card" key={index}>
//              <img  
//                 src={`data:image/jpeg;base64,${item.pic}`}
//                 alt={item.name} className='doc-img'/>
//             <h6>{item.docname}</h6>
//             <p><strong>Specialization:</strong><div>{item.specialization}</div> </p>
//             <p><strong>Qualification:</strong> {item.qualification}</p>
//             <p><strong>Experience:</strong> {item.experience}</p>
//             <button>Book Appointment</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Contact;




// import React, { useState, useEffect } from 'react';
// import './Contact.css'; 

// function Contact() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:8081/getall');
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card-container">
//         {data.map((item, index) => (
//           <div className="card" key={index}>
//             <img  
//               src={`data:image/jpeg;base64,${item.pic}`}
//               alt={item.name} className='doc-img'/>
//             <h6>{item.docname}</h6>
//             <p><strong>Specialization:</strong> {item.specialization}</p>
//             <p><strong>Qualification:</strong> {item.qualification}</p>
//             <p><strong>Experience:</strong> {item.experience}</p>
//             <button>Book Appointment</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Contact;








import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/getall');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) => {
    const searchLowerCase = searchQuery.toLowerCase();
    return (
      item.docname.toLowerCase().includes(searchLowerCase) ||
      item.specialization.toLowerCase().includes(searchLowerCase) ||
      item.qualification.toLowerCase().includes(searchLowerCase)
    );
  });

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, specialization, or qualification"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="card-container">
        {filteredData.map((item, index) => (
          <div className="card" key={index}>
            <img
              src={`data:image/jpeg;base64,${item.pic}`}
              alt={item.name}
              className="doc-img"
            />
            <h6>{item.docname}</h6>
            <p>
              <strong>Specialization:</strong> {item.specialization}
            </p>
            <p>
              <strong>Qualification:</strong> {item.qualification}
            </p>
            <p>
              <strong>Experience:</strong> {item.experience}
            </p>
            <button>Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;





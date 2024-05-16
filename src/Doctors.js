
import React, { useState } from 'react';
import './Doctors.css';

const doctorsData = [
    {
            name: 'Dr. Mallesh Yadav', specialty: 'Cardiology', qualification: 'MD, Cardiology', care: 'heart',exp:'20 years of experiance', img: require('./images/doctor.png') 
          },
          {
            name: 'Dr. Hussen', specialty: 'Gynecologist', qualification: 'MD, Gynecologist', care: 'gynic',exp:'21 years of experiance', img: require('./images/doctor1.png')
          },
          {
            name: 'Dr. David', specialty: 'Dermatologist', qualification: 'Mbbs, Dermatologist', care: 'skin',exp:'23 years of experiance', img: require('./images/woman-doctor1.png')
          },
          {
            name: 'Dr. Pavan', specialty: 'Orthopedics', qualification: 'MD, Orthopedics', care: 'bones',exp:'40 years of experiance', img: require('./images/doctor3.png')
          },
          {
            name: 'Dr. Mounika', specialty: 'Neurologist', qualification: 'MD, Neurologist', care: 'nuro,brain',exp:'27 years of experiance', img: require('./images/doctor4.png')
          },
          {
            name: 'Dr. Vijay', specialty: 'Nephrologist', qualification: 'MD, Nephrologist', care: 'kidney',exp:'49 years of experiance', img: require('./images/doctor5.png')
          },
          {
            name: 'Dr. Divya', specialty: 'Anesthesia', qualification: 'MD, Anesthesia', care: 'general',exp:'32 years of experiance', img: require('./images/doctor6.png')
          },
          {
            name: 'Dr. Praveen', specialty: 'ENT', qualification: 'MBBS, ENT', care: 'nose,ears',exp:'34 years of experiance', img: require('./images/woman-doctor1.png')
          },
          {
            name: 'Dr. Sowmya', specialty: 'Gastroentrologist', qualification: 'MD, Gastroentrologist', care: 'gastro',exp:'19 years of experiance', img: require('./images/woman-doctor2.png')
          },
          {
            name: 'Dr. Dhanoj Kumar', specialty: 'Osteologist', qualification: 'MBBS, Osteologist', care: 'bones',exp:'18 years of experiance', img: require('./images/doctor1.png')
          },
          {
            name: 'Dr. Jeswanth ', specialty: 'Heptaologist', qualification: 'MBBS, Heptaologist', care: 'liver',exp:'24 years of experiance', img: require('./images/doctor6.png')
          },
          {
            name: 'Dr. Yasmitha ', specialty: 'Radiologist', qualification: 'MBBS, Radiologist', care: 'xray',exp:'20 years of experiance', img: require('./images/doctor3.png')
          },
          {
            name: 'Dr. Vinay ', specialty: 'Osteologist', qualification: 'MBBS, Osteologist', care: 'bones',exp:'36 years of experiance', img: require('./images/doctor1.png')
          },
          {
            name: 'Dr. Vijay ', specialty: 'Pathologist', qualification: 'MBBS, Pathologist', care: '',exp:'32 years of experiance', img: require('./images/doctor5.png')
          },
          {
            name: 'Dr. Hussen ', specialty: 'Haematologist', qualification: 'MBBS, Haematologist', care: 'bload',exp:'54 years of experiance', img: require('./images/doctor6.png')
          },
          {
            name: 'Dr. Mallesh Bollam ', specialty: 'Paediatrician', qualification: 'MBBS, Paediatrician', care: 'DEF Hospital',exp:'43 years of experiance', img: require('./images/doctor3.png')
          },
          {
            name: 'Dr. Sai Kumar ', specialty: 'Audiologist', qualification: 'MBBS, Audiologist', care: 'ears',exp:'23 years of experiance', img: require('./images/doctor6.png')
          },
          {
            name: 'Dr. Mounika Yadav ', specialty: 'Pulmonologist', qualification: 'MBBS, Pulmonologist', care: 'bp',exp:'32 years of experiance', img: require('./images/doctor1.png')
          },
          {
            name: 'Dr. Divya  ', specialty: 'Reumethologist', qualification: 'MBBS, Reumethologist', care: 'DEF Hospital',exp:'46 years of experiance', img: require('./images/woman-doctor1.png')
          },
          {
            name: 'Dr. Pavan  ', specialty: 'Opthalmologist', qualification: 'MBBS, Opthalmologist', care: 'DEF Hospital',exp:'20 years of experiance', img: require('./images/doctor.png')
          },
          {
            name: 'Dr. Mallesh  ', specialty: 'Psych', qualification: 'MBBS, Psych', care: 'Psych',exp:'33 years of experiance', img: require('./images/doctor.png')
          },
          {
            name: 'Dr. Mallesh  ', specialty: 'Psych', qualification: 'MBBS, Psych', care: 'Psych',exp:'33 years of experiance', img: require('./images/doctor.png')
          },
          {
            name: 'Dr. Mallesh  ', specialty: 'Psych', qualification: 'MBBS, Psych', care: 'Psych',exp:'33 years of experiance', img: require('./images/doctor.png')
          }
];

const Contact = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = doctorsData.filter(doctor =>
      doctor.name.toLowerCase().includes(query.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(query.toLowerCase()) ||
      doctor.care.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  // const handleDelete = (index) => {
  //   const updatedDoctors = [...filteredDoctors];
  //   updatedDoctors[index].deleted = true; 
  //   setFilteredDoctors(updatedDoctors);
  // };

  // const handleView = (index) => {
  //   setSelectedDoctor(filteredDoctors[index]);
  // };

  // const handleClose = () => {
  //   setSelectedDoctor(null);
  // };

  return (
    <>
      <input
        type="text"
        placeholder="Find The Doctor"
        value={searchQuery}
        className='search-input'
        onChange={handleSearch}
      />
      <div className="doctor2-list">
        {filteredDoctors.map((doctor, index) => (
          <div className={`doctor2-card ${doctor.deleted ? 'deleted' : ''}`} key={index}>
            <img src={doctor.img} alt="Doctor" />
            <h6>{doctor.name}</h6>
            <p><strong>Specialty:</strong> <div className='specialty'>{doctor.specialty}</div></p>
            <p><strong>Qualification:</strong> <div>{doctor.qualification}</div></p>
            <p><strong>Care:</strong> <div className='care'>{doctor.care}</div></p>
            <p><strong>Experience:</strong> <div>{doctor.exp}</div></p>
            <button>BOOK APPOINTMENT</button>
            
            
          </div>
        ))}
      </div>
      {selectedDoctor && (
        <div className="modal">
          <div className="modal-content">
            {/* <span className="close" onClick={handleClose}>&times;</span> */}
            <h2>{selectedDoctor.name}</h2>
            <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
            <p><strong>Qualification:</strong> {selectedDoctor.qualification}</p>
            <p><strong>Care:</strong> {selectedDoctor.care}</p>
            <p><strong>Experience:</strong> {selectedDoctor.exp}</p>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;





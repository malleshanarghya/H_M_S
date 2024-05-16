// import React, { useState, useEffect } from 'react';
// import './About.css'; 

// const About = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (response.ok) {
//           const data = await response.json();
//           setProducts(data);
//         } else {
//           console.error('Failed to fetch products');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="product-list">
//       {/* <h1>Product List</h1> */}
//       <ul>
//         {products.map((product) => (
//           <li key={product.id} className="product-item">
//             <img src={product.image} alt={product.title} />
//             <div className="product-details">
//               <h3>{product.title}</h3>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default About;





// sloat booking page 


// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'; 
// import './About.css'; 

// const About = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [isSlotBooked, setIsSlotBooked] = useState(false);
//   const [bookingInfo, setBookingInfo] = useState(null);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//     setSelectedTime(null); 
//     setIsSlotBooked(false); 
//   };

//   const handleTimeSelect = (time) => {
//     setSelectedTime(time);
//     setIsSlotBooked(true); 
//   };

//   const bookAppointment = () => {
//     if (selectedDate && selectedTime) {
//       const bookingDetails = {
//         date: selectedDate,
//         time: selectedTime
//       };
//       setBookingInfo(bookingDetails);
//       setIsSlotBooked(true);
//     } else {
//       alert("Please select both date and time before booking.");
//     }
//   };

//   return (
//     <div className="booking-container sloat-booking">
//       {/* <h2>Select Date:</h2> */}
//       <DatePicker
//         selected={selectedDate}
//         placeholderText='Select The Date'
//         onChange={date => handleDateSelect(date)}
//         dateFormat="MMMM d, yyyy"
//       />

//       {selectedDate && (
//         <>
//           <h6>Select Time:</h6>
//           <div className="time-buttons">
//             <button onClick={() => handleTimeSelect('9:00 AM')}>9:00 AM</button>
//             <button onClick={() => handleTimeSelect('10:00 AM')}>10:00 AM</button>
//             <button onClick={() => handleTimeSelect('11:00 AM')}>11:00 AM</button>
//             <button onClick={() => handleTimeSelect('12:00 PM')}>12:00 PM</button>
//             <button onClick={bookAppointment}>BOOK APPOINTMENT</button>
//           </div>
//         </>
//       )}

//       {isSlotBooked && (
//         <div className="slot-booked-message">
//           Slot is booked! Date: {bookingInfo.date}, Time: {bookingInfo.time}
//         </div>
//       )}
//     </div>
//   );
// };

// export default About;





import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import './About.css'; 

const About = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingInfo, setBookingInfo] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      const bookingText = `Appointment booked for ${selectedDate.toLocaleDateString()} at ${selectedTime.label}`;
      setBookingInfo(bookingText);
      alert(bookingText);
    } else {
      alert("Please select a date and time");
    }
  };

  const timeOptions = [
    { value: '9am', label: '9:00 AM' },
    { value: '10am', label: '10:00 AM' },
    { value: '11am', label: '11:00 AM' },
    { value: '12pm', label: '12:00 PM' }
  ];

  return (
    <div className="booking-container">
      {/* <h2>Book an appointment</h2> */}
      <div className="label">Select Date:</div>
      <div className="date-picker d-p">
        <DatePicker
          selected={selectedDate}
          placeholderText='Select the date'
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          minDate={new Date()}
        />
      </div>
      <div className="label">Select Time:</div>
      <div className="time-selector">
        <Select
          options={timeOptions}
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </div>
      <button className="bookingbutton" onClick={handleBookAppointment}>Book an appointment</button>
      {bookingInfo && <div>{bookingInfo}</div>}
    </div>
  );
};

export default About;






// let array = [14, 7, 25, 30, 10];


// function HighestValueinarray(arr) {
//     let highest = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > highest) {
//             highest = arr[i]; 
//         }
//     }
//     return highest;
// }


// let highestValue = HighestValueinarray(array);
// console.log("The highest value in the array is:", highestValue);






// import React from 'react'
// import './Home.css';


// function Home() {
//   return (
//     <section className='Home-hedder'>

//       <div className='Home-user-button'>
//       <button>Login Here</button>
//       <button>Signup Here</button> 
//       </div>

//     </section>


//   )
// }

// export default Home



//  H_M_S-1#########################################





// import React from 'react'
// import './Home.css';
// import dtImage from './images/dt-1.jpg';

// function Home() {
//   return (

//     <>
//     <section>
//     <div class="row dropdown">
//   <div class="col">DOCTORS</div>
//   <div class="col">MEDICAL</div>
//   <div class="col"> BOOK APPOINTMENT</div>
//   <div class="col">LAB REPORTS</div>
// </div>
//     </section>
//     <section className='Home-info'>
//       <div class="container-fluid">
//   <div class="row Home-split-container">

//     <div class="col Home-text-section">

//       <p className='Home-text'>Hospitals is always looking to make things easier for you. Our aim is to provide our customers with the best medical facilities, constant care, and reliable support. If you would like to get in touch with a doctor from a specific department, would like some specific information about the services we provide.</p>
//       <div className='Home-user-button'>
//         <button>Signup Here</button>
//         <button>Login Here</button>
//       </div>
//     </div>

//     <div class="col Home-image-section">
//       <div class="image-container">
//       <img src={dtImage} alt="Description of the image" />
//       </div>
//     </div>
//   </div>
//   </div>
//     </section>
//     </>
//   )
// }

// export default Home



// Templte 3




import React from 'react'
import './Home.css';
import dtImage from './images/dt.jpg';
import bgimage from './images/doctor.png';

function Home() {
  return (

    <>
      
      <section className='Home-info'>
        <div class="container-fluid">
          <div className='Home-content'>
            <img src='https://img.freepik.com/premium-photo/doctor-medicine-concept-doctor-work_629534-4369.jpg?w=1060' className='img-bg'></img>
            {/* <img src={dtImage} className='img-bg' alt="Description of the image" /> */}
            {/* <p className='Home-text'>Hospitals is always looking to make things easier for you. Our aim is to provide our customers with the best medical facilities, constant care, and reliable support. If you would like to get in touch with a doctor from a specific department, would like some specific information about the services we provide.</p> */}
            <div className='Home-Text'>
              <p>We are here for your care</p>
              <h3>Best Care & Better Doctor</h3>
              <h4>Take The World's Best Quality Treatment</h4>
             <div className='doctor-img'>
             {/* <img src={bgimage} className='bg-img' alt="Description of the image"  /> */}
             </div>
            </div>

            <div className='Home-user-button'>
              <button>Signup Here</button>
              <button>Login Here</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

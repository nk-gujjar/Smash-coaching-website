import React, { useEffect } from 'react';
import gallery1 from '../Assets/gallery1.jpg';
import gallery2 from '../Assets/gallery2.jpg';
import gallery3 from '../Assets/gallery3.jpg';
import gallery4 from '../Assets/gallery4.jpg';
import gallery5 from '../Assets/gallery5.jpg';
import gallery6 from '../Assets/gallery6.jpg';
import gallery7 from '../Assets/gallery7.jpg';
import gallery8 from '../Assets/gallery8.jpg';

import ContactForm from './ContactForm';

// Your component code goes here...


function MainBody() {
  useEffect(() => {
    const Numbers = document.querySelectorAll(".Numbers");

    Numbers.forEach((NumbersCounter) => {
      NumbersCounter.innerHTML = "0";

      const updateNumbersCounter = () => {
        const target = +NumbersCounter.getAttribute("data-target");
        const c = +NumbersCounter.innerText;

        const increment = target / 500;

        if (c < target) {
          NumbersCounter.innerHTML = `${Math.ceil(c + increment)}`;
          setTimeout(updateNumbersCounter, 1);
        } else {
          NumbersCounter.innerText = target;
        }
      };

      updateNumbersCounter();
    });

    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    if (prevBtn && nextBtn) {
      let x = 0;

      const rotate = () => {
        const imageContainer = document.querySelector(".image-container");
        if (imageContainer) {
          imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
        }
      };

      prevBtn.addEventListener("click", () => {
        x = x + 45;
        rotate();
      });

      nextBtn.addEventListener("click", () => {
        x = x - 45;
        rotate();
      });

      return () => {
        // Cleanup code if necessary
        prevBtn.removeEventListener("click", () => {
          x = x + 45;
          rotate();
        });

        nextBtn.removeEventListener("click", () => {
          x = x - 45;
          rotate();
        });
      };
    }
  }, []);

  return (
   <div>
     <header className="hero">
       <section className="hero__headings-container">
         <h3>Unleash <span>Your</span></h3>
         <h1 className="hero__main-headings">
           INNER <span className="main-span">CHAMPION</span>
         </h1>
         <p>Choose our Coaching for a Bright Future!</p>
       </section>
     </header>

     
       { /* Your courses section content */ }
       <section className="courses" id="courses">
       <h1 className="main-headings center">
         <span className="main-span">Courses</span>
       </h1>
       {/* CARDS */}
       <section className="cards">
         <div className="card">
           <div className="card-image img-one"></div>
           <p>IIT-JEE</p>
         </div>
         <div className="card">
           <div className="card-image img-two"></div>
           <p>NEET</p>
         </div>
         <div className="card">
           <div className="card-image img-three"></div>
           <p>KVPY-OLYMPIAD</p>
         </div>
       </section>
     </section>     
       

    
       { /* Your why us section content */ }
       <section className="why-us" id="why-us">
  <h1 className="main-headings">WHY CHOOSE <span className="main-span"> US?</span></h1>
  <section className="cards-a">
    <div className="card-a">
      <div className="card-a-image img-1"></div>
      <p>HIGH QUALIFIED & EXPERIENCED FACULTY MEMBERS</p>
    </div>
    <div className="card-a">
      <div className="card-a-image img-2"></div>
      <p>PERSONALIZED APPROACH</p>
    </div>
    <div className="card-a">
      <div className="card-a-image img-3"></div>
      <p>EFFECTIVE STUDY RESOURCES</p>
    </div>
    <div className="card-a">
      <div className="card-a-image img-4"></div>
      <p>EXAM-ORIENTED PREPARATION</p>
    </div>
    <div className="card-a">
      <div className="card-a-image img-5"></div>
      <p>SUPPORTIVE LEARNING ENVIRONMENT</p>
    </div>
    <div className="card-a">
      <div className="card-a-image img-6"></div>
      <p>REGULAR PROGRESS TRACKING</p>
    </div>
  </section>
</section>
      

     
       
        {/* Your results section content  */}
       <section className="results" id="results">
       <h1 className="main-headings center">
         <span className="main-span">RESULTS</span>
       </h1>
       <div className="container-res">
         <div className="container-card">
           <div className="Numbers" data-target="800"></div>
           <span>JEE-Main</span>
         </div>
     
         <div className="container-card">
           <div className="Numbers" data-target="300"></div>
           <span>JEE-Advance</span>
         </div>
     
         <div className="container-card">
           <div className="Numbers" data-target="400"></div>
           <span>NEET</span>
         </div>
         <div className="container-card">
           <div className="Numbers" data-target="25"></div>
           <span>KVPY</span>
         </div>
       </div>
     </section>
     
       
     

     <section className="Gallery" id="Gallery">
  <div className="gallery">
    <h1 className="main-headings center">
      <span className="main-span">GALLERY</span>
    </h1>
    <div className="image-container">
      <span style={{ '--i': 1 }}>
        <img src={gallery1} alt="" width="300px" height="300px" />
      </span>
      <span style={{ '--i': 2 }}>
        <img src={gallery2} alt="" width="300px" height="300px" />
      </span>
      <span style={{ '--i': 3 }}>
        <img src={gallery3} alt="" width="300px" height="300px" />
      </span>
      <span style={{ '--i': 4 }}>
        <img src={gallery4} alt="" width="300px" height="300px" />
      </span>
      <span style={{ '--i': 5 }}>
        <img src={gallery5} alt="" width="300px" height="300px" />
      </span>
      <span style={{ '--i': 6 }}>
        <img src={gallery6} alt="" width="300px" height="300px" />
      </span>
      <span style={{ '--i': 7 }}>
        <img src={gallery7} alt="" width="300px" height="300px" />
      </span>
      <span style={{ '--i': 8 }}>
        <img src={gallery8} alt="" width="300px" height="300px" />
      </span>
    </div>
    <div className="btn-container">
      <button className="btn" id="prev">Prev</button>
      <button className="btn" id="next">Next</button>
    </div>
  </div>
</section>


   <ContactForm/>
   </div>
 );
}

export default MainBody;

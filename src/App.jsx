// import { StrictMode, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { StrictMode } from "react"


import "./styles/app.css"
import { Sidebar } from "./components/sidebar"
import Resume from "./components/resume"
import PersonalInfoForm from "./components/personal-info/PersonalInfoForm"
import { useState } from "react"
import EducationForm from "./components/education/EducationForm"
import ExperienceForm from "./components/experience/experienceForm.jsx"
function App(){

    const  [personalInfo,setPersonalInfo]=useState({
         fullName: "Emma Williams",
      email: "emma.williams@example.com",
      phonenumber: "+44 7912 345678",
      address: "London, United Kingdom",
      });
 const  [educationInfo,setEducationInfo]=useState({
           school: "University of London",
      degree: "BSc Computer Science",
      startDate: "09/2022",
      endDate: "06/2026",
      location: "London, UK",
      });

const [experienceInfo,setExperienceInfo]=useState({

 companyName: "TechNova Solutions",
      positionTitle: "Frontend Developer Intern",
      startDate: "06/2023",
      endDate: "09/2023",
      location: "London, UK",
      description: " Developed responsive web interfaces using React and Tailwind CSS. Collaborated with backend teams to integrate REST APIs. Improved page performance by 20% through optimized rendering.",

});


return(
    <div>
      {/* <h1>CV Application</h1> */}
      <section>
          <div className="container">
            <div className="left-section">
          <Sidebar  
  personalInfo={personalInfo} 
  educationInfo={educationInfo}
  experienceInfo={experienceInfo}
  setpersonalInfo={setPersonalInfo}
  seteducationInfo={setEducationInfo}
  setexperienceInfo={setExperienceInfo}
/>
           <PersonalInfoForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
          {/* <div className="form-section"> */}
          {/* <EducationListDisplay educationList={educationList} setEducationList={setEducationList}/> */}
          {/* <ExperienceListDisplay experienceList={experienceList} setExperienceList={setExperienceList}/> */}
          <EducationForm educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>
          <ExperienceForm experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}/>
          {/* </div> */}
          </div>


            <Resume personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo}/>
          </div>
      </section>
    </div>
)
}
export default App

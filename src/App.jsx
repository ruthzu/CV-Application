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
import EducationListDisplay from "./components/education/EducationListDisplay"
import EducationForm from "./components/education/EducationForm"
import ExperienceForm from "./components/experience/experienceForm.jsx"
import ExperienceListDisplay from "./components/experience/ExperienceListDisplay.jsx"
function App(){

    const  [personalInfo,setPersonalInfo]=useState({
          fullName:"asdfghj",
          email:"josephine.meyers@mail.co.uk",
          phonenumber:"+44 3245 5521 5521",
          address:"London, UK",
      });
 const  [educationInfo,setEducationInfo]=useState({
          school:"London City University",
          degree:"Bachelors in Economics",
          startDate:"08/2020",
          endDate:"present",
          location:"New York City, US",
      });

const [experienceInfo,setExperienceInfo]=useState({

companyName:"asdfghj",

positionTitle:"sdfghj@gmail.com",

startDate:"123456789",

endDate:"123456789",

location:"sdfghjkl",

description:"sdfghj",

});





const [experienceList,setExperienceList]=useState(["asdfg","sdfgh"])      
const [educationList,setEducationList]=useState(["university","highschool"])

return(
    <div>
      {/* <h1>CV Application</h1> */}
      <section>
          <div className="container">
            <div className="left-section">
          <Sidebar />
           <PersonalInfoForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
          {/* <div className="form-section"> */}
          <EducationListDisplay educationList={educationList} setEducationList={setEducationList}/>
          <ExperienceListDisplay experienceList={experienceList} setExperienceList={setExperienceList}/>
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

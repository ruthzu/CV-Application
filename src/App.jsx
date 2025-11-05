// import { StrictMode, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { StrictMode } from "react"



import { Sidebar } from "./components/sidebar"
import Resume from "./components/resume"
import PersonalInfoForm from "./components/personal-info/PersonalInfoForm"
import PersonalInfoDisplay from "./components/personal-info/PersonalInfoDisplay"
import { useState } from "react"
function App(){

    const  [personalInfo,setPersonalInfo]=useState({
          fullName:"asdfghj",
          email:"sdfghj@gmail.com",
          phonenumber:"123456789",
          address:"sdfghjkl",
      });

return(
    <div>
      <h1>CV Application</h1>
      <section>
          <Sidebar />
           <PersonalInfoForm  
                  personalInfo={personalInfo}
                  setPersonalInfo={setPersonalInfo}
                  />
            <Resume personalInfo={personalInfo}/>
          
      </section>
    </div>
)
}
export default App

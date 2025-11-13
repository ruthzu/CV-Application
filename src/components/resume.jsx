//resume.jsx
import "../styles/resume.css"
import PersonalInfoDisplay from "./personal-info/PersonalInfoDisplay"
import EducationInfoDisplay from "./education/EducationInfoDisplay";
import ExperienceinfoDisplay from "./experience/ExperienceinfoDisplay";
export default function Resume({personalInfo,educationInfo,experienceInfo}){
    return(
    <div className="resume right-section">
            <PersonalInfoDisplay personalInfo={personalInfo}/>
            <div className="edu-exp">
            <EducationInfoDisplay educationInfo={educationInfo}/>
            <ExperienceinfoDisplay experienceInfo={experienceInfo}/></div>
    </div>
    );
}
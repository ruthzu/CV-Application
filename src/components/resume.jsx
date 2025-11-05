// import AddEducationSection from "./education/AddEducationSection";
// import EducationForm from "./education/EducationForm";
// import AddEducationSection from "./education/AddEducationSection";
// import PersonalInfoSection from "./personal-info/PersonalInfoSection"
import PersonalInfoDisplay from "./personal-info/PersonalInfoDisplay"
export default function Resume({personalInfo}){
    return(
    <div>
    {/* <PersonalInfoSection /> */}
            <PersonalInfoDisplay personalInfo={personalInfo}/>
    </div>
    );
}
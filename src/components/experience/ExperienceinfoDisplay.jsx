// ExperienceinfoDisplay
import "../../styles/resume.css"
export default function ExperienceinfoDisplay({ experienceInfo }) {
  return (
      <div className=" experience-info">
        <h1 className="header">Professional Experience</h1>
        <div className=" display-info">
         <div className="L-side">
          <p>{experienceInfo.startDate}-{experienceInfo.endDate}</p>
          <p>{experienceInfo.location}</p>
          </div>
          <div className="R-side">
      <p>{experienceInfo.companyName}</p> 
      <p>{experienceInfo.positionTitle}</p>
      <p>{experienceInfo.description}</p>
      </div></div>
    </div>
  );
}
// EducationInfoDisplay.jsx
import "../../styles/resume.css"
export default function EducationInfoDisplay({ educationInfo }) {
  return (
      <div className=" education-info ">
        <h1 className="header">Education</h1>
        <div className="display-info">
        <div className="L-side">
<p>{educationInfo.startDate} - {educationInfo.endDate}</p>
      <p>{educationInfo.location}</p> 
        </div>
        <div className="R-side">
      <p>{educationInfo.school}</p>
      <p>{educationInfo.degree}</p>
      </div>
</div>
    </div>
  );
}
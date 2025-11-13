// PersonalInfoDisplay.jsx
import "../../styles/resume.css"
export default function PersonalInfoDisplay({ personalInfo }) {
  return (
    <div className=" personal-info display-info">
      <h1>{personalInfo.fullName}</h1>
      <div className="personal-detail">
      <p><i className="fas fa-envelope"></i>{personalInfo.email}</p>
      <p><i className="fas fa-phone"></i>{personalInfo.phonenumber}</p>
      <p><i className="fas fa-location-dot"></i>{personalInfo.address}</p>
      </div>
    </div>
  );
}

import "../styles/button.css"

export function Sidebar({
  personalInfo,
  educationInfo,
  experienceInfo,
  setpersonalInfo,
  seteducationInfo,
  setexperienceInfo
}) {

  const handleClear = () => {
   seteducationInfo({
      ...educationInfo,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });

    setexperienceInfo({
      ...experienceInfo,
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });

    setpersonalInfo({
      ...personalInfo,
      fullName: "",
      email: "",
      phonenumber: "",
      address: "",
    });
  };
  const handleLoad = () => {
   seteducationInfo({
      ...educationInfo,
      school: "University of London",
      degree: "BSc Computer Science",
      startDate: "09/2022",
      endDate: "06/2026",
      location: "London, UK",
    });

    setexperienceInfo({
      ...experienceInfo,
      companyName: "TechNova Solutions",
      positionTitle: "Frontend Developer Intern",
      startDate: "06/2023",
      endDate: "09/2023",
      location: "London, UK",
      description: " Developed responsive web interfaces using React and Tailwind CSS. Collaborated with backend teams to integrate REST APIs. Improved page performance by 20% through optimized rendering.",
    });

    setpersonalInfo({
      ...personalInfo,
      fullName: "Emma Williams",
      email: "emma.williams@example.com",
      phonenumber: "+44 7912 345678",
      address: "London, United Kingdom",
    });
  };
  return (
    <div className="sidebar">
      <button className="clear-btn" onClick={handleClear}>
        <i className="fas fa-trash"></i> Clear Resume
      </button>

      <button className="load-btn"  onClick={handleLoad}>Load Example</button>
    </div>
  );
}

// PersonalInfoDisplay.jsx
export default function PersonalInfoDisplay({ personalInfo }) {
  return (
    <div>
      <p>{personalInfo.fullName}</p>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phonenumber}</p>
      <p>{personalInfo.address}</p>
    </div>
  );
}

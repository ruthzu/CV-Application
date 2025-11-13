// EducationListDisplay.jsx
export default function EducationListDisplay({ educationList}) {
  return (
    <div>
<ul>
  {educationList.map((education,index)=>(
    <li key={index}>
      <button className="education-btn">{education}</button>
    </li>
  ))}
</ul>
    </div>
  );
}

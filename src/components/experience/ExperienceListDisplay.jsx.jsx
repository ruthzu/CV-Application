// ExperienceListDisplay.jsx
export default function ExperienceListDisplay({ experienceList }) {
  return (
    <div>
<ul>
  {experienceList.map((experience,index)=>(
    <li key={index}>
      <button className="experience-btn">{experience}</button>
    </li>
  ))}
</ul>
    </div>
  );
}
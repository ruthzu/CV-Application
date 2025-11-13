// EducationForm.jsx
import "../../styles/form.css"
export default function EducationForm({educationInfo,setEducationInfo}){
    return(
        <div className="form-section">
            <h1 className="section-title education-section">Education</h1>
            <form>
                <div className=" input input-school-div">
                <label htmlFor="input-school" >School</label>
                <input 
                id="input-school"
                type="text"
                value={educationInfo.school}
                onChange={(e)=>setEducationInfo(prev => ({... prev,school:e.target.value}))}
                >

                </input>
                </div>

                <div className=" input input-degree-div">
                <label htmlFor="input-degree" >Degree</label>
                <input 
                id="input-degree"
                type="text"
                value={educationInfo.degree}
onChange={(e)=>setEducationInfo(prev => ({... prev,degree:e.target.value}))}
                >
                </input>
                </div>

                <div className="input input-start-date-div">
                <label htmlFor="input-start-date" >Start Date</label>
                <input id="input-start-date"
                type="text"
                value={educationInfo.startDate}
onChange={(e)=>setEducationInfo(prev => ({... prev,startDate:e.target.value}))}
                >

                </input>
                </div>
                <div className=" input input-end-date-div">
                <label htmlFor="input-end-date" >End Date</label>
                <input id="input-end-date"
                type="text"
                value={educationInfo.endDate}
onChange={(e)=>setEducationInfo(prev => ({... prev,endDate:e.target.value}))}
                >

                </input>
                </div>


                <div className=" input input-location-div">
                <label htmlFor="input-location" >Location</label>
                <input 
                id="input-location"
                type="text"
                value={educationInfo.location}
onChange={(e)=>setEducationInfo(prev => ({... prev,location:e.target.value}))}
                >
                </input>
                </div>

            </form>
        </div>
    )
} 



// experienceForm.jsx
import "../../styles/form.css"
export default function ExperienceForm({experienceInfo,setExperienceInfo}){
    return(
        <div className="form-section">
            <h1 className="section-title experience-section">Experience</h1>
            <form>
                <div className="input input-company-name-div">
                <label htmlFor="input-company-name" >School</label>
                <input 
                id="input-company-name"
                type="text"
                value={experienceInfo.companyName}
                onChange={(e)=>setExperienceInfo(prev => ({... prev,companyName:e.target.value}))}
                >

                </input>
                </div>

                <div className="input input-position-title-div">
                <label htmlFor="input-position-title" >Position Title</label>
                <input 
                id="input-position-title"
                type="text"
                value={experienceInfo.positionTitle}
onChange={(e)=>setExperienceInfo(prev => ({... prev,positionTitle:e.target.value}))}
                >
                </input>
                </div>

                <div className="input input-start-date-div">
                <label htmlFor="input-start-date" >Start Date</label>
                <input id="input-start-date"
                type="text"
                value={experienceInfo.startDate}
onChange={(e)=>setExperienceInfo(prev => ({... prev,startDate:e.target.value}))}
                >

                </input>
                </div>
                <div className="input input-end-date-div">
                <label htmlFor="input-end-date" >End Date</label>
                <input id="input-end-date"
                type="text"
                value={experienceInfo.endDate}
onChange={(e)=>setExperienceInfo(prev => ({... prev,endDate:e.target.value}))}
                >

                </input>
                </div>


                <div className="input input-location-div">
                <label htmlFor="input-location" >Location</label>
                <input 
                id="input-location"
                type="text"
                value={experienceInfo.location}
onChange={(e)=>setExperienceInfo(prev => ({... prev,location:e.target.value}))}
                >
                </input>
                </div>

                    <div className="input input-description-div">
                <label htmlFor="input-description" >Description</label>
                <textarea 
                id="input-description"
                type="text"
                value={experienceInfo.description}
                placeholder="Type here..."
onChange={(e)=>setExperienceInfo(prev => ({... prev,description:e.target.value}))}
                >
                </textarea>

                </div>

            </form>
        </div>
    )
} 



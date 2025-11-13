// PersonalInfoForm.jsx
import "../../styles/form.css"
export default function PersonalInfoForm({personalInfo,setPersonalInfo}){
    return(
        <div className="form-section"> 
            <h1 className="section-title">Personal Details</h1>
            <form>
                <div className="input input-name-div">
                <label htmlFor="input-name" >Full name</label>
                <input 
                id="input-name"

                type="text"
                value={personalInfo.fullName}
                onChange={(e)=>setPersonalInfo(prev => ({... prev,fullName:e.target.value}))}
                >

                </input>
                </div>

                <div className="input input-email-div">
                <label htmlFor="input-email" >Email</label>
                <input 
                id="input-email"
                type="email"
                value={personalInfo.email}
onChange={(e)=>setPersonalInfo(prev => ({... prev,email:e.target.value}))}
                >
                </input>
                </div>

                        <div className=" input input-phNum-div">
                <label htmlFor="input-phNum" >Phone number</label>
                <input id="input-phNum"
                type="tel"
                value={personalInfo.phonenumber}
onChange={(e)=>setPersonalInfo(prev => ({... prev,phonenumber:e.target.value}))}
                >

                </input>
                </div>
                <div className="input input-address-div">
                <label htmlFor="input-address" >Address</label>
                <input 
                id="input-address"
                type="text"
                value={personalInfo.address}
onChange={(e)=>setPersonalInfo(prev => ({... prev,address:e.target.value}))}
                >
                </input>
                </div>

            </form>
        </div>
    )
} 



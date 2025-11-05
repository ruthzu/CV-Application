// PersonalInfoForm.jsx
export default function PersonalInfoForm({personalInfo,setPersonalInfo}){
    return(
        <div>
            <h1 className="section-title">Personal Details</h1>
            <form>
                <div className="input-name-div">
                <label htmlFor="input-name" >Full name</label>
                <input 
                className="input-name"
                type="text"
                value={personalInfo.fullName}
                onChange={(e)=>setPersonalInfo(prev => ({... prev,fullName:e.target.value}))}
                >

                </input>
                </div>

                <div className="input-email-div">
                <label htmlFor="input-email" >Email</label>
                <input 
                className="input-email"
                type="email"
                value={personalInfo.email}
onChange={(e)=>setPersonalInfo(prev => ({... prev,email:e.target.value}))}
                >
                </input>
                </div>

                        <div className="input-phNum-div">
                <label htmlFor="input-phNum" >Phone number</label>
                <input className="input-phNum"
                type="tel"
                value={personalInfo.phonenumber}
onChange={(e)=>setPersonalInfo(prev => ({... prev,phonenumber:e.target.value}))}
                >

                </input>
                </div>
                <div className="input-address-div">
                <label htmlFor="input-address" >Address</label>
                <input 
                className="input-address"
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



import "../styles/button.css"
export function Sidebar(){
    return(
        <div className="sidebar">
            <button className="clear-btn"><i className="fas fa-trash"></i> Clear Resume</button>
            <button className="load-btn">Load Example</button>
        </div>
    )
}
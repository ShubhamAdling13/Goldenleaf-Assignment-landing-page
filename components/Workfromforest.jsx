
import "./Font.css";
import "./Workfromforest.css"
import po from "../images/Work From Forest Image.png"

function Workfromforest(){
    return(<>
      <div className="Workfromforest" id="Workfromforest">
        <img src={po} alt="" />
         <div className="w1">
            <p>WORK FROM FOREST</p>
           
         </div>
         <div className="w2">
            <p>TRANSFORM YOUR 
                <br /> <p >  WORK ENVIRONMENT </p></p>
                <hr  />
         </div>
         <div className="w3">
            <p>Why settle for a traditional office when you can work in the <br /> tranquility of nature? <br />
Experience the future of remote work. Sylvanscape <br /> presents "Work From Forest" ( WFF) – where your office is a <br /> glass pod nestled in the woods, providing a 360-degree <br />immersive view.</p>
         </div>
         

      </div>
    
    </>)
}

export default Workfromforest;
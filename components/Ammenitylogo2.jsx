import "./Ammenitylogo2.css"
import i5 from "../images/Amenities Icon/final/Sewage Treatment.png";
import i6 from "../images/Amenities Icon/final/Water Tank.png";
import i7 from "../images/Amenities Icon/final/Rainwater.png";
import i8 from "../images/Amenities Icon/final/End to End Assistance.png";

function Ammenitylogo2(){
    return(<>
    <div className="lo2">
     <div className="l5">
       
       <div>
       
         <img src={i5} alt="" />
       </div>
       <div>
         <p>Sewage Treatment <hr /></p>
       </div>
     </div>
        
     <div className="l6">
  
  <div>
  
    <img src={i6} alt="" />
  </div>
  <div>
    <p>Water 
Tank <hr /></p>
  </div>
</div>

<div className="l7">
  
  <div>
  
    <img src={i7} alt="" />
  </div>
  <div>
    <p>Rainwater Harvesting<hr /></p>
  </div>
</div>


<div className="l8">
  
  <div>
  
    <img src={i8} alt="" />
  </div>
  <div>
    <p>End-to-end assistance<hr /></p>
  </div>
</div>

</div>
    </>)
}

export default Ammenitylogo2;
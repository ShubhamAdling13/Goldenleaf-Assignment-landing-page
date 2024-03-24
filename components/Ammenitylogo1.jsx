import "./Ammenitylogo1.css"
import i1 from "../images/Amenities Icon/final/Telepresence Room.png";
import i2 from "../images/Amenities Icon/final/Cloubhouse.png";
import i3 from "../images/Amenities Icon/final/CCTV.png";
import i4 from "../images/Amenities Icon/final/Grand Entrance.png";

function Ammenitylogo1(){
    return(<>
    <div className="lo1"> 
     <div className="l1">
       
       <div>
       
         <img src={i1} alt="" />
       </div>
       <div>
         <p>Telepresence Room <hr /></p>
       </div>
     </div>
        
     <div className="l2">
  
  <div>
  
    <img src={i2} alt="" />
  </div>
  <div>
    <p>State-of-the-Art Clubhouse <hr /></p>
  </div>
</div>

<div className="l3">
  
  <div>
  
    <img src={i3} alt="" />
  </div>
  <div>
    <p>24/7 Surveillance<hr /></p>
  </div>
</div>


<div className="l4">
  
  <div>
  
    <img src={i4} alt="" />
  </div>
  <div>
    <p>Grand Entrance<hr /></p>
  </div>
</div>

</div>
    </>)
}

export default Ammenitylogo1;
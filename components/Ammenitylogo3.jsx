import "./Ammenitylogo3.css"
import i9 from "../images/Amenities Icon/final/Camping Zone.png";
import i10 from "../images/Amenities Icon/final/Meticulously plammed gardening.png";
import i11 from "../images/Amenities Icon/final/Electricity Connection.png";
import i12 from "../images/Amenities Icon/final/Street Lighting.png";

function Ammenitylogo3(){
    return(<>
    <div className="lo3"> 
     <div className="l9">
       
       <div>
       
         <img src={i9} alt="" />
       </div>
       <div>
         <p>Camping 
zone <hr /></p>
       </div>
     </div>
        
     <div className="l10">
  
  <div>
  
    <img src={i10} alt="" />
  </div>
  <div>
    <p>Meticulously Planned Gardening <hr /></p>
  </div>
</div>

<div className="l11">
  
  <div>
  
    <img src={i11} alt="" />
  </div>
  <div>
    <p>Electricity Connection<hr /></p>
  </div>
</div>


<div className="l12">
  
  <div>
  
    <img src={i12} alt="" />
  </div>
  <div>
    <p>Street 
Lighting<hr /></p>
  </div>
</div>

</div> 
    </>)
}

export default Ammenitylogo3;
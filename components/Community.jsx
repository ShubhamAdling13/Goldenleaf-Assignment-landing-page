import "./Community.css";
import "./Font.css";
import bhim from "../images/Elegance redefined image Final Image.png"
function Community(){
    return(<>
    <div className="community" id="Community">
    <img src={bhim} alt="" />
      <div className="c1">
        <p>Community of Elites & NRIs</p>
      </div>
      <div className="c2"><p>Elegance Redefined </p> <hr />
        
      </div>
      <div className="c3">
        <p>At Sylvanscape, our vision transcends traditional residential <br />development. We aspire to curate a haven for the  <br />discerning – an exclusive community for elites and NRIs <br /> seeking a graceful lifestyle. <br />
Join a community that mirrors your refined taste. At <br />Sylvanscape, each villa plot is a canvas for your dream <br /> home, where nature blends seamlessly with opulence.</p>
      </div>
      <div className="c4">
        <p>Sylvanscape is not just a residential project; it's a vision <br /> brought to life for those who seek a life of grace and <br /> tranquility.</p>
   
      </div>
   
      </div>
    
    </>)
}

export default Community;
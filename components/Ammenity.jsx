import "./Ammenity.css";
import "./Font.css";

import Ammenitylogo1 from "./Ammenitylogo1";
import Ammenitylogo2 from "./Ammenitylogo2";
import Ammenitylogo3 from "./Ammenitylogo3";
function Ammenity() {
  return (
    <>
      <div className="ammenity" id="ammenity">
        <div className="d1">
          <p>Amenities</p>
        </div>
        <div className="d2">
          <p>
            A Symphony of Opulence <hr />
          </p>
        </div>
        <div className="d3">
          <p>
            Explore a realm of unmatched luxury at Sylvanscape, where an array
            of carefully curated amenities <br />
            awaits to redefine your lifestyle.
          </p>
        </div>

        <div className="d4Logos">
          <Ammenitylogo1/> 
           <Ammenitylogo2/>
           <Ammenitylogo3/>

        </div>
      </div>
    </>
  );
}
export default Ammenity;

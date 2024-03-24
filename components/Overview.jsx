import "./Overview.css";
import "./Font.css"
import  img  from "../images/Overview BG Final Image.png"
function Overview(){
    return(<>
     <div className="overview" id="Overview">
       <div className="tex">
        <p>
        Are you in search of the perfect plot for sale near Hinjawadi, Pune? Look no further. <br /> Sylvanscape presents an exquisite collection of luxury villa plots in a gated <br /> community near Hinjawadi Phase 3, pune. Our strategically located plots  <br />
offer not just a piece of land but an opportunity to embrace a  <br />
lifestyle of unparalleled elegance and natural beauty. <br />
Luxury, privacy, and security come together <br />
in our NA residential bungalow plots,  <br />
providing a serene and luxurious  <br />
living experience.  <br />
            
            
            
            </p> </div>
        <div className="pic"> <img src={img} alt="" /></div>

     </div>



    
    </>)
}

export default Overview;

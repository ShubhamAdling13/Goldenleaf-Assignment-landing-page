// import bgimage from "../images/Contact Us BG Image.png"
import "./Font.css";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="contactus" id="contactus">
        <div className="upper">
          {/* <img src={bgimage} alt="bgimage" /> */}
          <div>
            <h3>CONTACT US</h3>
          </div>
          <div>
            <h2>REACH OUT TO US </h2>
          </div>
          <div>
            <p>
           
              <strong>
             
                Feel free to get in touch with us at Sylvanscape.
              </strong>
              <br />
             <p style={{color: "rgb(195, 201, 207)"}}>  Whether you have questions, want to schedule a site visit, or need
              more information, our dedicated <br /> team is here to assist you.
              Your dream home journey begins with a simple call, </p>
              <br />
              <strong>reach us at +918554982203 </strong>
            </p>
          </div>
        </div>
        <div className="contactusform">
          <div className="d1"> 
            <div>  <input type="text" className="nam" placeholder="NAME*" /></div>
            <div ><input type="text" className="contac" placeholder="CONTACT*" /></div>
          </div>

          <div className="d2">
             <div> <input type="text" className="emai" placeholder="EMAIL*" /></div>
          </div>
          <div className="chkbox">
            <input type="checkbox" />
            <p>
              I would like to receive the latest property updates & promotions
            </p>
          </div>

          <div className="d4">
            <button>Submit </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

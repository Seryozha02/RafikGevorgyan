import "./About.css"
import studentImage from "../images/Rafo.jpg"
import docentImage from "../images/docent2.jpg"
import { Link } from "react-router-dom";

function About() {
    return(
       <>
       <div className="allTogether">
      <h2 style={{ textAlign: "center" }}>
        ՀՊՄՀ Ինֆորմատիկայի և դրա դասավանդման մեթոդիկայի ամբիոն
      </h2>

      <div className="bothCards">

      <form className="aboutPageRF">
          <p>ԳԻՏԱԿԱՆ ՂԵԿԱՎԱՐ</p>
          <div className="lecturer">
            <img className="imageOfLCT" src={docentImage} alt="" />
            <p>
              <b>
               ֆ․ մ. գ. թ․, դոցենտ `<br /> Ջանիբեկ Սրապիոնյան
              </b>
            </p>
          </div>
        </form>

        <form className="aboutPageRF">
          <p>ՈՒՍԱՆՈՂ</p>
          <div className="student">
            <img className="imageOfSTD" src={studentImage} alt="" />
            <p>
              <b>Գևորգյան Ռաֆիկ</b>
            </p>
          </div>
        </form>

        </div>
        <br />
        <br />
      <footer className="footerForContact">
        <p><b>Հասցե</b>` Տիգրան Մեծի 17</p>
        <p><b>Հեռախոս</b>` (+374 10) 59 70 49</p>
        <p><b>Ֆաքս</b>` (+374 10) 59 70 08</p>
        <p><b>Էլ. փոստ</b>` aspu.am@aspu.am</p>
        <p className="hpmh"><b><Link to="https://aspu.am/" target="_blank">Հայկական Պետական Մանկավարժական Համալսարան</Link></b></p>
      </footer>
      </div>
      </>
    )
}

export default About;
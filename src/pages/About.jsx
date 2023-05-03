import "./About.css"
import studentImage from "../images/Rafo.jpg"
import { Link } from "react-router-dom";

function About() {
    return(
       <>
       <div className="allTogether">
      <h2 style={{ textAlign: "center" }}>
        ՀՊՄՀ Ինֆորմատիկայի և դրա դասավանդման մեթոդիկայի ամբիոն
      </h2>
        <form className="aboutPageRF">
          <p>ՈՒՍԱՆՈՂ</p>
          <div className="student">
            <img className="imageOfSTD" src={studentImage} alt="" />
            <p>
              <b>Գևորգյան Ռաֆիկ</b>
            </p>
          </div>
        </form>
      <footer className="footerForContact">
        <p><b>Հասցե</b>` Տիգրան Մեծի 17</p>
        <p><b>Հեռախոս</b>` (+374 10) 59 70 49</p>
        <p><b>Ֆաքս</b>` (+374 10) 59 70 08</p>
        <p><b>Էլ. փոստ</b>` aspu.am@aspu.am</p>
        <p><b>Կայք</b>` <Link to="https://aspu.am/" target="_blank">https://aspu.am/</Link></p>
      </footer>
      </div>
      </>
    )
}

export default About;
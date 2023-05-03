import "./TwoPointTwo.css";
import png49 from "../images/png49.png";
import png50 from "../images/png50.png";


function TwoPointTwo() {
    return(
        <div>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>ԳԼՈՒԽ 2</p>
        <h3 style={{ textAlign: "center" }}>
          Միջին դպրոցում գծային հավասարումների համակարգերի լուծման
          առանձնահատկությունները թեմայի կիրառումն ու ուսուցումը
        </h3>
        <br />
        <div className="twoPointOne">
        <h4>
          2.2 Առաջադրված նմանատիպ խնդիրներ, հարցեր, տեսական և գործնական
          գիտելիքների ամրապնդման համար:
        </h4>
        <text className="SecondChapterTexts">
          <p>
            <b>ԳԾԱՅԻՆ ՀԱՎԱՍԱՐՈՒՄՆԵՐԻ ՀԱՄԱԿԱՐԳԵՐ</b>
          </p>
          <br />
          <img src={png49} alt="" />
          <br />
          <img src={png50} alt="" />
          <br />
        </text>
        <br />
        <text className="SecondChapterTexts">
          <p>
            <b> Երկրորդ գլխի ամփոփում</b>
          </p>
          <br />
          Երկրորդ գլխում ուսումնասիրվել է գծային հավասարումների համակարգեր
          թեմայի վերաբերյալ առավել կարևոր պարզ և բարդ օրինակներ, դրանց տարբեր
          տիպերը և տրվել են մանրամասն լուծումներ, կողմնորոշիչ մեթոդական
          ցուցումներ: Առաջադրվել են նմանատիպ տեսական և գործնական նշանակություն
          ունեցող խնդիրներ, տեսակներ՝ ինքնուրույն աշխատանքի համար:
          <br />
          <br />
        </text>
      </div>
    </div>
    )
}

export default TwoPointTwo;
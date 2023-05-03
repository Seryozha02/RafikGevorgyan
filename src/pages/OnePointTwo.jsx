import "./OnePointTwo.css";
import png21 from "../images/png21.png";
import png22 from "../images/png22.png";
import png23 from "../images/png23.png";
import png24 from "../images/png24.png";
import png25 from "../images/png25.png";
import png26 from "../images/png26.png";
import png27 from "../images/png27.png";
import png28 from "../images/png28.png";
import png29 from "../images/png29.png";
import png30 from "../images/png30.png";

function OnePointTwo() {
    return(<div>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>ԳԼՈՒԽ 1</p>
        <h3 style={{ textAlign: "center" }}>
          Միջին դպրոցում գծային հավասարումների համակարգերի լուծման
          առանևնահատկությունները
        </h3>
        <br />
        <div className="onePointOne">
        <p style={{ fontWeight: "bold" }}>
          1. 2 Միջին դպրոցում գծային հավասարումների համակարգերի լուծման
          երկրաչափական եղանակները
        </p>
        <br />
        <text className="FirstChapterTexts">
          <p>
            <b>Հավասարումների համակարգերի լուծման գրաֆիկական եղանակը</b>
          </p>
          <br />
          <p>
            Այս կդիտարկենք հնարք, որը սովորաբար անվանում են հավասարումների
            համակարգերի լուծման գրաֆիկական եղանակ։ Այդ հնարքը կայանում է
            համապատասխան ֆունկցիաների գրաֆիկների կառուցման և դրանց հատման
            պարզաբանման մեջ, այսինքն համակարգն ունի՞ լուծում, և դրանք քանի՞սն
            են։ Ընդհանրապես ասած, այդ եղանակով ոչ միշտ կարելի է ստանալ ճշգրիտ
            լուծումներ, սակայն առանձին դեպքերում դրանք հնարավոր է լինում գտնել։
          </p>
          <p>
            Այդ իսկ պատճառով համոզվելու համար, որ գտնված լուծումները ճշգրիտ են,
            անհրաժեշտ է դրանք տեղադրել համակարգի յուրաքանչյուր հավասարման մեջ և
            համոզվել, որ ստացվում են թվային հավասարություններ։ Այս պարագրաֆում
            օրինակներն ընտրված են այնպես, որ համակարգերի կամ հավասարումների
            լուծումները համարյա ակնհայտ են նկարներից։
          </p>
          <br />
          <p>
            <b>
              Երկու անհայտով երկու առաջին աստիճանի հավասարումների համակարգի
              լուծման գրաֆիկական եղանակը
            </b>
          </p>
          <p>
            <b>Օրինակ 1․ </b>Գրաֆիկական եղանակով լուծենք հավասարումների
            համակարգը։
          </p>
          <img src={png21} alt="" />
          <br />
          <p>
            Համակարգի յուրաքանչյուր հավասարումից y-ը արտահայտելով x-ով՝ ստանում
            ենք (1)–ին համարժեք համակարգը։
          </p>
          <img src={png22} alt="" />
          <br />
          <p>
            Հարթության վրա ներմուծենք x0y ուղղանկյուն կոորդինատային համակարգը։ y
            = 3x + 2 հավասարումը A1(1; 5) և B1(0; 2) կետերով անցնող ուղղի
            հավասարումն է, իսկ <b>y=-1/2 x+3/2 –ը՝ A2(1;-2) և B2 (0; -3/2)</b>{" "}
            կետերով անցնող ուղղի հավասարումը։
          </p>
          <img src={png23} alt="" />
          <br />
          <p>
            Նշենք, որ ելնելով (2) հավասարումների տեսքից, նախօրոք կարելի էր ասել,
            որ դիտարկվող ուղիղները հատվում են մի կետում։ Չէ՞ որ այդ ուղիղների
            անկյունային գործակիցները տարբեր են (3≠-1/2), հետևաբար ուղիղները
            զուգահեռ չեն։
          </p>
          <p>
            <b>Օրինակ 2․ </b>Գրաֆիկական եղանակով լուծենք հավասարումների
            համակարգը։
          </p>
          <p>
            Համակարգի յուրաքանչյուր հավասարումից y-ը արտահայտելով x-ով՝ ստանում
            ենք (3)-ին համարժեք համակարգը։
          </p>
          <img src={png24} alt="" />
          <br />
          <img src={png25} alt="" />
          <br />
          <p>
            <b>Օրինակ 3․ </b>Գրաֆիկական եղանակով լուծենք հավասարումների
            համակարգը։
          </p>
          <img src={png26} alt="" />
          <br />
          <p>
            Համակարգի յուրաքանչյուր հավասարումից y-ը արտահայտելով x-ով՝ ստանում
            ենք (5)-ին համարժեք համակարգը։
          </p>
          <img src={png27} alt="" />
          <br />
          Այս համակարգի հավասարումները նույնն են, և հետևաբար դրանցով տրվում է
          միևնույն ուղիղը՝ y = -x + 0,5 (նկ․3)։ Դա ցույց է տալիս, որ (5)
          համակարգի բոլոր լուծումները y = -x + 0,5 ուղղին պատկանող բոլոր կետերի
          (x; y) կոորդինատներն են։ (5) համակարգն ունի անթիվ բազմությամբ
          լուծումներ՝ (x; -x + 0,5), zորտեղ x-ը ցանկացած թիվ է։
          <br />
          <p>
            Այսպիսով, գծային հավասարումների համակարգը գրաֆիկական եղանակով
            լուծելու համար անհրաժեշտ է՝
          </p>
          <br />
          <p>1. Յուրաքանչյուր հավասարումը լուծել y-ի նկատմամբ,</p>
          <p>
            2. Կոորդինատային հարթության վրա կառուցել ստացված հավասարումներին
            համապատասխանող ուղիղները։
          </p>
          <br />
          <p>
            Եթե ուղիղները հատվում են, ապա նրանց հատման կետի կոորդինատներից
            բաղկացած թվազույգը կլինի համակարգի լուծումը։
          </p>
          <p>Եթե ուղիղները զուգահեռ լինեն, ապա համակարգը լուծում չունի։</p>
          <p>
            Եթե ուղիղները համընկնեն, ապա համակարգն ունի անթիվ բազմությամբ
            լուծումներ՝ այդ ուղղին պատկանող բոլոր կետերի կոորդինատների
            թվազույգերը։
          </p>
          <br />
          <p>
            <b>Դիտողություն 1։</b>
            Եթե առաջին աստիճանի հավասարումների համակարգի որոշ գործակիցներ
            հավասար են զրոյի, ապա այն բերվում է հետևյալ տեսքի համակարգերից որևէ
            մեկին․
          </p>
          <img src={png28} alt="" />
          <br />
          <br />
          <img src={png29} alt="" />
          <br />
          <img src={png30} alt="" />
          <br />
          <p>
            1, 2 և 3 դեպքերում համակարգի հավասարումներին համապատասխանող
            ուղիղները հատվում են մի կետում, այսինքն համակարգն ունի միակ լուծում։
            4-րդ դեպքում (b_1≠b_2 ) և 5-րդ դեպքում (a_1≠a_2 ), նշված ուղիղները
            համընկնում են, և համակարգն ունի անթիվ բազմությամբ լուծումներ, որոնք
            համապատասխանում են այդ ուղիղների կետերին։
          </p>
          <p>
            <b>Դիտողություն 2։ </b>Նշենք, որ x = a հավասարմանը կոորդինատային
            հարթության վրա համապատասխանում են բոլոր այն կետերը, որոնց աբսցիսը a
            է, իսկ օրդինատը՝ ցանկացած թիվ։ Բոլոր այդպիսի կետերը գտնվում են Ox
            առանցքին ուղղահայաց և A(a; 0) կետով անցնող ուղղի վրա։ Նման կերպ, y =
            b հավասարմանը բավարարում են բոլոր այն կետերը, որոնք գտնվում են Oy
            առանցքին ուղղահայաց և B(0; b) կետով անցնող ուղղի վրա։
          </p>
        </text>
        <br />
        <text className="FirstChapterTexts">
          <p>
            <b>Առաջին գլխի ամփոփում</b>
          </p>
          <br />
          Առաջին գլխում տրվել են Միջին դպրոցում գծային հավասարումների
          համակարգերի լուծման առանևնահատկությունները թեմային վերաբերվող լուծման
          եանակներն ու տեսակները, ուսումնասիրվել է դրանց երկրաչափական բոլոր
          հնարավոր նկարագրություններն ու տրվել են գրաֆիկական տեսքերը: Բերվել են
          բոլոր հնարավորտարբերակներն, իրենք համապատասխան օրինակներով:
        </text>
      </div>
    </div>
    )
}

export default OnePointTwo;
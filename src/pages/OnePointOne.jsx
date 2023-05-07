import "./OnePointOne.css";

import png1 from "../images/png1.png";
import png2 from "../images/png2.png";
import png3 from "../images/png3.png";
import png4 from "../images/png4.png";
import png5 from "../images/png5.png";
import png6 from "../images/png6.png";
import png7 from "../images/png7.png";
import png8 from "../images/png8.png";
import png9 from "../images/png9.png";
import png10 from "../images/png10.png";
import png11 from "../images/png11.png";
import png12 from "../images/png12.png";
import png13 from "../images/png13.png";
import png14 from "../images/png14.png";
import png15 from "../images/png15.png";
import png16 from "../images/png16.png";
import png17 from "../images/png17.png";
import png18 from "../images/png18.png";
import png19 from "../images/png19.png";
import png20 from "../images/png20.png";

function OnePointOne() {
    return(
        <div>
      <div className="onePointOne">
        <text className="FirstChapterTexts">
          <p>
            <b>
            Երկու անհայտով երկու առաջին աստիճանի հավասարումների համակարգեր
            </b>
          </p>
          <br />
          <p>
            <b style={{ color: "red" }}>Խնդիր։ </b>Հայտնի է, որ եղբոր ու քրոջ
            տարիքների տարբերությունը 3 է, իսկ գումարը՝ 15։ Քանի՞ տարեկան է
            եղբայրը և քանի՞ տարեկան՝ քույրը։
          </p>
          <p>
            <b style={{ color: "blue" }}>Լուծում։ </b>Պետք է գտնել երկու անհայտ
            մեծություններ՝ եղբոր տարիքը և քրոջ տարիքը։
          </p>
          Դիցուք եղբայրը x տարեկան է, իսկ քույրը՝ y տարեկան։ Քանի որ նրանց
          տարիքների տարբերությունը 3 է, ապա
          <br />
          (1) x-y=3,
          <br />
          իսկ քանի որ եղբոր և քրոջ տարիքների գումարը 15 է, ապա
          <br />
          (2) x+y=15։
          <br />
          Որոնելի x և y թվերը պետք է բավարարեն (1) և (2) հավասարումներին։
          Հետևաբար մեր խնդիրը բերվեց միաժամանակ (1) և (2) հավասարումներին
          բավարարող x և y թվերի զույգ գտնելուն։ Այսպիսի դեպքերում ասում են, որ
          տրված է x և y երկու անհայտով երկու հավասարման համակարգ՝
          <br />
          <img src={png1} alt="" />
          <br />
          Այս համակարգի համար կարելի է ընտրել այսպիսի թվերի զույգ՝ x=9, y=6։
          Հետևաբար եղբայրը 9 տարեկան է, քույրը՝ 6 տարեկան։
          <p>
            <b>Պատասխան </b>9 և 6 տարեկան։
          </p>
          <br />
          Հաջորդ կետում մենք ցույց կտանք, ինչպես փնտրել այդպիսի համակարգերի
          լուծումները։ Դիցուք տրված են x և y երկու անհայտներով երկու առաջին
          աստիճանի հավասարումներ՝
          <img src={png2} alt="" />
          <br />
          Ասում են, որ տրված է x և y երկու անհայտով երկու առաջին աստիճանի
          հավասարման համակարգ, եթե պահանջվում է գտնել բոլոր այն (x0;y0)
          թվազույգերը, որոնք միաժամանակ (3)-ի և՛ առաջին, և՛ երկրորդ
          հավասարումների լուծումներն են։ Սովորաբար համակարգի հավասարումները
          գրում են սյունակով՝ մեկը մյուսի տակ, և դրանք ձախից միավորում են ձևավոր
          փակագծով՝
          <br />
          <img src={png3} alt="" />
          <br />
          <b>(4) համակարգի լուծում</b> անվանում են այնպիսի (x0;y0) թվազույգը, որ
          (4) համակարգի հավասարումներից յուրաքանչյուրի լուծումն է։
          <br />
          <b>Լուծել համակարգը </b>
          նշանակում է գտնել նրա բոլոր լուծումները կամ ապացուցել, որ լուծումներ
          չկան։ Բերենք երկու անհայտով երկու առաջին աստիճանի հավասարումների
          համակարգերի օրինակներ․
          <br />
          <img src={png4} alt="" />
          <br />
          Եթե (4) հավասարումների համակարգում անհայտների գործակիցները զրոյից
          տարբեր են և բավարարում են a&#8321;:a&#8322;=b&#8321;:b&#8322;
          պայմանին, ապա ասում են, որ այդ համակարգի հավասարումներն ունեն
          անհայտների համեմատական գործակիցներ։ Օրինակ, (6) համակարգի
          հավասարումներն ունեն անհայտների համեմատական գործակիցներ, ավելին՝ նրանք
          համեմատական են նաև ազատ անդամներին՝ 2։6 = 1։3 =2։6։ Եթե (4)
          համակարգում անհայտների գործակիցները զրոյից տարբեր են և բավարարում են
          a&#8321;:a&#8322;≠b&#8321;:b&#8322; պայմանին, ապա ասում են, որ (4)
          համակարգի հավասարումների անհայտների{" "}
          <b>գործակիցները համեմատական չեն։</b>
          Օրինակ, (5) համակարգի հավասարումների անհայտների գործակիցները
          համեմատական չեն։ Սովորաբար հավասարումներում 0 • x և 0 • y տեսքի
          անդամները բաց են թողնում, այդ դեպքում (8), (9) և (10) համակարգերը
          կգրառվեն հետյալ տեսքով՝
          <br />
          <img src={png5} alt="" />
          <br />
        </text>
        <br />
        <text className="FirstChapterTexts">
          <p>
            <b> Տեղադրման եղանակը</b>
          </p>
          Այս կետում դիտարկում են երկու անհայտով երկու առաջին աստիճանի
          հավասարումների համակարգեր, որոնցում անհայտների բոլոր գործակիցները
          զրոյից տարբեր են և համեմատական չեն։
          <br />
          <p>Յուրաքանչյյուր այդպիսի համակարգ ունի միակ լուծում։</p>
          <p>
            <b>Օրինակ 1</b>։ Լուծենք Հավասարումների համակարգը։
          </p>
          <img src={png6} alt="" />
          <br />
          Դիցուք (x&#8320;; y&#8320;) թվազույգը (1) համակարգի լուծում է։
          Տեղադրելով այդ թվերի (1) համակարգի հավասարումների մեջ՝ կստանանք ճիշտ
          թվային հավասարություններ՝
          <br />
          <img src={png7} alt="" />
          <br />
          Առաջին թվային հավասարությունից y&#8320;-ն արտահայտենք x&#8320; – ով՝
          <br />
          y&#8320;=2x&#8320;+4:
          <br />
          Այժմ (2)-ի երկրորդ թվային հավասարությունում y&#8320;-ն փոխարինենք իրեն
          հավասար 2x&#8320;+4 թվով, այսինքն երկրորդ հավասարությունում y&#8320;-ի
          փոխարեն տեղադրենք 2x&#8320;+4։
          <br />
          <p>Կստանանք</p>
          <b>3x&#8320;+4(2x&#8320;+4)-27=0</b>
          <br />
          ճիշտ թվային հավասարությունը, այսինքն կստանանք, որ x&#8320; թիվը
          բավարարում է
          <br />
          <p>
            <b>3x+4(2x+4)-27=0</b>
          </p>
          հավասարմանը:
          <br />
          Լուծելով այդ հավասարումը՝ գտնում ենք, որ x&#8320;=1:
          <br />
          <p>
            Տեղադրելով գտնված արժեքը (3) հավասարության մեջ՝ ստանում ենք, որ{" "}
          </p>
          <p>y&#8320;=6։</p>
          <p>
            Այսպիսով, եթե (1) համակարգն ունի (x&#8320;; y&#8320;) լուծում, ապա
          </p>
          <p>
            <b>x&#8320;=1; y&#8320;=6:</b>
          </p>
          Տեղադրելով այդ թվերը (1) համակարգի հավասարումների մեջ՝ համոզվում ենք,
          որ դրանք, իրոք՝ բավարարում են այդ հավասարումներին։Հետևաբար (1)
          համակարգն ունի միակ լուծում՝ (1; 6)։ Նկատենք, որ նույն արդյունքը մենք
          կստանայինք, եթե երկրորդ հավասարությունից y&#8320;-ն արտահայտեինք
          x&#8320;-ով և y&#8320;-ի համար ստացված արտահայտությունը տեղադրեինք
          առաջին հավասարության մեջ․ Կարելի է նաև այս դատողություններում (2)-ի
          որևէ հավասարությունից x&#8320;-ն արտահայտել y&#8320;-ով և ստացված
          արտահայտությունը տեղադրել (2)-ի մյուս հավասարության մեջ։
          <br />
          <p>Նմանատիպ դատողություններ կարելի է կատարել նաև</p>
          <img src={png8} alt="" />
          <br />
          Ցանկացած հավասարումների համակարգի համար, որում անհայտների գործակիցները
          զրոյից տարբեր են և համեմատական չեն։ (Համեմատական գործակիցներով
          հավասարումների համակարգեր մենք կուսումնասիրենք ավելի ուշ)։ Վերը
          դիտարկվածից բխում է (4) համակարգի լուծման հետևյալ եղանակը, որն
          անվանում են <b>տեղադրման եղանակ։</b>
          <br />
          <p>
            Որպեսզի լուծենք (4) համակարգը, որում անհայտների գործակիցները զրոյից
            տարբեր են և համեմատական չեն, անհրաժեշտ է՝
          </p>
          <br />
          <p>
            1. Անհայտներից մեկը (օրինակ՝ y-ը) համակարգի հավասարումներից որևէ
            մեկից արտահայտել մյուս անհայտով,
          </p>
          <p>
            2. Ստացված արտահայտությունը տեղադրել համակարգի մյուս հավասարության
            մեջ y-ի փոխարեն,
          </p>
          <p>3. Լուծել ստացված մեկ x անհայտով հավասարումը,</p>
          <p>
            4. Տեղադրելով ստացված x&#8320; արժեքը y-ի բանաձևի մեջ՝ գտնել
            y&#8320;-ն։
          </p>
          <br />
          <p>
            Հենց (x&#8320;; y&#8320;) թվազույգը կլինի համակարգի միակ լուծումը։
          </p>
          <p>
            <b>Օրինակ 2։ </b>Լուծենք հավասարումների համակարգը։
          </p>
          <img src={png9} alt="" />
          <br />
          <p>
            համակարգի երկրորդ հավասարումից y-ն արտահայտենք x-ով՝ y=7x+6 (6) և
            առաջին հավասարման մեջ y-ի փոխարեն տեղադրենք 7x+6` 4x-5(7x+6)-1=0 (7)
            Լուծելով (7) հավասարումը՝ գտնում ենք նրա միակ արմատը՝ x&#8320;=-1։
            Տեղադրելով x&#8320;-ն (6) հավասարության մեջ՝ գտնում ենք, որ
            y&#8320;=7x&#8320;+6=7•(-1)+6=-1:
          </p>
          <p> Նշանակում է համակարգն ունի միակ լուծում՝ (-1;-1):</p>
          <br />
        </text>
        <br />
        <text className="FirstChapterTexts">
          <p>
            <b> Գործակիցների հավասարեցման (գումարման) եղանակը</b>
          </p>
          <br />
          Մենք շարունակում ենք դիտարկել երկու անհայտով երկու առաջին աստիճանի
          հավասարումների համակարգեր, որոնցում անհայտների գործակիցները զրոյից
          տարբեր են և համեմատական չեն։ Ինչպես արդեն նշվել է, յուրաքանչյուր
          այդպիսի համակարգ ունի միակ լուծում։ Այդպիսի համակարգերի լուծման
          տեղադրման եղանակից բացի կա նաև այլ եղանակ, որն անվանվում է
          գործակիցների հավասարեցման կամ գումարման եղանակ։
          <br />
          <p>
            <b>Օրինակ</b>։ Լուծենք համակարգը։
          </p>
          <img src={png10} alt="" />
          <br />
          <p>
            Ենթադրենք (x&#8320;; y&#8320;) թվազույգը (1) համակարգի լուծում է։
            Տեղադրելով այդ թվերը (1) համակարգի հավասարումների մեջ՝ կստանանք ճիշտ
            թվային հավասարություններ՝
          </p>
          <img src={png11} alt="" />
          <br />
          <p>
            Այս հավասարություններում x&#8320;-ի գործակիցները դարձնենք իրար
            հավասար։ Դրա համար առաջին հավասարությունը բազմապատկենք 3-ով, իսկ
            երկրորդը՝ 2-ով՝ Կստանանք
          </p>
          <img src={png12} alt="" />
          <br />
          ճիշտ թվային հավասարությունները։ <br />
          <br />
          <p>
            Առաջին հավասարությունից հանելով երկրորդը՝ կստանանք y&#8320;-1=0 ճիշտ
            թվային հավասարությունը, որտեղից՝ y&#8320;=1: Տեղադրենք այդ թիվը (2)
            հավասարություններից առաջինի մեջ՝ <p>2x&#8320;+3 • 1+1=0,</p> որտեղից
            ստանում ենք x&#8320;=-2:
          </p>
          Այսպիսով, եթե (1) համակարգն ունի (x&#8320;; y&#8320;) լուծում, ապա դա
          կարող է լինել միայն x&#8320;=-2, y&#8320;=1 թվերի զույգը։ Տեղադրելով
          այդ թվերը (1) համակարգի հավասարումների մեջ՝ համոզվում ենք, որ դրանք ,
          իրոոք բավարարում են այդ հավասարումներին։ Հետևաբար (1) համակարգն ունի
          միակ լուծում՝ (-2, 1)։ Մենք y&#8320;-ի փոխարեն 1 թիվը տեղադրեցինք (2)
          հավասարություններից առաջինի մեջ, սակայն արդյունքը նույնը կլիներ, եթե
          այդ թիվը տեղադրենք (2) հավասարություններից երկրորդի մեջ։ Իրոք, այդ
          դեպքում երկրորդ հավասարությունը կգրվեր 〖3x〗&#8320;+4 •1+2=0 տեսքով։
          Այստեղից ստանում ենք, որ x&#8320;=-2։ Մենք նորից ստացանք արդեն գտնված
          (-2, 1) լուծումը։ (2) հավասարություններում x&#8320;-ի գործակիցները
          հավասարեցնելու փոխարեն կարելի է հավասարեցնել y&#8320;-ի գործակիցները։
          Արդյունքը կլինի նույնը։ Նման դատողություններ կարելի է անել նաև
          ցանկացած
          <br />
          <img src={png13} alt="" />
          <br />
          համակարգի համար, եթե նրանում անհայտների գործակիցները զրոյից տարբեր են
          և համեմատական չեն։ Վերը դիտարկվածից բխում է (3) համակարգի լուծման
          հետևյալ եղանակը, որն անվանում են{" "}
          <b>գործակիցների հավասարեցման եղանակ կամ գումարման եղանակ։</b> (3)
          հավասարումների համակարգը լուծելու համար, որում անհայտների գործակիցները
          զրոյից տարբեր են և համեմատական չեն, անհրաժեշտ է՝
          <br />
          <p>
            1. Բազմապատկելով զրոյից տարբեր թվերով՝ երկու հավասարումներում էլ
            իրար հավասարեցնել անհայտներից մեկի, օրինակ x-ի, գործակիցները,
          </p>
          <p>2. Մի հավասարումը հանել մյուսից,</p>
          <p>3. Լուծել ստացված մեկ y անհայտով հավասարումը,</p>
          <p>
            4. Տեղադրել ստացված y&#8320; արժեքը համակարգի հավասարումներից որևէ
            մեկի մեջ և գտնել ստացված մեկ անհայտով հավասարման x&#8320; լուծումը։
          </p>
          <br />
          <p>
            Այդ դեպքում գտնված (x&#8320;; y&#8320;) թվազույգը կլինի համակարգի
            միակ լուծումը։
          </p>
          <br />
          <p>
            <b>Օրինակ 2։ </b>Գումարման եղանակով լուծենք
          </p>
          <img src={png14} alt="" />
          <br />
          <p>
            Այս համակարգի առաջին հավասարումը բազմապատկելով 2-ով, իսկ երկրորդը՝
            3-ով՝ (4) համակարգը արտագրենք տեսքով:
          </p>
          <br />
          <img src={png15} alt="" />
          <br />
          համակարգի երկրորդ հավասարումից հանելով առաջինը՝ կստանանք մեկ yանհայտով
          գծային հավասարում՝ y-7=0, որտեղից՝ y= 7։ y-ի փոխարեն տեղադրելով 7 թիվը
          (4) համակարգի առաջին հավասարման մեջ՝ ստանում ենք 6x + 49 + 17 = 0,
          որտեղից՝ x = -11:
          <br />
          Հետևաբար (4) համակարգն ունի (-11, 7) միակ լուծումը։
          <p>
            Եթե համակարգի հավասարումներում անհայտների գործակիցները հակադիր թվեր
            են, ապա այդ հավասարումները հարմար է գումարել։
          </p>
          <p>
            <b>Օրինակ 3։ </b>Լուծենք Հավասարումների համակարգը։
          </p>
          <img src={png16} alt="" />
          <br />
          Գումարելով (6) համակարգի հավասարումները՝ ստանում ենք 5y – 10 = 0
          Գծային հավասարումը, որտեղից y = 2: (6) համակարգի առաջին հավասարման մեջ
          y-ի փոխարեն տեղադրելով 2՝ կստանանք x + 4 – 3 = 0 որտեղից x = -1:
          <br />
          Հետևաբար (6) համակարգն ունի (-1, 2) միակ լուծումը։
        </text>
        <br />
        <text className="FirstChapterTexts">
          <p>
            <b> Երեք անհայտով առաջին աստիճանի հավասարումների համակարգեր</b>
          </p>
          <br />
          <p>
            <b>ax+by+cz+d=0</b>
          </p>
          հավասարումը, որտեղ a, b, c և d-ն տված թվեր են, ընդ որում a, b և c
          թվերից գոնե մեկը զրոյից տարբեր է, անվանում են{" "}
          <b>երեք անհայտով առաջին աստիճանի հավասարում։</b>{" "}
          (x&#8320;;y&#8320;;z&#8320; ) թվերի եռյակը անվանում են (1) հավասարման
          լուծում, եթե այդ թվերը բավարարում են (1) հավասարմանը, այսինքն՝ (1)
          հավասարման մեջ x-ի փոխարեն տեղադրելով x&#8320;, y-ի փոխարեն՝ y&#8320;,
          z-ի փոխարեն՝ z&#8320;, (1) հավասարումը դառնում է ճիշտ թվային
          հավասարություն՝ ax&#8320;+by&#8320;+cz&#8320;+d=0 (2) Նման կերպ
          սահմանվում են չորս, հինգ և այլն անհայտներով առաջին աստիճանի
          հավասարումը և նրա լուծումը։
          <br />
          Դիցուք տրված են x, y և z երեք անհայտներով երեք առաջին աստիճանի
          հավասարումներ։ Ասում են, որ տրված է x, y և z երեք անհայտներով երեք
          առաջին աստիճանի հավասարումների համակարգ, եթե պահանջվում է գտնել (x; y;
          z) թվերի եռյակներ, որոնք միաժամանակ այդ երեք հավասարումներից
          յուրաքանչյուրի լուծումն են։ Այդպիսի եռյակներն անվանում են տվյալ
          համակարգի լուծումներ։ Նման կերպ սահմանվում են երեք, չորս և այլն
          անհայտով երեք, չորս և այլն առաջին աստիճանի հավասարումների համակարգը և
          նրա լուծումը։
          <br />
          Լուծել հավասարումների համակարգը նշանակում է գտնել նրա բոլոր
          լուծումները կամ ապացուցել, որ լուծումներ չկան։ Մենք արդեն
          ուսումնասիրել ենք երկու անհայտով երկու առաջին աստիճանի հավասարումների
          համակարգերը։ Ցանկացած այդպիսի համակարգ կարելի է լուծել տեղադրման
          եղանակով։ Բերենք երեք անհայտով երեք առաջին աստիճանի հավասարումների
          համակարգի լուծման օրինակ և ցույց տանք, որ այդ համակարգերը նույնպես
          կարելի է լուծել տեղադրման եղանակով։
          <br />
          <p>
            <b>Օրինակ։ </b>Լուծենք հավասարումների համակարգը։
          </p>
          <img src={png17} alt="" />
          <br />
          Ցույց տանք, ինչպես կարելի է լուծել այս համակարգը տեղադրման եղանակով։
          (3) համակարգի երրորդ հավասարումից x-ն արտահայտենք y և z-ով՝ x = y –z
          (4) և y – z-ը x-ի փոխարեն տեղադրենք (3) համակարգի առաջին և երկրորդ
          հավասարումների մեջ։ Կստանանք
          <br />
          <img src={png18} alt="" />
          <br />
          հավասարումները, որոնք նման անդամների միացումից հետո կգրվեն այսպես՝
          <br />
          <img src={png19} alt="" />
          <br />
          Այսպիսով, տեղադրման եղանակով կարելի է x, y և z երեք անհայտներով երեք
          առաջին աստիճանի հավասարումների համակարգի լուծումը բերել y և z երկու
          անհայտներով երկու առաջին աստիճանի հավասարումների համակարգի լուծման։
          Լուծելով (5) համակարգը՝ գտնում ենք, որ y&#8320;=-2,z&#8320;=1:
          y&#8320;-ի և z&#8320;-ի այս արժեքները տեղադրելով (4) արտահայտության
          մեջ՝ գտնում ենք, որ x&#8320;=-3: Այսպիսով, (3) համակարգն ունի միակ
          լուծում՝ x&#8320;=-3,y&#8320;=-2,z&#8320;=-1։ Ընդհանուր դեպքում x, y և
          z երեք անհայտով երեք առաջին աստիճանի հավասարումների համակարգ լուծելիս
          կարելի է վարվել նույն կերպ, ինչպես այս օրինակում։ Օգտվելով համակարգի
          հավասարումներից մեկից՝ անհայտներից մեկը, օրինակ z-ը պետք է արտահայտել
          մնացած անհայտներով և z-ի համար ստացված արտահայտությունը տեղադրել
          համակարգի մնացած երկու հավասարումներում z-ի փոխարեն։ Այնուհետև
          անհրաժեշտ է լուծել x և y երկու անհայտով հավասարումների ստացված
          համակարգը։
          <br />
          Եթե այդ համակարգն ունի միակ լուծում՝ (x&#8320;;y&#8320; ), ապա
          x&#8320;-ն և y&#8320;-ն տեղադրելով z-ի արտահայտության մեջ՝ գտնում ենք
          z&#8320;-ն, և հենց (x&#8320;;y&#8320;;z&#8320; ) եռյկաը կլինի
          համակարգի միակ լուծումը։ Իսկ եթե այդ համակարգը լուծում չունի, ապա
          սկզբնական համակարգը նույնպես լուծում չունի։ Վերջապես, եթե այդ
          համակարգն ունի անթիվ բազմությամբ լուծումներ, ապա և սկզբնական համակարգն
          ունի անթիվ բազմությամբ լուծումներ։
          <br />
          <p>
            Նման կերպ լուծվում են նաև չորս, հինգ և այլն անհայտներով
            հավասարումների համակարգերը։
          </p>
          <br />
          <img src={png20} alt="" />
        </text>
        </div>
        </div>

    )
}

export default OnePointOne;
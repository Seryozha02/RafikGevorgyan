import { useState } from "react";
import {navItems} from "./NavItems"
import DropDownThtc2 from "./DropDownThtc2";
import DropDownPrct2 from "./DropDownPrct2";
import { Link } from "react-router-dom";
import "./NavBar2.css"
import DropDownTests from "./DropDownTests";

function NavBar2() {
    const [showingDropDown, setShowingDropDown] = useState(false)
    const [showingDropDown2, setShowingDropDown2] = useState(false)
    const [showingDropDownTests, setShowingDropDownTest] = useState(false)

    return(
        <>
            <nav className="navbar">
                <ul className="allNavItems">
                    {navItems.map(item => {
                        if(item.title === "Տեսական նյութեր") {
                            return (
                                <li 
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setShowingDropDown(true)}
                                    onMouseLeave={() => setShowingDropDown(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {showingDropDown && <DropDownThtc2 />}
                                </li>
                            )
                        }else if(item.title === "Գործնական նյութեր") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setShowingDropDown2(true)}
                                    onMouseLeave={() => setShowingDropDown2(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {showingDropDown2 && <DropDownPrct2 />}
                                </li>
                            )
                        }else if (item.title === "Թեստեր") {
                            return (
                              <li
                                key={item.id}
                                className={item.cName}
                                onMouseEnter={() => setShowingDropDownTest(true)}
                                onMouseLeave={() => setShowingDropDownTest(false)}
                              >
                                <Link to={item.path} >{item.title}</Link>
                                {showingDropDownTests && <DropDownTests />}
                              </li>
                            );
                          }else {
                            return (
                                <li
                                    key={item.id} className={item.cName}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            )
                        }
                    })}
                </ul>
            </nav>
        </>
    )
}

export default NavBar2;
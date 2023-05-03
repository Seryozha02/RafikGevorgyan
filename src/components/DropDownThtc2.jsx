import { useState } from "react"
import { Link } from "react-router-dom"
import {theoreticalMaterials} from "./NavItems"
import "./DropDownThtc2.css"

function DropDownThtc2() {
    const [isDroppedDown, setIsDroppedDown] = useState(false)
    return(
        <>
            <ul className={isDroppedDown ? "thtcMtrsClicked" : "thtctMtrs"} onClick={() => setIsDroppedDown(!isDroppedDown)}>
                    {theoreticalMaterials.map(item => {
                        return(
                            <li key={item.id}>
                                <Link 
                                    to={item.path}
                                    className={item.cName}
                                    onClick={() => setIsDroppedDown(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
            </ul>
        </>
    )
}

export default DropDownThtc2;
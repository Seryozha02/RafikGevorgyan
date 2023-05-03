import { useState } from "react"
import { Link } from "react-router-dom"
import {practicalMaterials} from "./NavItems"
import "./DropDownPrct2.css"

function DropDownPrct2() {
    const [isDroppedDown, setIsDroppedDown] = useState(false)
    return(
        <>
            <ul className={isDroppedDown ? "prctMtrsClicked" : "prctMtrs"} onClick={() => setIsDroppedDown(!isDroppedDown)}>
                    {practicalMaterials.map(item => {
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

export default DropDownPrct2;
import React from "react"
import { SiFloatplane } from "react-icons/si"

export default function Navbar() {

    const iconStyle = {
        fontSize: "35px",
        paddingRight: "10px"
    }

    return (
        <nav className="nav">
            <SiFloatplane
                style={iconStyle}
            />
            <h1>my travel journal.</h1>
        </nav>
    )
}

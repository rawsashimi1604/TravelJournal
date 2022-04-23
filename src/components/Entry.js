import React from "react"
import { MdLocationOn } from "react-icons/md"

export default function Entry() {

    const iconStyle = {
        fontSize: "20px",
        color: "#F55A5A",
    }

    return (
        <div className="entry">

            <img src="./images/Mount_Fuji.png"></img>

            <div className="entry-contents">
                <div className="entry-location">
                    <MdLocationOn
                        style={iconStyle}
                    />
                    <span>JAPAN</span>
                    <a href="https://maps.google.com/">View on google maps</a>
                </div>

                <h1>Mount Fuji</h1>

                <h2>12 Jan, 2021 - 24 Jan, 2021</h2>

                <p>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
                
            </div>

        </div>
    )
}
import React from "react"
import { MdLocationOn } from "react-icons/md"

export default function Entry(props) {

    const iconStyle = {
        fontSize: "20px",
        color: "#F55A5A",
    }

    return (
        <div className="entry">

            <img src={`./images/${props.data.img}`}></img>

            <div className="entry-contents">
                <div className="entry-location">
                    <MdLocationOn
                        style={iconStyle}
                    />
                    <span>{props.data.country.toUpperCase()}</span>
                    <a href={props.data.location}>View on Wikipedia</a>
                </div>

                <h1>{props.data.title}</h1>

                <h2>{props.data.date.startDate} - {props.data.date.endDate}</h2>

                <p>
                    {props.data.description}
                </p>
                
            </div>

        </div>
    )
}
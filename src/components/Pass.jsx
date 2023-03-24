import React from "react";
import "../styles.css";

export default function Pass(props){

    let newSweets = props.sweets + 10;
    let chocolates = props.chocolates + 10;

    return(
        <div>
                            <div className="pass">{newSweets}</div>
                            <div className="pass">{chocolates}</div>

        </div>

    )
}
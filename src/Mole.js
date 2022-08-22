import { useState } from "react";
import mole from "./mole.png";
import { useEffect } from "react";

function Mole(props) {
    var image = require("./mole.png");
    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 50000);
        let timer = setTimeout(() => {
            props.setDisplayMole(false);
            console.log(randomSeconds);
        }, randomSeconds);
        return () => clearTimeout(timer);
    });

    return (
        <div>
            <img
                style={{ width: "10vw" }}
                src={image}
                onClick={props.handleClick}
            />
        </div>
    );
}

export default Mole;

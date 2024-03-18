import React from "react";

export function Background({background, style} : {background: string, style: any}) {
    return (<div className="-z-10 fixed" style={style}>
        <img src={background} alt={"background " + background} style={{width: "100%"}}/>
    </div>)
}
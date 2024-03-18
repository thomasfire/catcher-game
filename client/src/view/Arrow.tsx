import React from "react";

import arrow_left from "../../assets/icon-arrow-left.svg";
import arrow_right from "../../assets/icon-arrow-right.svg";
import {useDispatch} from "react-redux";
import {moveLeft, moveRight} from "../store/gameSlice";
import {Dispatch} from "@reduxjs/toolkit";

export function Arrow({right}: { right: boolean }) {
    const dispatch: Dispatch<any> = useDispatch();
    const buttonPressed = () => right ? dispatch(moveRight(null)) : dispatch(moveLeft(null));

    return (
        <div className="h-screen w-6/12 z-30 fixed flex items-center align-middle" style={{
            top: "0",
            left: right ? "50%" : "0%"
        }}>
            <button className="w-full h-full flex items-center align-middle justify-center"
                    onClick={buttonPressed}>
                {
                    <img src={right ? arrow_right : arrow_left} width="100px" alt="arrow" className="self-center"/>
                }
            </button>
        </div>
    );
}
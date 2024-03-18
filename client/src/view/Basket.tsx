import React from "react";
import { useSelector } from 'react-redux'
import boat from "../../assets/boat.png";
import {translatePosition} from "../store/gameSlice";
import {basketPositionY, basketWidth, gameStartX, gameWidth} from "../sizes";

export function Basket() {
    const position = useSelector((state: any) => state.game.basketPosition);
    const realPosition = translatePosition(position, 0);
    return (
        <img src={boat} className="z-20 fixed" style={{
            width: `${basketWidth}px`,
            left: `${realPosition.x * gameWidth - basketWidth / 2 + gameStartX}px`,
            top: `${basketPositionY}px`
        }} alt="basket"/>
    );
}
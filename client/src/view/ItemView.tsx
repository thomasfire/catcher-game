import React from "react";
import {Item} from "../store/Item";
import {gameHeight, gameStartX, gameStartY, gameWidth, itemWidth} from "../sizes";
import {translatePosition} from "../store/gameSlice";

export function ItemView({item}: { item: Item }) {
    const realPosition = translatePosition(item.positionH, item.positionV);
    return (
        <img src={item.icon} className="z-10 fixed" style={{
            width: `${itemWidth}px`,
            top: `${realPosition.y * gameHeight - itemWidth / 2 + gameStartY}px`,
            left: `${realPosition.x * gameWidth - itemWidth / 2 + gameStartX}px`,
        }} alt="falling item" />
    );
}
import {useSelector} from "react-redux";
import {GameStorage} from "../store/store";
import React from "react";
import {gameStartY, scoreCounterWidth} from "../sizes";

export function Score() {
    const score = useSelector((state: GameStorage) => state.game.score);
    return (
        <div className="text-green-600 text-xl fixed flex p-2" style={{
            maxWidth: `${scoreCounterWidth}px`,
            top: `${gameStartY}px`,
            right: `${scoreCounterWidth}px`,
        }}>
            <span>{score}</span>
        </div>
    );
}
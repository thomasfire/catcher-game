import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {GameStorage} from "../store/store";
import {GAME_LENGTH} from "../services/gameGenerator";
import {gameStartX, gameStartY} from "../sizes";

export function Timer() {
    const timeStarted = useSelector((state: GameStorage) => state.game.timeStarted);
    const [timeLeft, setTimeleft] = useState(GAME_LENGTH);

    useEffect(() => {
        let timer = timeStarted && setInterval(
            () => setTimeleft(GAME_LENGTH + timeStarted - (new Date().getTime())),
            100);
        return () => {
            if (timer) clearInterval(timer);
        }
    }, [timeStarted])

    return (
        <div className="text-green-600 text-xl fixed flex p-2" style={{
            top: `${gameStartY}px`,
            left: `${gameStartX}px`,
        }}>
            <span>{Math.round(timeLeft / 100) / 10} s</span>
        </div>
    );
}
import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {openPage, Page} from "../store/pageSlice";
import {resetGame, updateUsername} from "../store/gameSlice";
import {Dispatch} from "@reduxjs/toolkit";
import {GameStorage} from "../store/store";
import {LeaderBoardResponseEntry} from "../../../lib/leaderboardTypes";


export function SubmitNamePage() {
    const dispatch: Dispatch<any> = useDispatch();
    const score = useSelector((state: GameStorage) => state.game.score);
    const username = useSelector((state: GameStorage) => state.game.username);

    const submitFn = (_e: any) => {
        fetch("/leaderboard/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new LeaderBoardResponseEntry(score, username || ""))
        }).then((res: Response) => {
            console.info(res);
            dispatch(openPage(Page.LeaderBoard))
        }).catch((err) => {
            console.error(err)
            dispatch(openPage(Page.LeaderBoard))
        }).finally(() => {
            dispatch(resetGame(null))
        })
        return false
    };

    return (
        <div className="w-full h-full flex content-center justify-center align-middle">
            <div className="grid h-min self-center bg-blue-500 rounded p-6">
                <div
                    className="flex flex-col items-center"
                >
                    <span className="text-xl text-gray-800">You scored: {score}</span>
                    <input id="score" type="hidden" name="score" value={score}/>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Your username"
                        onChange={event => dispatch(updateUsername(event.target.value))}
                        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 m-2"
                        value={username || ""}
                    />
                    <button
                        type="button"
                        className="bg-red-500 text-white font-bold px-4 py-2 rounded mt-4 hover:bg-red-700
                        focus:outline-none focus:ring-2 focus:ring-red-600 m-2 p-2"
                        onClick={submitFn}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
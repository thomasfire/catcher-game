import React from "react";
import { useDispatch } from 'react-redux'
import {openPage, Page} from "../store/pageSlice";
import {Dispatch} from "@reduxjs/toolkit";


export function StartPage() {
    const dispatch: Dispatch<any> = useDispatch();
    return (
        <div className="w-full h-full flex content-center justify-center align-middle">
            <div className="grid h-min self-center">
                <button onClick={() => dispatch(openPage(Page.GamePage))}
                        className="bg-blue-500 hover:bg-blue-700 text-white col-start-1 row-start-1
                        font-bold py-2 px-4 rounded h-min self-center m-1">
                    Start game
                </button>
                <button onClick={() => dispatch(openPage(Page.LeaderBoard))}
                        className="bg-red-500 hover:bg-red-700 text-white col-start-1 row-start-2
                        font-bold py-2 px-4 rounded h-min self-center m-1">
                    Leaderboard
                </button>
            </div>
        </div>
    );
}
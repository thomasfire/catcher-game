import {openPage, Page} from "../store/pageSlice";
import React from "react";
import {Dispatch} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

export function BackToStart() {
    const dispatch: Dispatch<any> = useDispatch();
    return (
        <button onClick={() => dispatch(openPage(Page.StartPage))}
                className="bg-emerald-500 hover:bg-emerald-700 text-gray-800 col-start-1 row-start-1 z-40
                        font-bold py-2 px-4 rounded h-min self-center m-1 fixed left-1 top-1">
            Return to main
        </button>
    );
}
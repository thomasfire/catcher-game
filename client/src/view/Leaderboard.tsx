import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GameStorage} from "../store/store";
import {LeaderboardState, updateLeaderboard} from "../store/leaderboardSlice";
import {LeaderBoardResponseEntry, LeaderBoardResponseType} from "../../../lib/leaderboardTypes";
import {LeaderboardEntry} from "./LeaderboardEntry";
import {leaderboardUpdate} from "../services/leaderboardUpdate";
import {Dispatch} from "@reduxjs/toolkit";
import {BackToStart} from "./BackToStart";

export function Leaderboard() {
    const leaders: LeaderboardState = useSelector((state: GameStorage) => state.leaderboard)
    const dispatch: Dispatch<any> = useDispatch();
    useEffect(() => {
        const timer = leaderboardUpdate((payload: LeaderBoardResponseType) => dispatch(updateLeaderboard(payload)))
        return () => {
            clearInterval(timer)
        };
    }, [])
    return (
        <>
            <BackToStart/>
            <div className="w-full h-screen flex content-center justify-center align-middle overflow-scroll">
                <div className="grid h-min max-h-screen self-center bg-blue-500 rounded overflow-scroll pt-5 pb-10">
                    <table className="overflow-scroll max-h-screen">
                        <thead className="p-1">
                        <tr>
                            <th className="px-4 py-2">Position</th>
                            <th className="px-4 py-2">Username</th>
                            <th className="px-4 py-2">Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {leaders.leaderboardTable?.leaders.map((value: LeaderBoardResponseEntry, i: number) =>
                            <LeaderboardEntry
                                key={"leaderboard" + (i + 1)}
                                place={i + 1}
                                name={value.username}
                                score={value.score}/>)}
                        </tbody>
                        <tfoot className="p-2">
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
}
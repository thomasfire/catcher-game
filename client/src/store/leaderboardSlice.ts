import {createSlice, Slice} from '@reduxjs/toolkit';
import {LeaderBoardResponseType} from "../../../lib/leaderboardTypes";

export type LeaderboardState = {
    leaderboardTable: LeaderBoardResponseType | null
};


export const leaderboardSlice: Slice = createSlice({
    name: 'leaderboard',
    initialState: {
        leaderboardTable: null
    },
    reducers: {
        updateLeaderboard: (state: LeaderboardState, action: {payload: LeaderBoardResponseType, type: string}) => {
            state.leaderboardTable = action.payload;
        },
    },
})

export const { updateLeaderboard } = leaderboardSlice.actions

export default leaderboardSlice.reducer
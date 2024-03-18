import {configureStore} from '@reduxjs/toolkit';
import gameReducer, {GameState} from "./gameSlice";
import leaderboardReducer, {LeaderboardState} from "./leaderboardSlice";
import pageReducer, {PageState} from "./pageSlice";


export type GameStorage = {
    game: GameState,
    leaderboard: LeaderboardState,
    page: PageState
}
export default configureStore({
    reducer: {
        game: gameReducer,
        leaderboard: leaderboardReducer,
        page: pageReducer
    },
});


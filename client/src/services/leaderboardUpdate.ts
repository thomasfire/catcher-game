import {LeaderBoardResponseType} from "../../../lib/leaderboardTypes";

const INTERVAL = 1000 * 10;

export function leaderboardUpdate(callback: (payload: LeaderBoardResponseType) => void): ReturnType<typeof setTimeout> {
    const updateFn = async () => {
        fetch("/leaderboard/get")
            .then(async (response: Response) => {
                const result: LeaderBoardResponseType = await response.json();
                callback(result);
            });
    };
    updateFn();
    return setInterval(updateFn, INTERVAL);
}
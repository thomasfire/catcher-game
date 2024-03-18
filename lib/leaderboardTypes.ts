export class LeaderBoardResponseEntry {
    score: number;
    username: string;

    constructor(score: number, username: string) {
        this.score = score;
        this.username = username;
    }
}

export class LeaderBoardResponseType {
    leaders: LeaderBoardResponseEntry[];

    constructor(redisZrangeOutput: string[]) {
        this.leaders = [];
        for (let i = 0; i < redisZrangeOutput.length / 2; i++) {
            const username = redisZrangeOutput[i * 2];
            const score  = redisZrangeOutput[i * 2 + 1];
            this.leaders.push(new LeaderBoardResponseEntry(Number(score), username))
        }
    }
}
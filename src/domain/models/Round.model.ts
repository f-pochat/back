export class Round {
    id: string;
    playerId: string;
    courseId: string;
    playDate: string;
    playedHoles: PlayedHole[];


    constructor(id: string, playerId: string, courseId: string, playDate: string, playedHoles: PlayedHole[]) {
        this.id = id;
        this.playerId = playerId;
        this.courseId = courseId;
        this.playDate = playDate;
        this.playedHoles = playedHoles;
    }
}

export class PlayedHole{
    num: number;
    score: number;
    putts: number;
    fairway: string;


    constructor(num: number, score: number, putts: number, fairway: string) {
        this.num = num;
        this.score = score;
        this.putts = putts;
        this.fairway = fairway;
    }
}
import {IRoundRepo} from "../../repositories/round.repository";
import {Round} from "../../models/Round.model";


export class RoundService {
    private roundRepo: IRoundRepo;

    constructor(roundRepo: IRoundRepo) {
        this.roundRepo = roundRepo;
    }

    newRound = async(userId:string,courseId: string):Promise<any> => {

        /*
        //Check by ID
        const player: Player = await this.playerRepo.getByEmail(email);
        if (!player) throw Error("Email doesn't exists!");
        */

        return this.roundRepo.newRound(userId, courseId,new Date(Date.now()));
    }

    addHole = async(playerId: string,courseId: string, num: number, score: number, putts: number, fairway: string):Promise<any> => {

        return this.roundRepo.addHole(playerId, courseId, num,score,putts,fairway);
    }

    getRoundsByPlayer = async(id: string): Promise<any[]> => {
        const rounds = await this.roundRepo.getRoundsByPlayer(id);
        const allRoundsByPlayer: Round[] = [];
        rounds.map(r => {
            allRoundsByPlayer.push(new Round(r._id,r.userId, r.courseId, r.playedAt, r.playedHoles))
        })
        return allRoundsByPlayer;
    }

    getRoundsByCourse = async(id: string): Promise<any[]> => {
        const rounds = await this.roundRepo.getRoundsByCourse(id);
        const allRoundsByCourse: Round[] = [];
        rounds.map((r: any) => {
            allRoundsByCourse.push(new Round(r._id,r.userId, r.courseId, r.playedAt, r.playedHoles))
        })
        return allRoundsByCourse;
    }
}
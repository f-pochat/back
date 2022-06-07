import {IRoundRepo} from "../../repositories/round.repository";
import {Round} from "../../models/Round.model";


export class RoundService {
    private roundRepo: IRoundRepo;

    constructor(roundRepo: IRoundRepo) {
        this.roundRepo = roundRepo;
    }

    saveRound = async(courseId:string,userId: string, playedHoles: any[]):Promise<any> => {

        /*
        //Check by ID
        const player: Player = await this.playerRepo.getByEmail(email);
        if (!player) throw Error("Email doesn't exists!");
        */

        return this.roundRepo.saveRound(courseId,userId,new Date(Date.now()),playedHoles);
    }

    getRoundsByPlayer = async(id: string): Promise<any[]> => {
        const rounds = await this.roundRepo.getRoundsByPlayer(id);
        const allRoundsByPlayer: Round[] = [];
        rounds.map(r => {
            allRoundsByPlayer.push(new Round(r._id,r.userId, r.courseId, r.playedAt, r.playedHoles))
        })
        return allRoundsByPlayer;
    }
}
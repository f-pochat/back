import {IRoundRepo} from "../../repositories/round.repository";
import {Round} from "../../models/Round.model";
import {strict} from "assert";


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

    saveRound = async(playerId: string): Promise<any> => {
        return this.roundRepo.saveRound(playerId);
    }

    deleteRound = async(playerId: string): Promise<any> => {
        return this.roundRepo.deleteRound(playerId);
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

    getOngoingRound = async (id: string): Promise<any> => {
        const round = await this.roundRepo.getOngoingRound(id);
        return new Round(round._id, round.userId, round.courseId, round.playedAt, round.playedHoles);
    }

    getRoundById = async (id: string) : Promise<any> => {
        const round = await this.roundRepo.getRoundById(id);
        return new Round(round._id, round.userId, round.courseId, round.playedAt, round.playedHoles);
    }
}
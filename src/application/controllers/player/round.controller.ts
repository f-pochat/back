import {RoundService} from "../../../domain/services/player/round.service";


export class RoundController{
    private _roundService: RoundService;

    constructor(roundService: RoundService) {
        this._roundService = roundService;
    }

    async newRound(userId: string,courseId: string): Promise<any>{
        return await this._roundService.newRound(userId,courseId);
    }

    async addHole(playerId: string, courseId: string, num: number, score: number, putts: number, fairway: string): Promise<any>{
        return await this._roundService.addHole(playerId,courseId, num,score,putts,fairway);
    }

    async getRoundsByPlayer(id: string): Promise<any[]>{
        return await this._roundService.getRoundsByPlayer(id);
    }

    async getRoundsByCourse(id: string): Promise<any[]>{
        return await this._roundService.getRoundsByCourse(id);
    }

    async saveRound(playerId: string): Promise<any>{
        return this._roundService.saveRound(playerId);
    }

    async deleteRound(playerId: string): Promise<any>{
        return this._roundService.deleteRound(playerId);
    }

    async getOngoingRound(id: string) : Promise<any>{
        return await this._roundService.getOngoingRound(id);
    }
}
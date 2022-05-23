import {IRoundRepo} from "../../domain/repositories/round.repository";
const Round = require('../../domain/modelsDB/round/round.modeldb');

export class RoundDAO implements IRoundRepo{
    async saveRound(courseId: string, userId: string, playedAt: Date, playedHoles: any[]): Promise<any> {
        const round = new Round({courseId: courseId,userId: userId,playedAt: playedAt,playedHoles: playedHoles});
        await round.save();
    }
}
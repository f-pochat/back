import {IRoundRepo} from "../../domain/repositories/round.repository";
const Round = require('../../domain/modelsDB/round/round.modeldb');
import { MongoClient } from "mongodb";
import {emitKeypressEvents} from "readline";
const ck = require('ckey');

export class RoundDAO implements IRoundRepo{
    async saveRound(courseId: string, userId: string, playedAt: Date, playedHoles: any[]): Promise<any> {
        const round = new Round({courseId: courseId,userId: userId,playedAt: playedAt,playedHoles: playedHoles});
        await round.save();
    }

    async getRoundsByPlayer(id: string) : Promise<any[]> {
        const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`
        return new Promise((res, rej) => {
            MongoClient.connect(url, async(err, db) => {
                if (err) throw err;

                await db?.db().collection('rounds').find({userId: id}).toArray((err, result) => {
                    if (err) throw err;
                    // @ts-ignore
                    return res(result);
                });
                db?.close();
            });
        })
    }
}
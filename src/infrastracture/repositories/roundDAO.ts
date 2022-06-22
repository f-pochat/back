import {IRoundRepo} from "../../domain/repositories/round.repository";
const Round = require('../../domain/modelsDB/round/round.modeldb');
import { MongoClient } from "mongodb";
import {emitKeypressEvents} from "readline";
import {PlayedHole} from "../../domain/models/Round.model";
import {getRepository} from "typeorm";
import {CourseDB} from "../../domain/modelsDB/course/course.modeldb";
const ck = require('ckey');

export class RoundDAO implements IRoundRepo{
    repo = getRepository(CourseDB, "db");
    async newRound(userId: string, courseId: string, playedAt: Date): Promise<any> {
        const round = new Round({userId: userId,courseId: courseId,playedAt: playedAt,playedHoles: []});
        await round.save();
    }

    async addHole(playerId: string,courseId:string, num: number, score: number, putts: number, fairway: string): Promise<any> {

        const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`
        const numOfHoles: number = await this.repo.count({where: {id: courseId}});
        const db = await MongoClient.connect(url);

        let round: any = await (db?.db().collection('rounds').findOne({userId: playerId, onGoing: true}));
        if (round === null) throw new Error('Round not found!');
        let holes: any[] = round.playedHoles;

        let index = -1;
        holes.forEach((h,i) => {
            if (h.num === num) index = i;
        })

        if (index === -1){
            await db?.db().collection('rounds').updateOne({userId: playerId, onGoing: true}, {$push: {playedHoles: new PlayedHole(num, score, putts, fairway)}});
        }else{
            await db?.db().collection('rounds').updateOne({userId: playerId, onGoing: true, "playedHoles.num": num}, {$set: {'playedHoles.$.score':score}})
            await db?.db().collection('rounds').updateOne({userId: playerId, onGoing: true, "playedHoles.num": num}, {$set: {'playedHoles.$.putts':putts}})
            await db?.db().collection('rounds').updateOne({userId: playerId, onGoing: true, "playedHoles.num": num}, {$set: {'playedHoles.$.fairway':fairway}})
        }

        //await db?.db().collection('rounds').findOne({userId: playerId, onGoing: true})
        //await db?.db().collection('rounds').updateOne({userId: playerId, onGoing: true}, {$push: {playedHoles: new PlayedHole(num, score, putts, fairway)}});

        await db?.close();
    }

    async saveRound(playerId: string): Promise<any>{
        const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`
        const db = await MongoClient.connect(url);
        await db?.db().collection('rounds').updateOne({userId: playerId, onGoing: true}, {$set: {onGoing: false}});
    }

    async deleteRound(playerId: string): Promise<any>{
        const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`
        const db = await MongoClient.connect(url);
        await db?.db().collection('rounds').deleteOne({userId: playerId, onGoing: true});
    }

    //Get rounds by the id of the player
    async getRoundsByPlayer(id: string) : Promise<any[]> {
        const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`
        return new Promise((res, rej) => {
            MongoClient.connect(url, async(err, db) => {
                if (err) throw err;

                await db?.db().collection('rounds').find({userId: id, onGoing: false}).toArray((err, result) => {
                    if (err) throw err;
                    // @ts-ignore
                    return res(result);
                });
                db?.close();
            });
        })
    }

    async getRoundsByCourse(id: string) : Promise<any[]> {
        const url = `mongodb+srv://golftrackmdb:${ck.MONGODB_PASSWORD}@cluster0.v6ntn.mongodb.net/?retryWrites=true&w=majority`
        return new Promise((res, rej) => {
            MongoClient.connect(url, async(err, db) => {
                if (err) throw err;

                await db?.db().collection('rounds').find({courseId: id, onGoing: false}).toArray((err, result) => {
                    if (err) throw err;
                    // @ts-ignore
                    return res(result);
                });
                db?.close();
            });
        })
    }
}
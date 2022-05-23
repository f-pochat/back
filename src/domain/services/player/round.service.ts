import {IRoundRepo} from "../../repositories/round.repository";


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
}
export interface IRoundRepo {
    newRound(userId: string, courseId: string, playedAt: Date): Promise<any>;
    addHole(playerId: string,courseId : string, num: number, score: number, putts: number, fairway: string): Promise<any>;
    getRoundsByPlayer(id: string) : Promise<any[]>;
    getRoundsByCourse(id: string) : Promise<any[]>;
    saveRound(playerId: string): Promise<any>;
    deleteRound(playerId: string): Promise<any>;
}
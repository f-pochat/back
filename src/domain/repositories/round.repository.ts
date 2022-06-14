export interface IRoundRepo {
    saveRound(userId: string, courseId: string, playedAt: Date, playedHoles: any[]): Promise<any>;
    getRoundsByPlayer(id: string) : Promise<any[]>;
}
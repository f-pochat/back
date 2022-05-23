export interface IRoundRepo {
    saveRound(courseId: string, userId: string, playedAt: Date, playedHoles: any[]): Promise<any>;
}
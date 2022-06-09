import {Review} from "../../../../domain/models/review.model";
import {ReviewControllerProvider} from "../../../providers/player/reviewController.provider";
import {verifyTokenPlayer} from "../verifyTokenPlayer";

export const addReview = async ({input}: any, req: Request): Promise<void> => {
    const {ratingNumber, ratingText, courseId, userId}: { ratingNumber: number, ratingText: string, courseId: string, userId: string } = input;
    // @ts-ignore
    const token: string = <string>req.headers['authorization'];
    const username: string = verifyTokenPlayer(token.substring(7));
    await ReviewControllerProvider.getController().addReview(ratingNumber,ratingText, courseId, userId);
}
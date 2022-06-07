import {Review} from "../../../../domain/models/review.model";
import {ReviewControllerProvider} from "../../../providers/player/reviewController.provider";

export const getReviewsByCourse = async ({id}: any, req: Request): Promise<Review[]> => {
    // @ts-ignore
    //const token: string = <string>req.headers['authorization'];
    //const username: string = verifyAdmin(token.substring(7));
    return await ReviewControllerProvider.getController().getReviewsByCourse(id);
}
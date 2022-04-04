import {ICourseRepo} from "../../repositories/course/course.repository";
import {IHoleRepo} from "../../repositories/course/hole.repository";
import {ITeeboxRepo} from "../../repositories/course/teebox.repository";
import {Hole} from "../../models/course/hole.model";

export class DeleteCourseService{
    private courseRepo: ICourseRepo;
    private holeRepo: IHoleRepo;
    private teeboxRepo: ITeeboxRepo;


    constructor(courseRepo: ICourseRepo, holeRepo: IHoleRepo, teeboxRepo: ITeeboxRepo) {
        this.courseRepo = courseRepo;
        this.holeRepo = holeRepo;
        this.teeboxRepo = teeboxRepo
    }

    deleteCourse = async (id: string) : Promise<void> => {
        this.courseRepo.deleteCourse(id);
    }

    deleteHoles = async (id: string) : Promise<void> => {
        this.holeRepo.deleteHoles(id);
    }

    deleteTeeboxes = async(holes: string[]) : Promise<void> => {
        this.teeboxRepo.deleteTeeboxes(holes);
    }
}
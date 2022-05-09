import {ICourseRepo} from "../../repositories/course/course.repository";
import {IHoleRepo} from "../../repositories/course/hole.repository";

export class DeleteCourseService{
    private courseRepo: ICourseRepo;
    private holeRepo: IHoleRepo;


    constructor(courseRepo: ICourseRepo, holeRepo: IHoleRepo) {
        this.courseRepo = courseRepo;
        this.holeRepo = holeRepo;
    }

    deleteCourse = async (id: string) : Promise<void> => {
        this.courseRepo.deleteCourse(id);
    }

    deleteHoles = async (id: string) : Promise<void> => {
        this.holeRepo.deleteHoles(id);
    }
}
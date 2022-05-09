import {ICourseRepo} from "../../repositories/course/course.repository";
import {IIdRepo} from "../../repositories/id.repository";
import {IHoleRepo} from "../../repositories/course/hole.repository";
import {Hole} from "../../models/course/hole.model";
import {Course} from "../../models/course/course.model";
import {CourseDB} from "../../modelsDB/course/course.modeldb";
import {HoleDB} from "../../modelsDB/course/hole.modeldb";
import {Loc} from "../../models/course/location.model";

export class EditCourseService{
    private courseRepo: ICourseRepo;
    private holeRepo: IHoleRepo;
    private idRepo: IIdRepo;


    constructor(courseRepo: ICourseRepo, idRepo: IIdRepo, holeRepo: IHoleRepo) {
        this.courseRepo = courseRepo;
        this.holeRepo = holeRepo;
        this.idRepo = idRepo;
    }

    editCourse = async (id:string, name: string,creator: string,description: string,location: Loc,holes: Hole[]):Promise<Course> => {
        if (name.length < 1) throw Error("Name not valid!");
        if (description.length < 1) throw Error("Description not valid!");
        // @ts-ignore
        //if (holes.length !== 9 || holes.length !== 18) throw Error("Num of holes not valid!")

        holes.map(hole => {
            this.holeRepo.editHole(hole.id, new HoleDB(hole.id,hole.num,hole.par,hole.scoringIndex,hole.locationTeebox.lat,hole.locationTeebox.long,hole.locationMiddleOfGreen.lat,hole.locationMiddleOfGreen.long,id));
        })

        return this.courseRepo.editCourse(id, new CourseDB(id,name,creator,description,location.lat,location.long));
    }
}
import {ICourseRepo} from "../../repositories/course/course.repository";
import {IIdRepo} from "../../repositories/id.repository";
import {IHoleRepo} from "../../repositories/course/hole.repository";
import {ITeeboxRepo} from "../../repositories/course/teebox.repository";
import {Hole} from "../../models/course/hole.model";
import {Course} from "../../models/course/course.model";
import {CourseDB} from "../../modelsDB/course/course.modeldb";
import {HoleDB} from "../../modelsDB/course/hole.modeldb";
import {TeeboxDB} from "../../modelsDB/course/teebox.modeldb";
import {Loc} from "../../models/course/location.model";

export class EditCourseService{
    private courseRepo: ICourseRepo;
    private holeRepo: IHoleRepo;
    private teeboxRepo: ITeeboxRepo;
    private idRepo: IIdRepo;


    constructor(courseRepo: ICourseRepo, idRepo: IIdRepo, holeRepo: IHoleRepo, teeboxRepo: ITeeboxRepo) {
        this.courseRepo = courseRepo;
        this.holeRepo = holeRepo;
        this.teeboxRepo = teeboxRepo
        this.idRepo = idRepo;
    }

    editCourse = async (id:string, name: string,creator: string,description: string,location: Loc,holes: Hole[]):Promise<Course> => {
        if (name.length < 1) throw Error("Name not valid!");
        if (description.length < 1) throw Error("Description not valid!");
        // @ts-ignore
        //if (holes.length !== 9 || holes.length !== 18) throw Error("Num of holes not valid!")

        holes.map(hole => {
            this.holeRepo.editHole(hole.id, new HoleDB(hole.id,hole.num,hole.locationMiddleOfFW.lat,hole.locationMiddleOfFW.long,hole.locationMiddleOfGreen.lat,hole.locationMiddleOfGreen.long,id));
            hole.teeboxes.map(t => {
                this.teeboxRepo.editTeebox(t.id, new TeeboxDB(t.id,t.name,t.color,t.locationTeeBox.lat,t.locationTeeBox.long,t.par,t.scoringIndex,hole.id))
            })
        })

        return this.courseRepo.editCourse(id, new CourseDB(id,name,creator,description,location.lat,location.long));
    }
}
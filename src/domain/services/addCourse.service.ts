import {ICourseRepo} from "../repositories/course/course.repository";
import {IIdRepo} from "../repositories/id.repository";
import {IHoleRepo} from "../repositories/course/hole.repository";
import {ITeeboxRepo} from "../repositories/course/teebox.repository";
import {Hole} from "../models/course/hole.model";
import {Course} from "../models/course/course.model";
import {CourseDB} from "../modelsDB/course/course.modeldb";
import {HoleDB} from "../modelsDB/course/hole.modeldb";
import {TeeboxDB} from "../modelsDB/course/teebox.model";
import {Loc} from "../models/course/location.model";

export class AddCourseService{
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

    addCourse = async (name: string,creator: string,description: string,location: Loc,holes: Hole[]):Promise<Course> => {
        if (name.length < 1) throw Error("Name not valid!");
        if (description.length < 1) throw Error("Description nor valid!");
        // @ts-ignore
        //if (holesList.length !== 9 || holesList.length !== 18) throw Error("Num of holes not valid!")
        const courseId = this.idRepo.generateId();
        holes.map(hole => {
            const holeId: string = this.idRepo.generateId();
            this.holeRepo.addHole(new HoleDB(holeId,hole.num,hole.locationMiddleOfFW.lat,hole.locationMiddleOfFW.long,hole.locationMiddleOfGreen.lat,hole.locationMiddleOfGreen.long,courseId));
            hole.teeboxes.map(t => {
                this.teeboxRepo.addTeebox(new TeeboxDB(this.idRepo.generateId(),t.name,t.color,t.locationTeeBox.lat,t.locationTeeBox.long,t.par,t.scoringIndex,holeId))
            })
        })

        return this.courseRepo.addCourse(new CourseDB(courseId,name,creator,description,location.lat,location.long));
    }
}
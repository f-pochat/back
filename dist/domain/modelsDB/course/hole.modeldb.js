"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoleDB = void 0;
const typeorm_1 = require("typeorm");
let HoleDB = class HoleDB {
    constructor(id, num, locationMidFWLat, locationMidFWLong, locationGreenLat, locationGreenLong, course) {
        this.id = id;
        this.isActive = true;
        this.num = num;
        this.locationMidFWLat = locationMidFWLat;
        this.locationMidFWLong = locationMidFWLong;
        this.locationGreenLat = locationGreenLat;
        this.locationGreenLong = locationGreenLong;
        this.course = course;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], HoleDB.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], HoleDB.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HoleDB.prototype, "num", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HoleDB.prototype, "locationMidFWLat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HoleDB.prototype, "locationMidFWLong", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HoleDB.prototype, "locationGreenLat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HoleDB.prototype, "locationGreenLong", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HoleDB.prototype, "course", void 0);
HoleDB = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Number, String, String, String, String, String])
], HoleDB);
exports.HoleDB = HoleDB;

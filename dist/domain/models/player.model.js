"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(id, email, fullname, password, handicap, photo) {
        this.id = id;
        this.email = email;
        this.fullname = fullname;
        this.password = password;
        this.handicap = handicap;
        this.photo = photo;
    }
}
exports.Player = Player;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABMPlayerService = void 0;
const player_modeldb_1 = require("../../modelsDB/player.modeldb");
class ABMPlayerService {
    constructor(idRepo, playerRepo, passwordHasher) {
        this.register = (email, fullname, password) => __awaiter(this, void 0, void 0, function* () {
            const duplicatePlayerEmail = yield this.playerRepo.getByEmail(email);
            if (duplicatePlayerEmail)
                throw Error("Email already exists!");
            const hashedPassword = this.passwordHasher.hash(password);
            const newPlayer = new player_modeldb_1.PlayerDB(this.idRepo.generateId(), email, true, fullname, hashedPassword, "0", "");
            this.playerRepo.addPlayer(newPlayer);
            // @ts-ignore
            return newPlayer;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            yield this.playerRepo.deletePlayer(id);
        });
        this.edit = (id, player) => __awaiter(this, void 0, void 0, function* () {
            const duplicatePlayerEmail = yield this.playerRepo.getByEmail(player.email);
            const hashedPassword = this.passwordHasher.hash(player.password);
            if (duplicatePlayerEmail.password === hashedPassword || duplicatePlayerEmail.password === player.password) {
                this.playerRepo.editPlayer(id, new player_modeldb_1.PlayerDB(id, player.email, true, player.fullname, duplicatePlayerEmail.password, player.handicap.toString(), player.photo));
            }
            else {
                this.playerRepo.editPlayer(id, new player_modeldb_1.PlayerDB(id, player.email, true, player.fullname, hashedPassword, player.handicap.toString(), player.photo));
            }
        });
        this.getPlayer = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.playerRepo.getPlayer(id);
        });
        this.idRepo = idRepo;
        this.playerRepo = playerRepo;
        this.passwordHasher = passwordHasher;
    }
}
exports.ABMPlayerService = ABMPlayerService;

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
exports.LoginPlayerService = void 0;
class LoginPlayerService {
    constructor(playerRepo, passwordHasher, tokenProvider) {
        this.login = (email, password) => __awaiter(this, void 0, void 0, function* () {
            const player = yield this.playerRepo.getByEmail(email);
            if (!player)
                throw Error("Email doesn't exists!");
            if (!this.passwordHasher.compare(player.password, password))
                throw Error("Password incorrect!");
            // @ts-ignore
            return {
                token: this.tokenProv.loginPlayer(email, player.id),
                id: player.id,
            };
        });
        this.playerRepo = playerRepo;
        this.passwordHasher = passwordHasher;
        this.tokenProv = tokenProvider;
    }
}
exports.LoginPlayerService = LoginPlayerService;

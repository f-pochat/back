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
exports.addPlayer = void 0;
const addPlayerController_provider_1 = require("../../providers/player/addPlayerController.provider");
const addPlayer = ({ input }, req) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, username, password } = input;
    // @ts-ignore
    const token = req.headers['authorization'];
    //const username: string = verifyAdmin(token.substring(7));
    return yield addPlayerController_provider_1.AddPlayerControllerProvider.getController().addPlayer(email, username, password);
});
exports.addPlayer = addPlayer;

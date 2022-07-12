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
exports.deleteRound = exports.saveRound = exports.addHole = exports.newRound = void 0;
const roundController_provider_1 = require("../../../providers/player/roundController.provider");
const verifyTokenPlayer_1 = require("../verifyTokenPlayer");
const newRound = ({ input }, req) => __awaiter(void 0, void 0, void 0, function* () {
    const { playerId, courseId } = input;
    // @ts-ignore
    const token = req.headers['authorization'];
    const username = (0, verifyTokenPlayer_1.verifyTokenPlayer)(token.substring(7));
    return yield roundController_provider_1.RoundControllerProvider.getController().newRound(playerId, courseId);
});
exports.newRound = newRound;
const addHole = ({ input }, req) => __awaiter(void 0, void 0, void 0, function* () {
    const { playerId, courseId, num, score, putts, fairway } = input;
    // @ts-ignore
    const token = req.headers['authorization'];
    const username = (0, verifyTokenPlayer_1.verifyTokenPlayer)(token.substring(7));
    return yield roundController_provider_1.RoundControllerProvider.getController().addHole(playerId, courseId, num, score, putts, fairway);
});
exports.addHole = addHole;
const saveRound = ({ playerId }, req) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const token = req.headers['authorization'];
    const username = (0, verifyTokenPlayer_1.verifyTokenPlayer)(token.substring(7));
    return yield roundController_provider_1.RoundControllerProvider.getController().saveRound(playerId);
});
exports.saveRound = saveRound;
const deleteRound = ({ playerId }, req) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const token = req.headers['authorization'];
    const username = (0, verifyTokenPlayer_1.verifyTokenPlayer)(token.substring(7));
    return yield roundController_provider_1.RoundControllerProvider.getController().deleteRound(playerId);
});
exports.deleteRound = deleteRound;

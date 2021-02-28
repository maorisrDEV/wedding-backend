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
exports.GuestsController = void 0;
const persist_repository_1 = require("../repository/persist.repository");
class GuestsController {
    static getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = (req === null || req === void 0 ? void 0 : req.body) || { id: '0527505776' };
            const response = yield persist_repository_1.PersistRepository.getItem(id);
            res.json(response);
        });
    }
}
exports.GuestsController = GuestsController;
//# sourceMappingURL=guests.controller.js.map
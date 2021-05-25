"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Player = void 0;
const constants_1 = require("../constants");
class Player {
    constructor(data) {
        this.data = data;
        this._storeData(data);
    }
    _storeData(data) {
        this.id = data.id;
        this.userID = data.id;
        this.name = data.id;
        this.logo = data.logo;
        this.logoURL = `${constants_1.endpoints.baseURL}${this.logo}`;
        this.country = data.country;
        this.nationality = data.nationality;
        this.roleID = data.roleID;
        this.role = data.role;
        return this;
    }
}
exports.Player = Player;
exports.default = Player;
//# sourceMappingURL=Player.js.map
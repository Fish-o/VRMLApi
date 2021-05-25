"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.PlayerTeam = void 0;
const Player_1 = require("./Player");
class PlayerTeam {
    constructor(data) {
        this.data = data;
        this._storeData(data);
    }
    _storeData(data) {
        this.game = data.game;
        this.id = data.id;
        this.name = data.name;
        this.region = data.region;
        this.regionID = data.regionID;
        this.logoURL = data.logo;
        this.retired = data.retired;
    }
    get players() {
        return (this._players ||
            (this._players = this.data.players.map((player) => new Player_1.default(player))));
    }
}
exports.PlayerTeam = PlayerTeam;
exports.default = PlayerTeam;
//# sourceMappingURL=PlayerTeam.js.map
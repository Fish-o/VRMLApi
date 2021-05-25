"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Team = void 0;
const axios_1 = require("axios");
const constants_1 = require("../constants");
class Team {
    constructor(data) {
        this.data = data;
        this._storeData(data);
    }
    async _fetchData() {
        const res = await axios_1.default.get(constants_1.endpoints.APIUrl + constants_1.endpoints.GetTeamStats);
        const data = res.data;
        return this._storeData(data);
    }
    _storeData(data) {
        this.id = data.id;
        this.name = data.name;
        this.logo = data.logo;
        this.logoURL = constants_1.endpoints.baseURL + data.logo;
        this.division = data.division;
        this.divisionLogo = data.divisionLogo;
        this.divisionLogoURL = constants_1.endpoints.baseURL + data.divisionLogo;
        this.region = data.region;
        this.regionID = data.regionID;
        this.rankWorldwide = data.rankWorldwide;
        this.rank = data.rank;
        this.gamesPlayed = data.gp;
        this.wins = data.w;
        this.ties = data.t;
        this.losses = data.l;
        this.points = data.pts;
        this.mmr = Number.parseInt(data.mmr);
        this.isRecruiting = data.isRecruiting;
        this.currentUserChallengeID = data.currentUserChallengeID;
        this.currentUserCanLeagueSub = data.currentUserCanLeagueSub;
        return this;
    }
}
exports.Team = Team;
exports.default = Team;
//# sourceMappingURL=Team.js.map
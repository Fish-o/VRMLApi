"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisions = exports.TeamRegionIDs = exports.TeamRegions = exports.PlayerRoleIDs = exports.PlayerRoles = exports.endpoints = void 0;
var endpoints;
(function (endpoints) {
    endpoints["baseURL"] = "https://vrmasterleague.com";
    endpoints["API"] = "/Services.asmx";
    endpoints["APIUrl"] = "https://vrmasterleague.com/Services.asmx";
    endpoints["GetTeamPlayersStats"] = "/GetTeamPlayersStats";
    endpoints["GetTeamLogo"] = "/GetTeamLogo";
    endpoints["GetTeamStats"] = "/GetTeamStats";
    endpoints["GetMatchesThisWeek"] = "/GetMatchesThisWeek";
    endpoints["GetVODs"] = "/GetVODs";
    endpoints["GetStreams"] = "/GetStreams";
})(endpoints = exports.endpoints || (exports.endpoints = {}));
exports.PlayerRoles = {
    "Team Owner": "M40DmiDmyky3AVn8ypAC1g2",
    Player: "41YGBa7jCcqAQ_F30vYLrQ2",
    Starter: "atlu3v0xXhAtFNH5ajRQig2",
};
var PlayerRoleIDs;
(function (PlayerRoleIDs) {
    PlayerRoleIDs["TeamOwner"] = "M40DmiDmyky3AVn8ypAC1g2";
    PlayerRoleIDs["Player"] = "41YGBa7jCcqAQ_F30vYLrQ2";
    PlayerRoleIDs["Starter"] = "atlu3v0xXhAtFNH5ajRQig2";
})(PlayerRoleIDs = exports.PlayerRoleIDs || (exports.PlayerRoleIDs = {}));
exports.TeamRegions = {
    "America East": "BEllLIXSWM8ZfE4uuRbmCQ2",
    Europe: "QPh6P1Fx-vILEVHkCsDkJQ2",
    "Oceania/Asia": "80VvwPbG7n59j4yzGV2S-g2",
    "America West": "cgq81KqhuZCnkrMnkt_vTw2",
};
var TeamRegionIDs;
(function (TeamRegionIDs) {
    TeamRegionIDs["AmericaEast"] = "BEllLIXSWM8ZfE4uuRbmCQ2";
    TeamRegionIDs["Europe"] = "QPh6P1Fx-vILEVHkCsDkJQ2";
    TeamRegionIDs["OceaniaAsia"] = "80VvwPbG7n59j4yzGV2S-g2";
    TeamRegionIDs["AmericaWest"] = "cgq81KqhuZCnkrMnkt_vTw2";
})(TeamRegionIDs = exports.TeamRegionIDs || (exports.TeamRegionIDs = {}));
(function (TeamRegionIDs) {
})(TeamRegionIDs = exports.TeamRegionIDs || (exports.TeamRegionIDs = {}));
var Divisions;
(function (Divisions) {
    Divisions[Divisions["Diamond"] = 0] = "Diamond";
})(Divisions = exports.Divisions || (exports.Divisions = {}));
//# sourceMappingURL=constants.js.map
export enum endpoints {
  baseURL = `https://vrmasterleague.com`,
  API = `/Services.asmx`,
  APIUrl = `https://vrmasterleague.com/Services.asmx`,

  //

  GetTeamPlayersStats = `/GetTeamPlayersStats`,
  GetTeamLogo = `/GetTeamLogo`,
  GetTeamStats = `/GetTeamStats`,
  GetMatchesThisWeek = `/GetMatchesThisWeek`,
  GetVODs = `/GetVODs`,
  GetStreams = `/GetStreams`,
}

export const PlayerRoles = {
  "Team Owner": "M40DmiDmyky3AVn8ypAC1g2",
  Player: "41YGBa7jCcqAQ_F30vYLrQ2",
  Starter: "atlu3v0xXhAtFNH5ajRQig2",
};

export enum PlayerRoleIDs {
  TeamOwner = "M40DmiDmyky3AVn8ypAC1g2",
  Player = "41YGBa7jCcqAQ_F30vYLrQ2",
  Starter = "atlu3v0xXhAtFNH5ajRQig2",
}

export const TeamRegions = {
  "America East": "BEllLIXSWM8ZfE4uuRbmCQ2",
  Europe: "QPh6P1Fx-vILEVHkCsDkJQ2",
  "Oceania/Asia": "80VvwPbG7n59j4yzGV2S-g2",
  "America West": "cgq81KqhuZCnkrMnkt_vTw2",
};

export enum TeamRegionIDs {
  AmericaEast = "BEllLIXSWM8ZfE4uuRbmCQ2",
  Europe = "QPh6P1Fx-vILEVHkCsDkJQ2",
  OceaniaAsia = "80VvwPbG7n59j4yzGV2S-g2",
  AmericaWest = "cgq81KqhuZCnkrMnkt_vTw2",
}
export enum TeamRegionIDs {}

// TODO: divisions
export enum Divisions {
  "Diamond",
}

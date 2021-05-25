import { Divisions, TeamRegionIDs, TeamRegions } from "../constants";
declare class Team {
    data: apiTeam;
    id: string;
    name: string;
    region: string;
    regionID: string;
    logo: string;
    logoURL: string;
    rankWorldwide: number;
    rank: number;
    division: Divisions;
    divisionLogo: string;
    divisionLogoURL: string;
    gamesPlayed: number;
    wins: number;
    ties: number;
    losses: number;
    points: number;
    mmr: number;
    isRecruiting: boolean;
    currentUserChallengeID: null | any;
    currentUserCanLeagueSub: boolean;
    constructor(data: apiTeam);
    private _fetchData;
    private _storeData;
}
export interface apiTeam {
    rankWorldwide: number;
    rank: number;
    division: Divisions;
    divisionLogo: string;
    gp: number;
    w: number;
    t: number;
    l: number;
    pts: number;
    mmr: string;
    isRecruiting: boolean;
    currentUserChallengeID: null | any;
    currentUserCanLeagueSub: boolean;
    id: string;
    name: string;
    logo: string;
    region: keyof typeof TeamRegions;
    regionID: TeamRegionIDs;
}
export { Team };
export { Team as default };

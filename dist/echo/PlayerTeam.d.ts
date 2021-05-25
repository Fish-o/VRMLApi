import { TeamRegionIDs, TeamRegions } from "../constants";
import Player, { apiPlayer } from "./Player";
declare class PlayerTeam {
    data: apiPlayerTeam;
    game: "Echo Arena";
    id: string;
    name: string;
    region: string;
    regionID: string;
    logoURL: string;
    active: boolean;
    retired: boolean;
    private _players?;
    constructor(data: apiPlayerTeam);
    private _storeData;
    get players(): Player[];
}
export interface apiPlayerTeam {
    game: "Echo Arena";
    id: string;
    name: string;
    region: keyof typeof TeamRegions;
    regionID: TeamRegionIDs;
    logo: string;
    active: boolean;
    retired: boolean;
    players: apiPlayer[];
}
export { PlayerTeam };
export { PlayerTeam as default };

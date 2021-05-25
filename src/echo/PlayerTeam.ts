import { TeamRegionIDs, TeamRegions } from "../constants";
import Player, { apiPlayer } from "./Player";

class PlayerTeam {
  /**
   * The game
   * @returns "Echo Arena"
   */
  game!: "Echo Arena";
  /**
   * The team's VRML ID
   */
  id!: string;
  /**
   * The team's name
   */
  name!: string;
  /**
   * The region the team plays in
   * @example "America East"
   */
  region!: string;
  /**
   * The ID of the region the team plays in
   * @example "BEllLIXSWM8ZfE4uuRbmCQ2" // For "America East"
   */
  regionID!: string;
  /**
   * The full url of the logo of the team
   * @example "https://vrmasterleague.com/images/logos/teams/d4232333-231a-5b13-21f5-7c224f586214.png"
   */
  logoURL!: string;
  /**
   * If the team is active
   */
  active!: boolean;
  /**
   * If the team has retired
   */
  public retired!: boolean;
  private _players?: Player[];
  /**
   * Create the PlayerTeam
   * @param data The raw api PlayerTeam data
   */
  constructor(public data: apiPlayerTeam) {
    this._storeData(data);
  }
  /**
   * Store the api data to the PlayerTeam
   * @param data The raw api data from the api
   */
  private _storeData(data: apiPlayerTeam) {
    this.game = data.game;
    this.id = data.id;
    this.name = data.name;
    this.region = data.region;
    this.regionID = data.regionID;
    this.logoURL = data.logo;
    this.retired = data.retired;
  }
  /**
   * The players currently on the team
   */
  get players(): Player[] {
    return (
      this._players ||
      (this._players = this.data.players.map((player) => new Player(player)))
    );
  }
}

export interface apiPlayerTeam {
  game: "Echo Arena";
  id: string;
  name: string;
  region: keyof typeof TeamRegions;
  regionID: TeamRegionIDs;
  logo: string; //"https://vrmasterleague.com/images/logos/teams/d1708346-757a-4b52-93f6-6c530f152062.png";
  active: boolean;
  retired: boolean;
  players: apiPlayer[];
}

export { PlayerTeam };
export { PlayerTeam as default };

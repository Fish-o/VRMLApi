import axios from "axios";
import { Divisions, endpoints, TeamRegionIDs, TeamRegions } from "../constants";
import Player, { apiPlayer } from "./Player";
import { apiPlayerTeam } from "./PlayerTeam";

class Team {
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
   * The path to the logo of the team
   * @example "/images/logos/teams/d4232333-231a-5b13-21f5-7c224f586214.png"
   */
  logo!: string;
  /**
   * The full url of the logo of the team
   * @example "https://vrmasterleague.com/images/logos/teams/d4232333-231a-5b13-21f5-7c224f586214.png"
   */
  logoURL!: string;
  /**
   * A teams rank across all regions
   */
  rankWorldwide!: number;
  /**
   * A teams rank for the region they play in
   */
  rank!: number;
  /**
   * The division the team plays in
   */
  division!: Divisions;
  /**
   * The url of the division icon
   * @example "/images/div_diamond_40.png"
   */
  divisionLogo!: string; // "/images/div_diamond_40.png";
  /**
   * The full url of the division icon
   * @example "/images/div_diamond_40.png"
   */
  divisionLogoURL!: string; // "https://vrmasterleague.com/images/div_diamond_40.png";
  /**
   * The amount of games the team has played
   */
  gamesPlayed!: number;
  /**
   * The amount of games the team has won
   */
  wins!: number;
  /**
   * The amount of games the team that came out in a tie
   */
  ties!: number; // TODO: check spelling of that ^^
  /**
   * The amount of games the team has lost
   */
  losses!: number;
  /**
   * All the points the team scored across their matches
   */
  points!: number;
  /**
   * The teams mmr
   */
  mmr!: number; // FOR SOME REASON a string representation of a number
  /**
   * If the team is recruiting
   */
  isRecruiting!: boolean;
  /**
   * I have NO CLUE what this is please message me or something if u know anything about this
   */
  currentUserChallengeID: null | any; // TODO: what is this?
  /**
   * I have NO CLUE what this is please message me or something if u know anything about this
   */
  currentUserCanLeagueSub!: boolean; // TODO: what is this?
  /**
   * Create the Team
   * @param data The raw api PlayerTeam data
   */
  constructor(public data: apiTeam) {
    // TODO: make this take a name or id instead and then fetch the info
    this._storeData(data);
  }
  private async _fetchData(): Promise<Team> {
    const res = await axios.get(endpoints.APIUrl + endpoints.GetTeamStats);
    const data: apiTeam = res.data;
    return this._storeData(data);
  }

  /**
   * Store the api data to the PlayerTeam
   * @param data The raw api data from the api
   */
  private _storeData(data: apiTeam): Team {
    this.id = data.id;
    this.name = data.name;
    this.logo = data.logo;
    this.logoURL = endpoints.baseURL + data.logo;

    this.division = data.division;
    this.divisionLogo = data.divisionLogo;
    this.divisionLogoURL = endpoints.baseURL + data.divisionLogo;
    this.region = data.region;
    this.regionID = data.regionID;
    this.rankWorldwide = data.rankWorldwide;
    this.rank = data.rank;

    this.gamesPlayed = data.gp;
    this.wins = data.w;
    this.ties = data.t;
    this.losses = data.l;
    this.points = data.pts;
    this.mmr = Number.parseInt(data.mmr); // TODO: Could this possibly be something else then a number?

    this.isRecruiting = data.isRecruiting;
    this.currentUserChallengeID = data.currentUserChallengeID;
    this.currentUserCanLeagueSub = data.currentUserCanLeagueSub;

    return this;
  }
}

export interface apiTeam {
  rankWorldwide: number;
  rank: number;
  division: Divisions;
  divisionLogo: string; // "/images/div_diamond_40.png";
  gp: number;
  w: number;
  t: number;
  l: number;
  pts: number;
  mmr: string; // FOR SOME REASON a string representation of a number
  isRecruiting: boolean;
  currentUserChallengeID: null | any; // TODO: what is this?
  currentUserCanLeagueSub: boolean;
  id: string; // Is the same as the PlayerTeam ID
  name: string; // The teams name
  logo: string; // "/images/logos/teams/09093858-5626-404d-97a3-10b8353fcc47.png";
  region: keyof typeof TeamRegions;
  regionID: TeamRegionIDs;
}

export { Team };
export { Team as default };

import { PlayerRoles, PlayerRoleIDs, endpoints } from "../constants";

/**
 * An Echo Vrml Player
 */
class Player {
  /**
   * The players id
   */
  id!: string;
  /**
   * The user id
   */
  userID!: string;
  /**
   * The players vrml name
   */
  name!: string;
  /**
   * The url of a players profile picture
   * @example "/images/logos/users/d4232333-231a-5b13-21f5-7c224f586214.png"
   */
  logo!: string;
  /**
   * The full url of a players profile picture
   * @example "https://vrmasterleague.com/images/logos/users/d4232333-231a-5b13-21f5-7c224f586214.png"
   */
  logoURL!: string;
  /**
   * A country code for the country the player is playing from
   */
  country!: string;
  /**
   * A country code for the players nationality
   */
  nationality!: string;
  /**
   * The id of the role the player has in their team
   * @example "41YGBa7jCcqAQ_F30vYLrQ2"
   * // for Player
   */
  roleID!: PlayerRoleIDs;
  /**
   * The id of the role the player has in their team
   * @example "Player"
   *
   */
  role!: keyof typeof PlayerRoles;
  /**
   * Create a Player
   * @param data The raw api data from the api
   */
  constructor(public data: apiPlayer) {
    this._storeData(data);
  }

  /**
   * Store the api data to the player
   * @param data The raw api data from the api
   */
  private _storeData(data: apiPlayer) {
    this.id = data.id; // what the difference between id and userID?
    this.userID = data.id;
    this.name = data.id;
    this.logo = data.logo;
    this.logoURL = `${endpoints.baseURL}${this.logo}`;
    this.country = data.country;
    this.nationality = data.nationality;
    this.roleID = data.roleID;
    this.role = data.role;
    return this;
  }
}

export interface apiPlayer {
  id: string; // what the difference between id and userID?
  userID: string;
  name: string;
  logo: string;
  country: string | "";
  nationality: string | "";
  roleID: PlayerRoleIDs;
  role: keyof typeof PlayerRoles;
}
export { Player };
export { Player as default };

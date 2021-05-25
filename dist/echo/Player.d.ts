import { PlayerRoles, PlayerRoleIDs } from "../constants";
declare class Player {
    data: apiPlayer;
    id: string;
    userID: string;
    name: string;
    logo: string;
    logoURL: string;
    country: string;
    nationality: string;
    roleID: PlayerRoleIDs;
    role: keyof typeof PlayerRoles;
    constructor(data: apiPlayer);
    private _storeData;
}
export interface apiPlayer {
    id: string;
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

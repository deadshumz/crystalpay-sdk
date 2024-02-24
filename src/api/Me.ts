import { MeGetInfoRequest, MeGetInfoResponse } from "../@types/Me";
import CrystalUtils from "../utils/CrystalUtils";
import axios from "axios";

export default class Me {
    private auth_login: string;
    private auth_secret: string;
    private crystal_utils: CrystalUtils;

    constructor(auth_login: string, auth_secret: string, crystal_utils: CrystalUtils) {
        this.auth_login = auth_login;
        this.auth_secret = auth_secret;
        this.crystal_utils = crystal_utils;
    }

    public async getInfo(): Promise<MeGetInfoResponse> {
        const url = this.crystal_utils.buildUrl('me', 'info');
        const data: MeGetInfoRequest = {
            auth_login: this.auth_login,
            auth_secret: this.auth_secret
        }
        const info = await axios.post<MeGetInfoResponse>(url, data);
        return info.data;
    }
}

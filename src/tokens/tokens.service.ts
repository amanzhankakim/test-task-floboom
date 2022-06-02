import { Injectable } from '@nestjs/common';
import * as jwt from "jsonwebtoken";
@Injectable()
export class TokensService {
    private accessTokenSecret: string;
	private refreshTokenSecret: string;

    constructor(){
        this.accessTokenSecret = "FLOBOOM_ACCESS_TOKEN"
        this.refreshTokenSecret = "FLOBOOM_REFRESH_TOKEN"
    }

    async verifyAccessToken(accessToken) {
        let decoded: any;
		try {
			decoded = jwt.verify(accessToken, this.accessTokenSecret);
			return decoded;
		} catch (err) {
			console.log(err);
			throw new Error("INVALID_TOKEN")
		}

    }

}

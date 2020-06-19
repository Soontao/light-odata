import { PreProcessor, BoundedRequest } from './processor';
import { encode } from '../base64';

const S_AUTHORIZATION = 'Authorization';

export interface UserCredential {
  username: string;
  password?: string;
}

export class BaiscAuthProcessor implements PreProcessor {

  constructor(credential: UserCredential) {
    this._credential = credential;
  }

  private _credential: UserCredential;

  async pre(request: BoundedRequest): Promise<BoundedRequest> {
    const { username, password = '' } = this._credential;

    if (request.init == undefined) {
      request.init = {};
    }

    if (request.init.headers == undefined) {
      request.init.headers = {};
    }

    request.init.headers[S_AUTHORIZATION] = `Basic ${encode(`${username}:${password}`)}`;

    return request;
  }

}

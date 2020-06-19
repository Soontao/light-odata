import { PostProcessor, BoundedRequest, PreProcessor } from './processor';

const S_X_CSRF_TOKEN = 'x-csrf-token';
const S_REQUIRED = 'Required';
const S_FETCH = 'fetch';

export class InvalidCSRFTokenError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export class CSRFProcessor implements PreProcessor, PostProcessor {

  private __CSRFToken = '';

  async pre(request: BoundedRequest): Promise<BoundedRequest> {

    if (request.init == undefined) {
      request.init = {};
    }

    if (request.init.headers == undefined) {
      request.init.headers = {};
    }

    if (this.__CSRFToken) {
      request.init.headers[S_X_CSRF_TOKEN] = this.__CSRFToken;
    } else {
      request.init.headers[S_X_CSRF_TOKEN] = S_FETCH;
    }

    return request;
  }

  async post(request: BoundedRequest, response: Response): Promise<Response> {
    const csrfHeader = response.headers.get(S_X_CSRF_TOKEN);
    if (csrfHeader && csrfHeader != S_REQUIRED) {
      this.__CSRFToken = csrfHeader;
    }
    if (csrfHeader == S_REQUIRED) {
      throw new InvalidCSRFTokenError('Please do the READ operation firstly to get the CSRF token');
    }
    return response;
  }

}

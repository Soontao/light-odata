
export enum ProcessorType {
  PreProcessor,
  PostProcessor,
}

export interface PreProcessor {

  pre(request: BoundedRequest): Promise<BoundedRequest>;

}

/**
 * @private
 * @ignore
 * @internal
 */
export interface BoundedRequest {
  url: string;
  init?: RequestInit;
}

export interface PostProcessor {

  post(request: BoundedRequest, response: Response): Promise<Response>;

}



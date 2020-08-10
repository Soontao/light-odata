// @ts-nocheck
import { BatchRequest } from './batch';
import { ODataServerError } from './errors';
import { ODataFilter } from './filter';
import { ODataQueryParam } from './params';
import { OData } from './request';
import { DeepPartial, PlainODataResponse } from './types';

export class EntitySet<T = any> {

  private _collection: string;
  private _client: OData;
  private _batchEntitySet: BatchEntitySet<T>;

  constructor(collection: string, client: OData) {
    this._collection = collection;
    this._client = client;
    this._batchEntitySet = new BatchEntitySet(collection, client);
  }

  private _checkError(res: any): void {
    if (res.error) {
      switch (this._client.getVersion()) {
        case 'v2':
          throw new ODataServerError(res.error?.message?.value);
        case 'v4':
          throw new ODataServerError(res.error?.message);
        default:
          break;
      }
    }
  }

  private _getResult(res: PlainODataResponse) {
    switch (this._client.getVersion()) {
      case 'v2':
        // @ts-ignore
        return res.d?.results || res.d;
      case 'v4':
        // @ts-ignore
        return res?.value || res;
      default:
        break;
    }
  }

  async retrieve(id: any, params?: ODataQueryParam): Promise<T> {
    const res = await this._client.newRequest<T>({
      collection: this._collection,
      method: 'GET',
      id,
      params
    });
    this._checkError(res);
    return this._getResult(res);
  }


  /**
   * batch wrapper for entity set
   */
  batch() {
    return this._batchEntitySet;
  }

  async find(base: DeepPartial<T>): Promise<T[]> {
    const filter = OData.newFilter();

    Object.entries(base).forEach(([key, value]) => {
      if (typeof value == 'string') {
        filter.field(key).eqString(value);
      } else {
        filter.field(key).eq(value);
      }
    });

    return this.query(OData.newParam().filter(filter));
  }

  async query(param?: ODataFilter): Promise<T[]>;
  async query(param?: ODataQueryParam): Promise<T[]>;
  async query(param?: any): Promise<any> {
    if (param instanceof ODataFilter) {
      param = ODataQueryParam.newParam().filter(param);
    }
    if (param == undefined) {
      param = OData.newParam();
    }
    const res = await this._client.newRequest<T>({
      collection: this._collection,
      method: 'GET',
      params: param
    });
    this._checkError(res);
    return this._getResult(res);
  }

  async count(filter?: ODataFilter): Promise<number> {
    const params = OData.newParam().inlinecount(true).count(true); // set count flag
    if (filter) {
      params.filter(filter);
    }
    const res = await this._client.newRequest<T>({
      collection: this._collection,
      method: 'GET',
      params
    });
    this._checkError(res);
    switch (this._client.getVersion()) {
      case 'v2':
        return parseInt(res?.d?.__count);
      case 'v4':
        return res['@odata.count'];
      default:
        break;
    }
  }

  async create(body: DeepPartial<T>): Promise<T>;
  async create(body: any): Promise<T>;
  async create(body: DeepPartial<T>): Promise<T> {
    const res = await this._client.newRequest<T>({
      collection: this._collection,
      method: 'POST',
      entity: body
    });
    this._checkError(res);
    return this._getResult(res);

  }

  async update(id: any, body: DeepPartial<T>): Promise<T> {
    const res = await this._client.newRequest<T>({
      collection: this._collection,
      method: 'PATCH',
      id,
      entity: body
    });
    this._checkError(res);
    return this._getResult(res);
  }

  async delete(id: any): Promise<void> {
    const res = await this._client.newRequest<T>({
      collection: this._collection,
      method: 'DELETE',
      id
    });
    this._checkError(res);
  }

  /**
   * run bounded action
   *
   * @param actionName the action name, remember add namespace for it
   * @param payload
   */
  async action(actionName: string, id: any, payload?: any): any {
    const responseBody = await this._client.newRequest({
      collection: this._collection,
      method: 'POST',
      id,
      payload,
      actionName
    });
    this._checkError(responseBody);
    return responseBody;
  }

  /**
   * execute function
   *
   * @param functionName
   * @param id
   * @param payload
   */
  async function(functionName: string, id: any, payload?: any): any {
    const responseBody = await this._client.newRequest({
      collection: this._collection,
      method: 'GET',
      id,
      payload,
      functionName
    });
    this._checkError(responseBody);
    return responseBody;
  }

}

/**
 * Batch wrappper for entity set
 */
export class BatchEntitySet<T = any> {

  private _collection: string;
  private _client: OData;

  constructor(collection: string, client: OData) {
    this._collection = collection;
    this._client = client;
  }

  retrieve(id: any, params?: ODataQueryParam) {
    return this._client.newBatchRequest<T>({
      collection: this._collection,
      method: 'GET',
      id,
      params
    });
  }

  find(base: DeepPartial<T>) {
    const filter = OData.newFilter();

    Object.entries(base).forEach(([key, value]) => {
      if (typeof value == 'string') {
        filter.field(key).eqString(value);
      } else {
        filter.field(key).eq(value);
      }
    });

    return this.query(OData.newParam().filter(filter));
  }

  query(param?: ODataFilter): Promise<BatchRequest<T>>;
  query(param?: ODataQueryParam): Promise<BatchRequest<T>>;
  query(param?: any): any {
    if (param instanceof ODataFilter) {
      param = ODataQueryParam.newParam().filter(param);
    }
    if (param == undefined) {
      param = OData.newParam();
    }
    return this._client.newBatchRequest<T>({
      collection: this._collection,
      method: 'GET',
      params: param
    });
  }

  count(filter?: ODataFilter);
  count(filter?: Partial<T>);
  count(filter?: any) {

    const params = OData.newParam().top(1);

    // set count flag
    switch (this._client.getVersion()) {
      case 'v4':
        params.count(true);
        break;
      case 'v2':
        params.inlinecount(true);
        break;
      default:
        break;
    }

    if (filter) {

      if (filter instanceof ODataFilter) {
        params.filter(filter);
      } else {
        const tmpFilter = ODataFilter.newFilter();
        Object.entries(filter).forEach(([key, value]) => {
          if (typeof value == 'string') {
            tmpFilter.field(key).eqString(value);
          } else {
            tmpFilter.field(key).eq(value);
          }
        });
        params.filter(tmpFilter);
      }

    }

    return this._client.newBatchRequest<T>({
      collection: this._collection,
      method: 'GET',
      params
    });

  }

  create(body: DeepPartial<T>): Promise<BatchRequest<T>>;
  create(body: any): Promise<BatchRequest<T>>;
  create(body: any): any {
    return this._client.newBatchRequest<T>({
      collection: this._collection,
      method: 'POST',
      entity: body
    });
  }

  update(id: any, body: DeepPartial<T>) {
    return this._client.newBatchRequest<T>({
      collection: this._collection,
      method: 'PATCH',
      id,
      entity: body
    });
  }

  delete(id: any) {
    return this._client.newBatchRequest<T>({
      collection: this._collection,
      method: 'DELETE',
      id
    });
  }

}



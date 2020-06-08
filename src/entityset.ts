import { ODataQueryParam } from './params';
import { OData } from './request';
import { PlainODataResponse } from './types';
import { ODataFilter } from './filter';

export class EntitySet<T> {

  private _collection: string;
  private _client: OData;

  constructor(collection: string, client: OData) {
    this._collection = collection;
    this._client = client;
  }

  private _checkError(res: PlainODataResponse): void {
    if (res.error) {
      switch (this._client.getVersion()) {
        case 'v2':
          throw new Error(res.error.message.value);
        case 'v4':
          throw new Error(res.error.message);
        default:
          break;
      }
    }
  }

  async retrieve(id: any): Promise<T> {
    const res = await this._client.newRequest<T>({
      collection: this._collection,
      method: 'GET',
      id
    });
    this._checkError(res);
    switch (this._client.getVersion()) {
      case 'v2':
        // @ts-ignore
        return res.d.results || res.d;
      case 'v4':
        // @ts-ignore
        return res.value || res;
      default:
        break;
    }
  }

  async query(param: ODataQueryParam): Promise<T[]> {
    const res = await this._client.newRequest<T>({
      collection: this._collection,
      method: 'GET',
      params: param
    });
    this._checkError(res);
    switch (this._client.getVersion()) {
      case 'v2':
        // @ts-ignore
        return res.d.results || res.d;
      case 'v4':
        // @ts-ignore
        return res.value || res;
      default:
        break;
    }
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
        return parseInt(res.d.__count);
      case 'v4':
        return res['@odata.count'];
      default:
        break;
    }
  }

  async create(body: Partial<T>): Promise<T> {
    const res = await this._client.newRequest<T>({
      collection: this._collection,
      method: 'POST',
      entity: body
    });
    this._checkError(res);
    switch (this._client.getVersion()) {
      case 'v2':
        // @ts-ignore
        return res.d.results || res.d;
      case 'v4':
        // @ts-ignore
        return res.value || res;
      default:
        break;
    }
  }

  async update(id: any, body: Partial<T>): Promise<T> {
    const res = await this._client.newRequest<T>({
      collection: this._collection,
      method: 'PATCH',
      id,
      entity: body
    });
    this._checkError(res);
    switch (this._client.getVersion()) {
      case 'v2':
        // @ts-ignore
        return res.d.results || res.d;
      case 'v4':
        // @ts-ignore
        return res.value || res;
      default:
        break;
    }
  }

  async delete(id: any): Promise<void> {
    const res = await this._client.newRequest<T>({
      collection: this._collection,
      method: 'DELETE',
      id
    });
    this._checkError(res);
  }

}



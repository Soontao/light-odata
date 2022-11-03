// @ts-nocheck
import { ODataServerError } from "./errors";
import { ODataFilter } from "./filter";
import { systemOptions, SystemQueryOptions } from "./params";
import { OData } from "./odata";
import type { DeepPartial, ODataKeyPredicate, PlainODataResponse } from "./types";

/**
 * EntitySet
 */
export class EntitySet<T = any> {

  private _entitySet: string;

  private _client: OData;

  constructor(collection: string, client: OData) {
    this._entitySet = collection;
    this._client = client;
  }

  private _checkError(res: any): void {
    if (res.error) {
      switch (this._client.getVersion()) {
        case "v2":
          throw new ODataServerError(res.error?.message?.value);
        case "v4":
          throw new ODataServerError(res.error?.message);
        default:
          break;
      }
    }
  }

  private _getResultSingle(res: PlainODataResponse) {
    switch (this._client.getVersion()) {
      case "v2":
        // @ts-ignore
        return res.d;
      case "v4":
        // @ts-ignore
        return res;
      default:
        break;
    }
  }

  private _getResults(res: PlainODataResponse) {
    switch (this._client.getVersion()) {
      case "v2":
        // @ts-ignore
        return res.d?.results;
      case "v4":
        // @ts-ignore
        return res?.value;
      default:
        break;
    }
  }

  public newFilter(): ODataFilter<T> {
    return this._client.newFilter();
  }

  /**
   * @deprecated
   * @returns
   */
  public newParam(): SystemQueryOptions<T> {
    return this._client.newParam();
  }

  public newOptions() {
    return this._client.newOptions();
  }

  async retrieve(id: ODataKeyPredicate, systemOptions?: SystemQueryOptions): Promise<T> {
    const res = await this._client.newRequest<T>({
      collection: this._entitySet,
      method: "GET",
      id,
      params: systemOptions
    });
    this._checkError(res);
    return this._getResultSingle(res);
  }


  async find(base: DeepPartial<T>): Promise<T[]> {
    const filter = OData.newFilter();

    Object.entries(base).forEach(([key, value]) => {
      if (typeof value == "string") {
        filter.field(key).eqString(value);
      } else {
        filter.field(key).eq(value);
      }
    });

    return this.query(OData.newParam().filter(filter));
  }

  async query(filter: ODataFilter): Promise<T[]>;

  async query(systemOptions: SystemQueryOptions): Promise<T[]>;

  async query(): Promise<T[]>;

  async query(param: any): Promise<any> {
    if (param instanceof ODataFilter) {
      param = systemOptions().filter(param);
    }
    if (param == undefined) {
      param = OData.newParam();
    }
    const res = await this._client.newRequest<T>({
      collection: this._entitySet,
      method: "GET",
      params: param
    });
    this._checkError(res);
    return this._getResults(res);
  }

  async count(filter?: ODataFilter): Promise<number>;

  async count(filter?: Partial<T>): Promise<number>;

  async count(filter?: any) {

    const params = OData.newParam().top(1);

    // set count flag
    switch (this._client.getVersion()) {
      case "v4":
        params.count(true);
        break;
      case "v2":
        params.inlinecount(true);
        break;
    }

    if (typeof filter === "object") {

      if (filter instanceof ODataFilter) {
        params.filter(filter);
      } else {
        const newFilter = this.newFilter();
        for (const [key, value] of Object.entries(filter)) {
          newFilter.field(key).eq(value);
        }
        params.filter(newFilter);
      }

    }

    const res = await this._client.newRequest<T>({
      collection: this._entitySet,
      method: "GET",
      params
    });

    this._checkError(res);
    switch (this._client.getVersion()) {
      case "v2":
        return parseInt(res?.d?.__count);
      case "v4":
        return res["@odata.count"];
    }
  }

  async create(body: DeepPartial<T>): Promise<T>;

  async create(body: any): Promise<T>;

  async create(body: DeepPartial<T>): Promise<T> {
    const res = await this._client.newRequest<T>({
      collection: this._entitySet,
      method: "POST",
      entity: body
    });
    this._checkError(res);
    return this._getResultSingle(res);

  }

  /**
   * update instance by `UPDATE` method
   *
   * @param id
   * @param body
   */
  async update(id: ODataKeyPredicate, body: DeepPartial<T>): Promise<void> {
    const res = await this._client.newRequest<T>({
      collection: this._entitySet,
      method: "PATCH",
      id,
      entity: body
    });
    this._checkError(res);
  }

  /**
   * delete instance by object keys
   *
   * @param id
   */
  async delete(id: ODataKeyPredicate): Promise<void> {
    const res = await this._client.newRequest<T>({
      collection: this._entitySet,
      method: "DELETE",
      id
    });
    this._checkError(res);
  }

  /**
   * perform bounded action
   *
   * @param actionName the action name, remember add namespace for it
   * @param parameters
   */
  async action(actionName: string, id: ODataKeyPredicate, parameters?: any): any {
    const responseBody = await this._client.newRequest({
      collection: this._entitySet,
      method: "POST",
      id,
      parameters,
      actionName
    });
    this._checkError(responseBody);
    return responseBody;
  }

  /**
   * perform bounded function
   *
   * @param functionName
   * @param id
   */
  async function(
    functionName: string,
    id: ODataKeyPredicate,
    parameters?: any,
    systemOptions?: SystemQueryOptions
  ): any {
    const responseBody = await this._client.newRequest({
      collection: this._entitySet,
      method: "GET",
      id,
      params: systemOptions,
      parameters,
      functionName
    });
    this._checkError(responseBody);
    return responseBody;
  }



}

import {  APIDef, ApiInput } from './apiEndpoint';
import axios from 'axios';

export class RestApiService {

  public blackListAPI = [] as any;
  public invoke<T>(
    def: APIDef,
    apiInput: ApiInput = {},
    data?: T,
    queryParam?: any
  ) {
    return this.invokeAPI(def.api(apiInput), def.method, data, queryParam);
  }

  private invokeAPI<T>(api: string, method: string, body?: T, queryMap?: any) {
    const headers: any = {

      'Accept': '*/*',
      'Content-Type': 'application/json',
    };
    const httpOptions = { headers: headers, params: queryMap, observe: 'body' };
    axios.defaults.baseURL = 'https://www.gatherbox.dk/'
    switch (method) {
      case 'POST':
        return this.post<T>(api, body, httpOptions);
      case 'GET':
        return this.get<T>(api, httpOptions);
      case 'PUT':
        return this.put<T>(api, body, httpOptions);
      case 'DELETE':
        return this.delete<T>(api, httpOptions);
      default:
        break;
    }
  }

  private post<T>(apiUrl: any, body: any, httpOptions: any) {
    return axios({
      method: 'post',
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err: any) => this.handleError<T>(err));
  }

  private get<T>(apiUrl: any, httpOptions: any) {
    return axios({
      method: 'get',
      url: apiUrl,
      params: httpOptions.params,
      headers: httpOptions.headers,
    }).catch((err: any) => this.handleError<T>(err));
  }

  private put<T>(apiUrl: any, body: any, httpOptions: any) {
    return axios({
      method: 'put',
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err: any) => this.handleError<T>(err));
  }

  private delete<T>(apiUrl: any, httpOptions: any) {
    return axios({
      method: 'delete',
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
    }).catch((err: any) => this.handleError<T>(err));
  }

  private handleError<T>(error: any) {
    return Promise.reject(error);
  }
}
export class ApiEndpoint {

  public static GET_POEMS: APIDef = {
    method : 'GET',
    api : () => `restaurant`
  }

}

export interface APIDef {
  method : string;
  api : (ApiInput : ApiInput ) => string
}

export interface ApiInput {
  id? :string

};
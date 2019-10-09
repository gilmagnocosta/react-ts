export enum UsersTypes {
  LOAD_ALL_REQUEST = '@repositories/LOAD_ALL_REQUEST',
  LOAD_ALL_SUCCESS = '@repositories/LOAD_ALL_SUCCESS',
  LOAD_ALL_FAILURE = '@repositories/LOAD_ALL_FAILURE',
}

export interface User {
  id: string,
  firstName: string,
  lastName: string
}

export interface UsersState {
  readonly data: User[],
  readonly loading: boolean,
  readonly error: boolean
}
import { action } from 'typesafe-actions'
import { UsersTypes, User } from './types'

export const loadAllRequest = () => action(UsersTypes.LOAD_ALL_REQUEST);

export const loadAllSuccess = (data: User[]) => action(UsersTypes.LOAD_ALL_SUCCESS, { data });

export const loadAllFailure = () => action(UsersTypes.LOAD_ALL_FAILURE);
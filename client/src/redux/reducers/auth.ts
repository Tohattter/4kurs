import { ILogin, ILogout } from "../actions/fetchAuth";


export interface AuthState {
  isAuth: boolean
}

type ActionType = ILogin | ILogout

const initalState: AuthState = {
  isAuth: false
}

const auth = (state = initalState, action: ActionType): AuthState => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuth: true
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuth: false
      }
    default: return state
  }
}

export default auth
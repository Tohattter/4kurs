import { IRegister} from "../actions/fetchRegister"

export interface RegisterState {
  isRegister: boolean
}

type ActionType = IRegister 

const initialState: RegisterState = {
  isRegister: false,
}

const register = (state = initialState, action: ActionType): RegisterState => {
  switch(action.type) {
    case 'REGISTER':
      return {
        ...state,
        isRegister: true
      }
    default: return state
  }
}

export default register
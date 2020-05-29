import { IShowLoader } from "../actions/showLoader"
import { IHideLoader } from "../actions/hideLoader"

export interface loaderState {
  isLoading: boolean
}

type ActionType = IShowLoader | IHideLoader

const initalState: loaderState = {
  isLoading: false
}

const loader = (state = initalState, action: ActionType ): loaderState => {
  switch(action.type) {
    case 'HIDE_LOADER':
      return {
        ...state,
        isLoading: false
      }
    case 'SHOW_LOADER': 
      return {
        ...state,
        isLoading: true
      }
    default: return state
  }
}

export default loader
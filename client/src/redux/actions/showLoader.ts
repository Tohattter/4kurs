import { SHOW_LOADER } from "../types";


export interface IShowLoader {
  type: typeof SHOW_LOADER
}

const showLoader = (): IShowLoader => ({
  type: SHOW_LOADER
})

export default showLoader
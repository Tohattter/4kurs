import { HIDE_LOADER } from "../types";


export interface IHideLoader {
  type: typeof HIDE_LOADER
}

const hideLoader = (): IHideLoader => ({
  type: HIDE_LOADER
})

export default hideLoader
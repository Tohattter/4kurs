import { HIDE_ALERT } from "../types";

export interface IHideAlert {
  type: typeof HIDE_ALERT
}

const hideAlert = (): IHideAlert => ({
  type: HIDE_ALERT
})

export default hideAlert
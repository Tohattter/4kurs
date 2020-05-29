import { storageKey } from "./actions/fetchAuth"

export const getAxiosConfig = () => {
  const token = JSON.parse(localStorage.getItem(storageKey)).token
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  return config
}
// base axios client
import { baseAxios } from '../baseClient'

export const users = {
  async getUserData(params: any) {
    return await baseAxios.get('api/v1/users', params)
  }
}

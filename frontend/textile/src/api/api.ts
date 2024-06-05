// services
import { auth } from './services/auth'
import { orders } from './services/orders'
import { users } from './services/users'

const api = {
  auth,
  orders,
  users,
  init() {}
}

export { api }
export default api

import * as Hapi from "@hapi/hapi"
import * as Basic from "@hapi/basic"
import { Database } from "./db.mjs"
import { authRouter } from "./auth/router.mjs"
import { validate } from './auth/service.mjs'
import { userRouter } from "./users/router.mjs"
import { placeRouter } from "./places/router.mjs"

(async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })

  try {
    await Database.sync()
    console.log('Database Initialized')
  } catch (error) {
    console.log(error)
  }

  await server.register(Basic)
  server.auth.strategy('simple', 'basic', { validate })



  await server.route([
    {
      method: 'GET',
      path: '/',
      handler: async () => ({ message: 'Server sedang berjalan' })
    }
  ].concat(authRouter, userRouter, placeRouter))

  await server.start()
  console.log('Server running on %s', server.info.uri)
})()

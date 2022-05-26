import { loginController, registerController } from "./controller.mjs";

export const authRouter = [
  {
    method: 'POST',
    path: '/register',
    handler: registerController
  },
  {
    method: 'POST',
    path: '/login',
    handler: loginController
  },
]
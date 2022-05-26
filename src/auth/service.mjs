import bcrypt from 'bcrypt'
import { findByUsername } from '../users/service.mjs';

export const validate = async (request, username, password) => {
  const user = await findByUsername(username)
  if (!user) {
    return { credentials: null, isValid: false }
  }

  const isValid = await bcrypt.compare(password, user.password)
  const credentials = { id: user.id, name: user.name }

  return { isValid, credentials }
};

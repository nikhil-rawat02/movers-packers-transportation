import { FireBaseError } from '../../utils/constants'
import { NOTIFICATIONS } from '../../utils/notification'

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

export const FirebaseErrorHandling = (code: string) => {
  switch (code) {
    case FireBaseError.INVALID_PASSWORD:
      return { message: FireBaseError.WRONG_PASSWORD }

    case FireBaseError.TOO_MANY_ATTEMPT:
      return { message: NOTIFICATIONS.ERROR.tooManyAttempts }

    case FireBaseError.USER_NOT_FOUND:
      return { message: FireBaseError.WRONG_PASSWORD }

    case FireBaseError.INVALID_LOGIN_CREDENTIALS:
      return { message: FireBaseError.WRONG_PASSWORD }

    default:
      return { message: NOTIFICATIONS.ERROR.someThingWrong }
  }
}

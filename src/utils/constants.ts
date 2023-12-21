
export enum UserType {
  ADMIN = 'admin',
  CUSTOMER = 'customer'
}

export enum NAVIGATION {
  HOME = '/',
  ACCOUNTS = '/accounts',
  REQUESTS = '/requests',
  TRANSACTIONS = '/transactions'
}

export enum FireBaseError {
  EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND',
  USER_NOT_FOUND = 'auth/user-not-found',
  INVALID_LOGIN_CREDENTIALS = 'auth/invalid-login-credentials',
  TOO_MANY_ATTEMPT = 'auth/too-many-requests',
  INVALID_PASSWORD = 'auth/wrong-password',
  EMAIL_EXISTS = 'This Email is already in use, try a different Email',
  EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
  OPERATION_NOT_ALLOWED = 'OPERATION_NOT_ALLOWED',
  NO_USER_FOUND = 'This Email is not registered',
  WRONG_PASSWORD = 'Entered Password is wrong, Please try again',
  PROBLEM_WITH_LOGIN_PLEASE_TRY_AGAIN = 'There was a problem with your login. Please try again',
  PROBLEM_WITH_SIGNUP_PLEASE_TRY_AGAIN = 'There was a problem with your signup. Please try again',
  FIREBASE_TOKEN_EXPIRED = 'Firebase token expired/invalid...!!',
  EMAIL_NOT_VERIFIED = 'Email is not verified, Please verify your email',
  PROBLEM_WITH_SENDING_EMAIL_VERIFICATION = 'There was a problem with sending email verification. Please try again'
}

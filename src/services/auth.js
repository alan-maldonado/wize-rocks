import Auth0Lock from 'auth0-lock'
import decode from 'jwt-decode'
import router from '../router'

const ID_TOKEN_KEY = 'id_token'
const ACCESS_TOKEN_KEY = 'access_token'
const PROFILE_KEY = 'profile'
const AUTH_CONTAINER_ID = 'hiw-login-container'

const AUTH_DOMAIN = process.env.AUTH_DOMAIN
const AUTH_CLIENT_ID = process.env.AUTH_CLIENT_ID

const options = {
  container: AUTH_CONTAINER_ID,
  allowedConnections: ['google-oauth2'],
  auth: {
    redirectUrl: `${window.location.origin}/login`,
    responseType: 'id_token token',
    params: {
      scope: 'openid profile email'
    }
  }
}

// initialize
const lock = new Auth0Lock(AUTH_CLIENT_ID, AUTH_DOMAIN, options)

lock.on('authenticated', (authResult) => {
  setIdToken(authResult.idToken)
  setAccessToken(authResult.accessToken)
  lock.getUserInfo(authResult.accessToken, (error, profile) => {
    if (error) {
      console.warn(error)
      return
    }

    lock.hide() // hide before redirect
    setProfile(profile)

    setTimeout(() => {
      router.push('/')
    }, 0)
  })
})

export const requireAuth = (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
}

export const getIdToken = () => {
  return localStorage.getItem(ID_TOKEN_KEY)
}

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export const getProfile = () => {
  return JSON.parse(localStorage.getItem(PROFILE_KEY))
}

const clearIdToken = () => {
  localStorage.removeItem(ID_TOKEN_KEY)
}

const clearAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

const clearProfile = () => {
  localStorage.removeItem(PROFILE_KEY)
}

// Helper function that will allow us to extract the access_token and id_token
export const getParameterByName = name => {
  const match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

// Get and store access_token in local storage
const setAccessToken = (accessToken) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
}

// Get and store id_token in local storage
const setIdToken = (idToken) => {
  localStorage.setItem(ID_TOKEN_KEY, idToken)
}

const setProfile = (profile) => {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
}

const getTokenExpirationDate = encodedToken => {
  if (!encodedToken || encodedToken === 'null') {
    return null
  }
  const token = decode(encodedToken)
  if (!token.exp) {
    return null
  }

  const date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}

const isTokenExpired = token => {
  const expirationDate = getTokenExpirationDate(token)
  if (!expirationDate) {
    return true
  }
  return expirationDate < new Date()
}

/* Public functions */

export const renderLogin = () => {
  // render
  lock.show()
}

export const isLoggedIn = () => {
  const idToken = getIdToken()
  return idToken && !isTokenExpired(idToken)
}

export const logout = () => {
  clearIdToken()
  clearAccessToken()
  clearProfile()
  router.replace('/login')
}

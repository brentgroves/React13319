import * as types from '../constants/ActionTypes'


const initState = {
  authenticateIsSubmitting: false,
  isAuthenticated:false,
  isAdmin:false,
  roles:[],
  email:'',
  userName: '',
  firstName:'',
  lastName:'',
  authenticateError:{
    error:false,
    message:''
  }
}


const User = (state = initState, action) => {
  switch (action.type) {
    case types.AUTHENTICATE_IS_SUBMITTING:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         authenticateIsSubmitting: action.authenticateIsSubmitting
       })
    }
    case types.SET_AUTHENTICATE_ERROR:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         authenticateError: {
           error: true,
           message: action.error
         }
       })
    }
    case types.CLEAR_AUTHENTICATE_ERROR:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
        authenticateError: {
          error: false,
          message: ''
        }
       })
    }
    case types.SET_IS_AUTHENTICATED:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         isAuthenticated: action.isAuthenticated
       })
    }
    case types.SET_IS_ADMIN:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         isAdmin: action.isAdmin
       })
    }
    case types.SET_ROLES:
    {
      return Object.assign({}, state, {
        roles: action.roles
      })
    }
    case types.SET_USERNAME:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         userName: action.userName
       })

    }
    case types.SET_EMAIL:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         email: action.email
       })

    }
    case types.SET_FIRSTNAME:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         firstName: action.firstName
       })

    }
    case types.SET_LASTNAME:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         lastName: action.lastName
       })

    }
    default:
      return state
  }
}

export default User

const initialState = {
  StoreData:{
    response:"",
    error: null,
    loading: false
  },
  Getdetails:{
    response:"",
    error: null,
    loading: false
  },
  Getcarddetails:{
    response:"viswa",
    error: null,
    loading: false
  },
  LoginStatus:{
    response:"",
    error: null,
    loading: false
  },
  SignUp:{
    response:"",
    error: null,
    loading: false
  }

};

export default (state = initialState, action) => {
  switch (action.type) {

  case "StoreData":
  return {
    ...state,
    StoreData:{ 
        response: action.payload,
        error: null,
        loading: false
}
  }
  case "Getdetails":
  return {
    ...state,
    Getdetails:{ 
        response: action.payload,
        error: null,
        loading: false
}
  }
  case "Getcarddetails":
  return {
    ...state,
    Getcarddetails:{ 
        response: action.payload,
        error: null,
        loading: false
}
  }

  case "LoginUser":
  return {
    ...state,
    LoginStatus:{ 
        response: action.payload,
        error: null,
        loading: false
}
  }
  case "SignUp":
  return {
    ...state,
    SignUp:{ 
        response: action.payload,
        error: null,
        loading: false
}
  }

  default:
    return state
  }
}

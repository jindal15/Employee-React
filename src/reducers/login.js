import { history } from "../store";

export const USER_LOGIN = 'login/USER_LOGIN';

const credential = { 
    username: "Employee_One@gmail.com", 
    password: 'Employee123' 
};
    

const initialValues = {
    isAuthenticated: false
};

export default (state = initialValues, action) => {
  switch (action.type) {
    case USER_LOGIN:
        if(action.payload.username === credential.username && action.payload.password === credential.password) {
            state.isAuthenticated = true;
            history.push("/dashboard");
        }
      return {
        ...state,
      };

    default:
      return state;
  }
};


export const login = (data) => {
    return {
        type: USER_LOGIN,
        payload: data || {}
    };
};
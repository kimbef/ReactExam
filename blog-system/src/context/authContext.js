import React, { createContext, useReducer } from 
'react'; const AuthContext = createContext(); const 
authReducer = (state, action) => {
  switch (action.type) { case 'LOGIN': return { 
      ...state, user: action.payload };
    case 'LOGOUT': return { ...state, user: null }; 
    default:
      return state;
  }
};
export const AuthProvider = ({ children }) => { 
  const [state, dispatch] = useReducer(authReducer, 
  { user: null }); const login = (userData) => {
    dispatch({ type: 'LOGIN', payload: userData });
  };
  const logout = () => { dispatch({ type: 'LOGOUT' 
    });
  };
  return ( <AuthContext.Provider value={{ ...state, 
    login, logout }}>
      {children} </AuthContext.Provider> );
};
export default AuthContext;

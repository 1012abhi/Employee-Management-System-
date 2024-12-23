import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
// import { useContext } from 'react';

export const AuthContext = createContext({employees: [], admin: {}});
// console.log(AuthContext);

// localStorage.clear()
// setLocalStorage()
export const AuthProvider = ({children}) => {
  // console.log({children});
  
  const [authData, setAuthData] = useState({})
  // console.log(authData);
  
  useEffect(() => {
    setLocalStorage()
    const {employees, admin} = getLocalStorage()
    // console.log(employees, admin);
    setAuthData({employees, admin})
    
  }, []);

  const update = (updatedEmployees) => {
    setAuthData({ employees: updatedEmployees });
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };


  const updateNewTask = (AcceptedTask) => {
    setAuthData((prev) => ({...prev, employees: AcceptedTask}))
    localStorage.setItem('employees', JSON.stringify(AcceptedTask));
  }
  const updateCompleted = (CompletedTask) => {
    setAuthData((prev) => ({...prev, employees: CompletedTask}))
    localStorage.setItem('employees', JSON.stringify(CompletedTask));
  }
  
  return (
    <AuthContext.Provider value={{authData,setAuthData,update,updateNewTask,updateCompleted }}>
      {children}
    </AuthContext.Provider>
  )
}



// export const useAuth = () => {
//   return useContext(AuthContext)     // Context ka matlb hota hai jis chiz (संदर्भ) ke bare me ham baat kar rahe hai
//   //to ham baar kr rahe hai Todo ke baare me 
// }

// export const AuthProvider = AuthContext.Provider
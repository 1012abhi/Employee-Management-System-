import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import EmployeeDashboard from '../src/components/Dashboard/EmployeeDashboard'
import AdminDashboard from '../src/components/Dashboard/AdminDashboard'
import { AuthContext, AuthProvider } from './context/AuthContextProvider'

function App() {
  
  const [user, setUser] = useState(null)
  const [loggedInUser, setloggedInUser] = useState(null)
  
  const {authData}= useContext(AuthContext)
 
  useEffect(() => {
    // localStorage.clear();
    setLocalStorage()
    const loggedInUserData= localStorage.getItem('loggedInUser')
    // console.log(loggedInUserData);
    
    if(loggedInUserData) {
      const userData = JSON.parse(loggedInUserData)
      // console.log(userData);
      setUser(userData.role)
      setloggedInUser(userData.data)
      // console.log(userData);
      // console.log(userData.data);
      
    }
    // setUser(loggedInUser.role)

  },[])
  
  // setLocalStorage()
  const handleLogin = (email,password) => {
    if (
      authData &&
      authData.admin && // Check if admin data exists
      authData.admin.email === email && // Directly check email and password
      authData.admin.password === password
    ) {
      
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: authData.admin }));
      setloggedInUser(authData.admin); // Use authData.admin directly
      setUser("admin");

    } else if (Array.isArray(authData.employees)) {
      const foundEmployee = authData.employees.find((e) => e.email === email && e.password === password);
      
      if (foundEmployee) {
        
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: foundEmployee }));
        setloggedInUser(foundEmployee); // Use foundEmployee here
        setUser("employee");
        // console.log(foundEmployee);
      } else {
        alert("Invalid email or password");
      }

    } else {
      alert("Invalid email or password");
    }
      
  }


  return (

    <AuthContext.Provider value={{authData, loggedInUser,setloggedInUser, setUser}}>
      {/* {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )} */}
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : user === 'employee' ? (
        <EmployeeDashboard />
      ) : (
        <Login handleLogin={handleLogin} />
      )}

    </AuthContext.Provider>
  )
}

export default App
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { setLocalStorage } from "../../utils/localStorage";

function Header() {
  // const [loggedInUser, setloggedInUser] = useState(null)
  const {loggedInUser, setUser} = useContext(AuthContext)
  // console.log(loggedInUser);
  
  const logOutUser = (e) => {
    localStorage.setItem('loggedInUser', '')
    setUser('')
    // window.location.reload()
  }
  
  return (
    <div>
        <header className="flex justify-between items-center mb-8">
        
            <h1 className=" text-2xl font-medium">Hello <br />
              <span className="text-3xl font-bold text-gray-900 ">{loggedInUser.firstName} 👋</span> </h1>
            <div className="flex items-center space-x-4">
              <button 
              onClick={logOutUser}
              className=" border-2 py-2 px-3 rounded-full font-bold shadow-md text-red-600 hover:shadow-lg"
              type="button" 
              // onChange={louOutUser}
              
              >
                Log Out
                </button>
            </div>
        </header>
    </div>
  );
}

export default Header;

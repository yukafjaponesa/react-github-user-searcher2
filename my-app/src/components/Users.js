import React, {useState, useEffect, createContext} from "react";
import UserDetails from "./UserDetails";
import debounce from "lodash/debounce";

export const UsersContext = createContext();

const UsersContextProvider = (props) => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if(!search) {
      return;
    }

    setLoading(true);

    const getUsers = debounce(() => {
      console.log("debounce")
      fetch(`https://api.github.com/search/users?q=${encodeURIComponent(search)}` //when you set value in query param, use encode
        , {
        signal: abortController.signal,
      }
    )
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          if(res.items) {
            setUsers(res.items)
            setLoading(false)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }, 250)

   const abortController = new AbortController()



    getUsers();
    // Abort previously created Fetch request
    // if search param has been changed in order
    // not to overload server with redundant requests
    return () => {
      abortController.abort()
    }
  }, [search]) // every time search changes, we call the fn

// #3 start
  return (
    <UsersContext.Provider
      className="App"
      value={{users, loading, search, setSearch}}
    >
      {props.children}
    </UsersContext.Provider>
   )
   // #3 end here
};

export default UsersContextProvider

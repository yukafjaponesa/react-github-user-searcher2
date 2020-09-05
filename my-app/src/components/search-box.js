import React, {useContext} from "react";
import {UsersContext} from "./Users";
import UserDetails from "./UserDetails";


const SearchBox = () => {
  const {
    search,
    setSearch,
    loading,
    setLoading,
    users,
    setUsers }
   = useContext(UsersContext);

  return(
    <div className="App">
      <h1>Github user searcher</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => (setSearch(e.target.value))}
        value={search}
      />

      {loading && <p>Loading...</p> }

      {!loading &&
        users.map((user, name) => // {}you have ti return inthis fn, () using this return directly
         <UserDetails
             key={name}
             {...user}
         />
       )}
    </div>
  )
}

export default SearchBox

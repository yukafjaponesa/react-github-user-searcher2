import React from "react"

function UserDetails(props) {
  return(
    <div className="user-list">
      <a href={`https://github.com/${props.login}`}>{props.login}</a>
    </div>
  )
}

export default UserDetails

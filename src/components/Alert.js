import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
          const lower = word.toLowerCase();   //This is to capitalize 1st word "s"
          return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
  </div>
  )
}

export default Alert
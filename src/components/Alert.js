import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    //props.alert used to see if props.alert is not null.
    //NOTE: This happens because all the jsx will be converted to javascript calls.
   props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>              {props.alert.msg}
  </div>
  )
}

export default Alert
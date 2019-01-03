import React from 'react'

export default ({input, label, meta: { error, touched }}) => {
  return (
    <div>
      <label> {label} </label>
      <input {...input} style={{marginBottom: '5px'}}  />
      <p className="red-text">{touched && error} </p>
    </div>
  )
}
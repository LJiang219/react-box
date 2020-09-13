import React from 'react'
import { useState } from "react";

export default function Form(props) {
  const [val, setVal] = useState('');
  return (
    <div>
      <input type="text"  onChange={e => {
        setVal(e.target.val)
      }} />
    </div>
  )
}

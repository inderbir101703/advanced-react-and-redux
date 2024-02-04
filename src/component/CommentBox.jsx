import React, { useState } from "react";

const CommentBox=()=>{
    const [areaData,setAreaData]=useState()

    const handleClick=(e)=>{
   console.log(e.target.value)
   setAreaData(e.target.value)
    }
    const handleSubmit=(event)=>{
    event.preventDefault()
      setAreaData('')
    }
    return <form onSubmit={handleSubmit}>
      <h4>add a comment</h4>
      <textarea onChange={handleClick} value={areaData}/>
         <button >submit data</button>
    </form>
}

export default CommentBox
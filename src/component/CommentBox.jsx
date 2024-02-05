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
      <label htmlFor="comment-box">add a comment</label>

      <textarea onChange={handleClick} id="comment-box" value={areaData}/>
         <button >submit data</button>
    </form>
}

export default CommentBox
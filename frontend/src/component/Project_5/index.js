import React, { useState, useEffect } from "react";
export default function Interview() {
  let inputValue = React.createRef();
  //   useEffect(() => {
  //     // Anything in here is fired on component mount.
  //     console.log("component mount");
  //     return () => {
  //       console.log("component unmount");
  //       // Anything in here is fired on component unmount.
  //     };
  //   }, [console.log("update")]);
  let handleSubmit = (e) => {
    alert(`Input value: ${inputValue.current.value}`);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

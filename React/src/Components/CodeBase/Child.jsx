import React from "react";

const Child = React.memo(function Child({ sendMessage }) {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={() => sendMessage("Hello again")}>
        Send Message
      </button>
    </div>
  );
})

export default Child;
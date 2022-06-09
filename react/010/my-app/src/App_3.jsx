import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(true);

  function clickLike() {
    setLike(!like);
  }

  return(
      <div>
          <button onClick={clickLike}>like </button><span>{like?'💖':''}</span>
      </div>
  )
}

function App() {
  return (
    <div>
      <Resume/>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
    </div>
  );
}

export default App;
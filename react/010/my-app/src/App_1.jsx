function Resume() {
  let like = 0;

  function clickLike() {
      like += 1;
      console.log(like);
  }

  return(
      <div>
          <button onClick={clickLike}>like <span>{like}</span></button>
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
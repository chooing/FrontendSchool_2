function App() {
  return (
    <Hello name='룰루랄라'/>
  );
}

function Hello({name}){
  if(name){
      return(
        <div>
          <h1>{name}</h1>
        </div>
      )
  }
  return <Noname/>
}

function Noname(){
  return (
    <div>
      <h1>이름없다~</h1>
    </div>
  )
}


export default App;
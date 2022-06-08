import './App.css'

function TodayDate(){
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return(
    <div>
      <h1>오늘의 날짜 가져오기</h1>
      <h2>년: {year}</h2>
      <h2>월/일: {String(month).padStart(2,'0')}/{String(day).padStart(2,'0')}</h2>
      <h2>시간: {hour>12?hour-12:hour}시 {minute}분 {second}초</h2>
    </div>
  )

}


function App() {
  //주석입니다
  const name='룰루랄라';
  function age(){
    return 10
  }
  const 로그인 = true;
  const someStyle = {backgroundColor:"black", color:"white"};

  return (
    <div>
      {/* 리턴할 때 주석입니다. */}
      {/* 
      주
      석
      길
      게
      길
      게
       */}
      <h1 className='one'>H2llo world</h1>
      <h2 style={{backgroundColor:"purple", color:"gold"}}>hellloooo</h2>
      <h2 style={someStyle}>hellloooo</h2>
      <h2>heelllooo {name}, {age()}</h2>
      <p>{로그인?'로그아웃하세요':'로그인하세요'}</p>

      <TodayDate/>
    </div>
  );
}

export default App;
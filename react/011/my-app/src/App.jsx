import React, { useState } from "react";

function About(){
  return (
    <section>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora, nam temporibus doloribus aut nisi et doloremque inventore adipisci dolore perferendis voluptatum rem quibusdam veritatis harum, nobis debitis maiores accusamus!</p>
    </section>
  )
}
function Product(){
  return (
    <section>
      <h2>Product</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora, nam temporibus doloribus aut nisi et doloremque inventore adipisci dolore perferendis voluptatum rem quibusdam veritatis harum, nobis debitis maiores accusamus!</p>
    </section>
  )
}
function Contact(){
  return (
    <section>
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora, nam temporibus doloribus aut nisi et doloremque inventore adipisci dolore perferendis voluptatum rem quibusdam veritatis harum, nobis debitis maiores accusamus!</p>
    </section>
  )
}

function NotFound(){
  return <h2>not found</h2>
}

function Contents({listName}){
  if(listName==='about'){
    return <About/>
  }else if(listName==='product'){
    return <Product/>
  }else if(listName==='contact'){
    return <Contact/>
  }else {
    return <NotFound/>
}
}

function NavBar(){
  const [listName, setListName]= useState('about');
  const handleOnClickList=(e)=>{
    setListName(e.target.id);
  }
  return(
    <>
      <nav>
        <ul>
          <li 
            id='about'
            style={listName==='about'? {color:"blue"} : {color:"#111"}}
            onClick={handleOnClickList}
            >
            about
          </li>
          <li 
            id='product'
            style={listName==='product'? {color:"blue"} : {color:"#111"}}
            onClick={handleOnClickList}
            >
            product
          </li>
          <li 
            id='contact'
            style={listName==='contact'? {color:"blue"} : {color:"#111"}}
            onClick={handleOnClickList}
            >
            contact
          </li>
        </ul>
      </nav>
    
      <Contents listName={listName}/>
    </>

  )
}

function App() {
    return (
        <NavBar />
    );
}

export default App;
import React from 'react'




function Jumbotron() {
const imgUrl = "/images/cocktailBg4.jpg"
const style={
  bg:{
    backgroundImage: "url(" + imgUrl + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    
  }  
}
  return (
  <div className="jumbotron jumbotron-fluid text-center bg-dark " id="bg" style={style.bg}>
    <div className= "container">
     <h1>Drinktender</h1>
    </div>
  </div>

  )
}

export default Jumbotron;
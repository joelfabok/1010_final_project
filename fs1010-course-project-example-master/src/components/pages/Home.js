import React from 'react';
import mainLogo from '../images/nameLogo.png'



const Home = () => {
  
    return(
        <section className="full">
        <div className="one" />
        <div id="logo"><img  src={mainLogo} alt="JFWD"/></div>
        <div className="border">
        <h1 className="name">Joel Fabok</h1>
        <h6 className="est">Est. 2020</h6>
        </div>
        
      </section>
    )
}

export default Home
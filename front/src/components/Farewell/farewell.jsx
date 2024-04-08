import React, { useState } from 'react';
import './farewell.css'; 

const Farewell = () => {

  return (
    <section className="farewell-container"> 
    <div>
           <h2>¡Gracias por tu interés!</h2>
     <p>Espero que hayas disfrutado tanto como yo.</p>
     <p>Quién sabe, tal vez nuestros caminos se crucen de nuevo en el futuro.</p>
    </div>
    <img src="/buzon.png" alt="Welcome" />
    </section>
  );
}

export default Farewell;

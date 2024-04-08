import React, { useState } from 'react';
import './events.css'; 

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["feliz.jpg", "manpower.jpg", "meta.jpg", "meta2.jpg", "empleatech.jpg", "meta3.jpg", "metashan.jpg", ];

  const changeImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <main className="events-container"> 
     
      <div className="events-text">
         <div>
        <h1>Eventos</h1>  
        <p>Cada experiencia ha sido una oportunidad invaluable para aprender, conectar con expertos del campo y explorar nuevas ideas. Aquí podeís echar un vistazo a algunos de los eventos a los que he podido asistir.</p>
        </div>
      <img src="/keyboard.png" alt="Welcome" />
       
      </div>
      <section className="events-pics">
        <article className="events">
          <div className="pic" onClick={() => changeImage(currentIndex !== 0 ? currentIndex - 1 : images.length - 1)}>
            <img src={"/" + images[currentIndex !== 0 ? currentIndex - 1 : images.length - 1]} alt="Left" />
          </div>
          <div className="pic main" onClick={() => changeImage(currentIndex)}>
            <img src={"/" + images[currentIndex]} alt="Main" />
          </div>
          <div className="pic" onClick={() => changeImage(currentIndex !== images.length - 1 ? currentIndex + 1 : 0)}>
            <img src={"/" + images[currentIndex !== images.length - 1 ? currentIndex + 1 : 0]} alt="Right" />
          </div>
        </article>
      </section>
    </main>
  );
}

export default Events;

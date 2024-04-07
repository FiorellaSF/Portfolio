import React from 'react';
import './about.css'; 

const About = () => {
  return (
    <main className="about-container">
      <div className="about-text">
        <h1>¡Hola!</h1>
        <p>Me llamo Fiorella y estoy encantada de compartir un poco sobre mí. Imaginen a una chica joven con una sonrisa siempre lista y un amor desbordante por la naturaleza y los animales.</p>
        <h2>¡Esa soy yo!</h2>
        <p>Mi pasión por aprender y crecer me ha llevado a querer seguir estudiando y formándome tanto a nivel personal como profesional. Creo firmemente en el poder de la educación continua para abrir puertas y expandir horizontes. Por eso, estoy comprometida en seguir ampliando mis conocimientos y habilidades.</p>
        <p>En mi viaje de autodescubrimiento, he encontrado que la mejor manera de aprender es a través de la experiencia y el intercambio con los demás. Me encanta sumergirme en nuevos desafíos y enfrentarme a ellos con una actitud abierta y positiva. Siempre estoy buscando oportunidades para crecer.</p>
        <p>Si hay algo más que les gustaría saber sobre mí, ¡no dudes en preguntar! Estoy aquí para compartir mi historia, mis experiencias y mi pasión por el mundo que nos rodea.</p>
        <h2>¡Gracias por tomarse el tiempo de conocerme un poco más!</h2>
      </div>
      <img src="/greeting.png" alt="Welcome" />
    </main>
  );
}

export default About;

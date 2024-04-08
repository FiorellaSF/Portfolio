import React, { useState, useEffect } from 'react';
import './welcome.css'; 

const Welcome = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 50; // Velocidad de escritura (en milisegundos)
  
  const words = ["Hola, soy Fiorella, y soy desarrolladora Web", "Hi, im Fiorella, and I am a Web developer."];
  
  useEffect(() => {
    const handleTyping = () => {
      const currentWordIndex = loopNum % words.length;
      const fullText = words[currentWordIndex];
      
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
      } else {
        setText(fullText.substring(0, text.length - 1));
      }
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const typingTimer = setTimeout(handleTyping, typingSpeed);
    
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, loopNum, words]);

  return (
    <main className="welcome-container">
      <img src="/welcome.png" alt="Welcome" />
      <section className='welcome-text'>
        <div className='welcome'>
          <h1>{text}</h1>
        </div>
      </section> 
      <div className='buttons'>
      <a href='https://es.linkedin.com/in/fiorella-sandoval-franco-92541b2a2' class="button-57" role="button"><span class="text">Linkedin</span><span>Visítame!</span></a>
      <a href='https://github.com/FiorellaSF' class="button-57" role="button"><span class="text">GitHub</span><span>Visítame!</span></a>
        </div>
    </main>
  );
};

export default Welcome;

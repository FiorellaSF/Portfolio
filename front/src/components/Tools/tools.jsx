import React from 'react';
import './tools.css'; 

const Tools = () => {
  return (
    <main className="tools-container"> 
      <h1>Herramientas</h1>
      <div className="tools-wrapper">
        <div className="working-container">
          <img src="/working.png" alt="Welcome" className="working" />
        </div>
        <div className="tools">
          <div className="tool">
            <img src="html.png" alt="Logo de Html" />
            <p>HTML</p>
          </div>
          <div className="tool">
            <img src="css.png" alt="Logo de CSS" />
            <p>CSS</p>
          </div>
          <div className="tool">
            <img src="js.png" alt="Logo de JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="tool">
            <img src="react.png" alt="Logo de React" />
            <p>React</p>
          </div>
          <div className="tool">
            <img src="nodejs.png" alt="Logo de NodeJS" />
            <p>Node JS</p>
          </div>
          <div className="tool">
            <img src="github.png" alt="Logo de GitHub" />
            <p>GitHub</p>
          </div>
          <div className="tool">
            <img src="gitbash.png" alt="Logo de GitBash" />
            <p>GitBash</p>
          </div>
          <div className="tool">
            <img src="trello.png" alt="Logo de Trello" />
            <p>Trello</p>
          </div>
          <div className="tool">
            <img src="figma.png" alt="Logo de Figma" />
            <p>Figma</p>
          </div>
          <div className="tool">
            <p>Proximamente más...</p>
          </div>
        </div>
      </div>
      <div className="tools-text">
        <p>Emocionada por todo lo aprendido, estoy deseando continuar mi camino en el mundo de la tecnología. Cada obstáculo superado y cada nueva habilidad adquirida ha sido un logro personal,</p>
        <h2>y me gustaría seguir ampliándolos!</h2>
      </div>
    </main>
  );
}

export default Tools;

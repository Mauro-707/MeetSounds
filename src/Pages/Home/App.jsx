import '../../css/Home2.css'
import React, { useState } from 'react';

import Publicaciones from '../../components/Publicacion';
const App = () => {
  // Estado para controlar cuál div está visible
  const [activeDiv, setActiveDiv] = useState('div1'); // 'div1' es el div que se muestra por defecto

  return (
    <div className='Contenedor'>
      {/* Botones para cambiar los divs */}
      <nav className='nav'>
        <button className='btn_div' onClick={() => setActiveDiv('div1')}>Para mi</button>
        <button className='btn_div' onClick={() => setActiveDiv('div2')}>Explorar</button>
      </nav>
 

      
      {/* Divs que se muestran/ocultan basados en el estado */}
      <div className='Div_1' style={{ display: activeDiv === 'div1' ? 'block' : 'none' }}>
        
        
        {/* <div className='Publicacion'>
          <div className='Publicacion_nav'>
            <img className='img_perfil' src="/public/perfil_imagen.png" alt="img_perfil" />
            <div className='Publicacion_usuario'>
              <p className='Nombre_usuario'>Nombre de Usuario</p>
              <p className='usuario_a'>@Usuario</p>
            </div>
            <p className='Tiempo'>- 1min</p>
            <img className='img_mas' src="/public/solicitud.png" alt="" />
          </div>
          <div className='Publicacion_texto'>
            <p>Hola, soy el texto de la publicacion, y este sera un texto muy largo para ver si se rompe XD, si se rompio :,V</p>
          </div>
          <div className='Publicacion_media'>
            <MyComponent_img />
          </div>
          <div className='reaccion'>
            <LikeButton/>
          </div>
        </div> */}
        <div className='Publicacion'>
          <Publicaciones/>
        </div>

      </div>



      <div className='Div_1' style={{ display: activeDiv === 'div2' ? 'block' : 'none' }}>
        <h2>Contenido del Div 2</h2>
        <p>Este es el contenido del segundo div.</p>
        <img id="myImage" src="/public/back_man.jpg" alt="Descripción de la imagen" />
      </div>
    </div>


  );
};

export default App;
